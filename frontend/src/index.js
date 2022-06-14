import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import io from 'socket.io-client'
import { Navigation } from "./components";

const socket = io.connect(process.env.IP + ":3001")

console.log("IP FRONTEND : " + process.env.IP)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <App socket={socket} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);