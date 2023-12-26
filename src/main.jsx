import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Context from "./Context.jsx";
import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Context>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context>
);
