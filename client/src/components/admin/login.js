import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/checkusers",
        loginInfo 
      );

      if (res.status === 200) {
        alert(res.data.message);
        localStorage.setItem("isLoged", true);
        navigate("/dashboard"); 
      }
    } catch (error) {
      console.error("Error during login:", error.message);

      if (error.response && error.response.status === 401) {
        alert("Invalid username or password. Please try again.");
      } else {
        alert("An error occurred. Please try again later.");
      }
    }

    setLoginInfo({
      username: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div>Username:</div>
          <div className="input-group">
            <span className="icon">&#xf007;</span>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              required
              value={loginInfo.username}
              onChange={handleChange}
            />
          </div>

          <div>Password:</div>
          <div className="input-group">
            <span className="icon">&#xf023;</span>
            <input
              type="text"
              name="password"
              placeholder="Enter password"
              required
              value={loginInfo.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
