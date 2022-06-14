import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import io from 'socket.io-client'
import { Navigation } from "./components";


const socket = io.connect("172.18.91.58:3001")

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <App socket={socket} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);