import React, { createContext, useState } from "react";


export const ExpenseContext = createContext();

const Context = (props) => {
    const [expenses, setexpenses] = useState(
        JSON.parse(localStorage.getItem("expenses")) || []
    );

    return (
        <ExpenseContext.Provider value={[expenses, setexpenses]}>
            {props.children}
        </ExpenseContext.Provider>
    );
};

export default Context;
