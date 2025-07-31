import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {


  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("isLoged");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/dashboard" className="NavLink">
              <span className="icon">
                <i className="fa-solid fa-gauge"></i>
              </span>
              <span className="title">Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/product" className="NavLink">
              <span className="icon">
                <i className="fa-brands fa-product-hunt"></i>
              </span>
              <span className="title">Product</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/addproduct" className="NavLink">
              <span className="icon">
                <i className="fa-solid fa-plus"></i>
              </span>
              <span className="title">Add-Category</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/user" className="NavLink">
              <span className="icon">
                <i className="fa-solid fa-user"></i>
              </span>
              <span className="title">Users</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/login" className="NavLink">
              <span className="icon">
                <i className="fa-solid fa-right-from-bracket"></i>
              </span>
              <span className="title" onClick={handleLogout}>
                Log Out
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
