import "./stylesheets/coincard.css";
import { getHistoricalData, getExchangeRate } from "../connect.js";
import React from "react";
import { useState, useEffect, useRef } from "react";

export default function CoinCard(props) {
  const [prices, setPrice] = useState(null);
  const [coinName, setCoinName] = useState(null);
  const key = "8C2R26DMRMVREBOX";

  useEffect(() => {
    getData();

    // this will fetch the data
    async function getData() {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${props.coinCode}&to_currency=USD&apikey=${key}`
      );
      const data = await response.json();
      console.log(data["Realtime Currency Exchange Rate"]);

      // store the data in the price state
      setPrice(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
      setCoinName(
        data["Realtime Currency Exchange Rate"]["2. From_Currency Name"]
      );
    }
  }, []);
  return (
    <div id="cardContainer">
      <h1> {coinName}</h1>
      <p>Price: ${prices}</p>
    </div>
  );
}