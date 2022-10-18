import React from 'react'
import { useNavigate,Navigate } from "react-router-dom";
import "../stylesheets/home.css";

const NavbarSubject = () => {
  return (
    <div className="nav">
    <div className="nav-box-1">
        <i class="bi bi-list" style={{fontSize:'42px',color:"#eeeeee"}}></i>
      <ul className="menu">
        <li className="nav-link">
          <a href="" className="nav-item ">
            Course
          </a>
        </li>
        {/* <li className="nav-link">
          <a href="" className="nav-item">
            Subject
          </a>
        </li>
        <li className="nav-link">
          <a href="" className="nav-item">
            Calendar
          </a>
        </li>
        <li className="nav-link">
          <a href="" className="nav-item">
            To-do
          </a>
        </li> */}
      </ul>
    </div>
    <div className="nav-box-2">
      {/* <div>
        <i className="bi bi-search"></i>
      </div>
      <div>
        <i className="bi bi-bell-fill"></i>
      </div>
      <div>
        <img
          src="/images/profile.png"
          alt="profile"
          width="70px"
          style={{display:"block",paddingLeft:"1rem"}}
        />
      </div> */}
      <div>
          {/* <button onClick={}>LOGOUT</button> */}
      </div>
    </div>
  </div>
  )
}

export default NavbarSubject