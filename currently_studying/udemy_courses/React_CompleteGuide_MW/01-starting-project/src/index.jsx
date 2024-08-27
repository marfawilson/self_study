import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
/* 
How to write the code on line 8 without using JSX:
ReactDOM.createRoot(entryPoint).render(React.createElement(App)); 
*/
