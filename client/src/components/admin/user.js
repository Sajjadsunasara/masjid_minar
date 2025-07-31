import React from "react";
import { MainDashboard } from "./main-dashboard";
import Sidebar from "./sidebar";
import Header from "./header";
import "../css/user.css";



const User = () => {


  
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <MainDashboard>
          <div className="section">
            <h1>
              All Users
              <button className="add-user-button">
                <i className="fa-solid fa-user-plus"></i>
              </button>
            </h1>
            <table className="teble">
              <thead className="th">
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </MainDashboard>
      </div>
    </>
  );
};

export default User;
