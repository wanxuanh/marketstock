import React from "react";

function StockInfo(props) {
  console.log("props", props);
  return (
    <div>
      <h1>currency: {props.stocks[1].currency} </h1>
      <h2>symbol: {props.stocks[0].symbol}</h2>
      <h3>type: {props.stocks.Genre}</h3>
      <h4>Plot: {props.stocks.Plot}</h4>
    </div>
  );
}
export default StockInfo;
