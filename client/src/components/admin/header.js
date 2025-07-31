import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoged");
    navigate("/login"); 
  };
  return (
    <>
      <header className="header1">
        <div className="logo1">
          <img
            src={require("../images/HARMAIN-MINAR-LOGO.jpg")}
            alt="Logo"
          />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-bar" />
          <i className="fa-solid fa-magnifying-glass search"></i>
        </div>
        <div className="user-info1">
          <i className="bell fa-regular fa-bell"></i>
          <img
            src="https://demo.opencart.com/catalog/language/en-gb/en-gb.png"
            alt=""
          />
          <div className="profile">
            <i className="fa-solid fa-user-circle"></i>
          </div>

          <NavLink to="/login" className="profile">
            <i id="logout" className="fa-solid fa-right-from-bracket fa-sm"></i>
            <span onClick={handleLogout}>Log Out</span>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
