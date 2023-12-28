// Create.js

import React, { useContext, useState } from "react";
import { ExpenseContext } from "./Context";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import "./assets/Create.css"; // Import the CSS file

const Create = () => {
  const navigate = useNavigate();

  const [expenses, setexpenses] = useContext(ExpenseContext);

  const [amount, setamount] = useState(0);
  const [remark, setremark] = useState("");
  const [category, setcategory] = useState("");
  const [payment, setpayment] = useState("Choose Payment Type");

  const SubmitHandler = (e) => {
    e.preventDefault();

    const newexpense = { amount, remark, category, payment };

    const copyexpenses = [...expenses];
    copyexpenses.push(newexpense);
    setexpenses(copyexpenses);
    localStorage.setItem("expenses", JSON.stringify(copyexpenses));
    navigate("/show");
  };

  return (
    <>
      <div className="cristalBall">
        <div className="cristal">
          <div className="ball">
            <div className="name">
              <div className="login-box">
                <div className="user-box2">
                  <Link to="/" className="nav-linkl">
                    Go Home
                  </Link>
                  <Link to="/filter" className="nav-linkl">
                    Filter Expenses
                  </Link>
                  <Link to="/show" className="nav-linkl">
                    Show Expenses
                  </Link>
                </div>
                <h2>Create Expense</h2>
                <form onSubmit={SubmitHandler}>
                  <div className="user-box">
                    <input
                      onChange={(e) => setamount(e.target.value)}
                      value={amount}
                      type="number"
                      // placeholder="Amount"
                      required
                    />
                    <label>Enter Amount</label>
                  </div>
                  {/* <div className="user-box">
                    <input
                      onChange={(e) => setremark(e.target.value)}
                      value={remark}
                      type="text"
                      // placeholder="Remark"
                      required
                    />
                    <label>Enter Remark</label>
                  </div> */}
                  <div className="user-box">
                    <input
                      onChange={(e) => setcategory(e.target.value)}
                      value={category}
                      type="text"
                      // placeholder="Category"
                      required
                    />
                    <label>Enter Category</label>
                  </div>
                  <div className="user-box">
                    <select
                      onChange={(e) => setpayment(e.target.value)}
                      value={payment}
                      name="payment"
                    >
                      <option value="cash">Cash</option>
                      <option value="online">Online</option>
                      <option value="card">Card</option>
                    </select>
                  </div>
                  <div className="flx">
                    <button className="a" type="submit">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Add Expense
                    </button>
                    {/* <Link className="a" to="/show">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      View Expenses
                    </Link> */}
                  </div>
                </form>
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

export default Create;
