import React from "react";

function StockInfo(props) {
  console.log("props", props);
  
  const stocks = props.stocks;
console.log("stocks",stocks)
  return (
    <div>
      {stocks ?
      <h3>{stocks[0].close}</h3> : <div></div>}
     {/* <h1> Symbol: {props.stocks.meta.symbol} <br/>
      Currency: {props.stocks.meta.currency}<br/>
      Price: {props.stocks.values[0].open}</h1> */}
    </div>
  );
}
export default StockInfo;
