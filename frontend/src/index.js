import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import io from 'socket.io-client'
import { Navigation } from "./components";
const os = require('os');

const networkInterfaces = os.networkInterfaces();
const ip = networkInterfaces['eth0'][0]['address']


const socket = io.connect(ip + ":3001")

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <App socket={socket} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);