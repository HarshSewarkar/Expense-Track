// Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./assets/Home.css";

const Home = () => {
  return (
    <>
      <div className="cristalBall">
        <div className="cristal">
          <div className="ball">
            <div className="name">
              <h1>Welcome to Expense Tracker</h1>
              <p>
                Track your expenses easily with our simple and intuitive
                application.
              </p>
              <div className="cta-buttons">
                <Link className="btn" to="/create">
                  <span>Create</span>
                  <div className="liquid"></div>
                </Link>
                <br />
                <Link className="btn" to="/show">
                  <span>Show Expenses</span>
                  <div className="liquid"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="circle">
          <div className="circle1">
            <div className="circle2">
              <div className="circle3">
                {/* <div className="star">Hire</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
