import React, { useContext, useState } from "react";
import { ExpenseContext } from "./Context";
import { Link } from "react-router-dom";
import "./assets/Filter.css";

const Filter = () => {
  const [expenses] = useContext(ExpenseContext);

  const [key, setkey] = useState("payment");
  const [value, setvalue] = useState("");
  const [filterexpenses, setfilterexpenses] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const filterExpenses = expenses.filter((item) => item[key] === value);
    setfilterexpenses(filterExpenses);
  };

  return (
    <>
      <div className="cristalBall">
        <div className="cristal">
          <div className="ball">
            <div className="name">
              <div className="flex-container">
                {/* Flex container for login-box and user-box */}
                <div className="login-box">
                  <h2>Filter Expense</h2>
                  <form onSubmit={SubmitHandler}>
                    <div className="user-box">
                      <select
                        onChange={(e) => setkey(e.target.value)}
                        value={key}
                      >
                        <option value="amount">Amount</option>
                        <option value="remark">Remark</option>
                        <option value="payment">Payment</option>
                        <option value="category">Category</option>
                      </select>
                      <input
                        onChange={(e) => setvalue(e.target.value)}
                        value={value}
                        type="text"
                        placeholder="Enter Value"
                      />
                    </div>
                    <div className="flx">
                      <button className="a" type="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Filter Expense
                      </button>
                      <Link className="a" to="/show">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        View Expenses
                      </Link>
                    </div>
                  </form>
                  <hr />
                  <div className="login-box2">
                    <div className="user-box">
                      <h2>Expense</h2>
                      {/* Add this container around your filtered items */}
                      <div className="filter-container">
                        {filterexpenses.length === 0
                          ? "no filter selected"
                          : filterexpenses.map((e, index) => (
                              <ol key={index}>
                                <li>Use For = {e.category}</li>
                                <li>Payment Mode = ({e.payment})</li>
                                <li>Amount = {e.amount}</li>
                                <li>Remark= {e.remark}</li>
                              </ol>
                            ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Flex container for login-box and user-box */}
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

export default Filter;
