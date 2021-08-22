import "./App.css";
// import { getExchangeRate, getHistoricalData } from "./connect.js";
// import Homepage from "./components/homepage";
// import { DataPage } from "./components/dataPage";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CoinCard from "./components/coinCard.js";
import { useState, useEffect } from "react";
import { DataTable } from "./components/dataTable";

export default function App() {
  return (
    <div id="Container">
      <h1> Coins </h1>
      <CoinCard coinCode="BTC" />
      <CoinCard coinCode="ETH" />
      <DataTable />
    </div>
  );
}
