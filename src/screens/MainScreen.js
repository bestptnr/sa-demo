import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../stylesheets/style.css";
import "../stylesheets/index.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";

const MainScreen = () => {
  const [userData, setUserData] = useState([])
  const [isloading, setLoading] = useState(false)
  const _id = localStorage.getItem('code')

  let count = 1
  let color = ['#003a44', '#06565b', '#66a4ac']
  let count_color = -1
 

  useEffect(() => {
    axios.post('http://localhost:3300/sa/getUser', { std_code: _id })
      .then((response) => {
        return response.data
      }).then((data) => {
        setUserData(data)
        setLoading(true)

      })
  }, [])
  if (!isloading) {
    return <LoadingScreen />
  } else {
    return (
      <div>
        <Navbar />
        <div class="container">
          <div class="box-main">
            <h1>
              Hello <span>{userData[0].fullname}</span> <br />
              Let's start working
            </h1>
            <img src="/images/book.png" alt="" />

            <span class="dot-1 dot"></span>
            <span class="dot-2 dot"></span>
            <span class="dot-3 dot"></span>
            <span class="dot-4 dot"></span>
            <span class="dot-5 dot"></span>
            <span class="dot-6 dot"></span>
          </div>
        </div>
        <div className="container container-course">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Course</h2>
            <div>
              <i className="bi bi-plus-circle-fill"></i>
            </div>
          </div>

          <div className="course-flex">
            {userData.map((data) => {
              if (count_color == 2) count_color = -1
              count_color++
              let src = "/images/proson-" + count + ".png"
              count++
              if (count > 3) count = 1


              return (
                <Link to={"/subject/" + data.subj_id} className="mybtn">
                  <a >
                    <div className="course" style={{ backgroundColor: color[count_color] }}>
                      <div className="in-course-flex">
                        <h2>{data.subj_name}</h2>
                        <i className="bi bi-three-dots-vertical"></i>
                      </div>
                      <h4>{data.teachname}</h4>
                      <div className="course-bottom">
                        <i className="bi bi-folder-fill"></i>
                        <img src={src} alt={count} />
                      </div>
                    </div>
                  </a>
                 </Link>
              )
            })}

            {/* <a href="" style={{ display: "block" }}>
              <div className="course" style={{ backgroundColor: "#66a4ac" }}>
                <div className="in-course-flex">
                  <h2>SYSTEM ANALYSIS</h2>
                  <i className="bi bi-three-dots-vertical"></i>
                </div>
                <h4>DATABASE</h4>
                <div className="course-bottom">
                  <i className="bi bi-folder-fill"></i>
                  <img src="/images/proson-3.png" alt="person" />
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    );
  }

};

export default MainScreen;
