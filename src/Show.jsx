// Show.js

import React, { useContext } from "react";
import { ExpenseContext } from "./Context";
import { Link } from "react-router-dom";
import "./assets/Show.css";

const Show = () => {
  const [expenses, setExpenses] = useContext(ExpenseContext);
  const handleDelete = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <>
      <div className="cristalBall">
        <div className="cristal">
          <div className="ball">
            <div className="name">
              <div className="login-box3">
                <div className="user-box2">
                  <Link to="/" className="nav-linkl">
                    Go Home
                  </Link>
                  <Link to="/create" className="nav-linkl">
                    Create Expenses
                  </Link>
                  <Link to="/filter" className="nav-linkl">
                    Filter Expenses
                  </Link>
                  <h2>
                    Total Spent: Rs. 
                    {expenses.reduce((ac, cv) => ac + +cv.amount, 0)}
                  </h2>
                </div>
                <div className="login-box2">
                <div className="user-box">
                  {expenses.length === 0 ? (
                    <p>No Data Present</p>
                  ) : (
                    expenses.map((e, index) => (
                      <ul key={index} className="expense-box">
                        <li>
                          <i>Use For: </i> {e.category}
                        </li>
                        <li>
                          <i>Payment Mode: </i>( {e.payment} )
                        </li>
                        <li>
                          <i>Amount: </i> {e.amount} Rs.
                        </li>
                        {/* <li>
                          <i>Remark: </i> {e.remark}
                        </li> */}
                        <div className="cta-buttons">
                          <button
                            className="btn"
                            onClick={() => handleDelete(index)}
                          >
                            <span>Remove</span>
                            <div className="liquid"></div>
                          </button>
                        </div>
                      </ul>
                    ))
                  )}
                </div>
                </div>
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

export default Show;
