// Show.js

import React, { useContext } from "react";
import { ExpenseContext } from "./Context";
import { Link } from "react-router-dom";
import "./assets/Show.css"; // Import the CSS file

const Show = () => {
  const [expenses, setExpenses] = useContext(ExpenseContext);

  const handleDelete = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <div className="scroler">
      <div className="link-container">
        <Link to="/filter">Filter Expenses</Link>
        <br />
        <Link to="/create">Create Expenses</Link>
        <br />
        <Link to="/">Go Home</Link>
      </div>

      <h2>Total Spent: ${expenses.reduce((ac, cv) => ac + +cv.amount, 0)} </h2>
      <div className="expense-container">
        {expenses.length === 0 ? (
          <p>No Data Present</p>
        ) : (
          expenses.map((e, index) => (
            <div key={index} className="expense-box">
              <p>
                <strong>Use For:</strong> {e.category}
              </p>
              <p>
                <strong>Payment Mode:</strong> {e.payment}
              </p>
              <p>
                <strong>Amount:</strong> ${e.amount}
              </p>
              <p>
                <strong>Remark:</strong> {e.remark}
              </p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Show;
