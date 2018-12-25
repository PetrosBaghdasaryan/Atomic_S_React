import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App"
import  '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';






render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
