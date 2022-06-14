import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import io from 'socket.io-client'
import { Navigation } from "./components";
import {NetworkInfo} from 'react-native-network-info';

var ip;

NetworkInfo.getIPV4Address().then(ipv4Address => {
  ip = ipv4Address;
  console.log("IP FRONTEND :" + ipv4Address);
});


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