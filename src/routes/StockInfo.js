import React from "react";

function StockInfo(props) {
  console.log("props", props);
  return (
    <div>
     {/* <h1> Symbol: {props.stocks.meta.symbol} <br/>
      Currency: {props.stocks.meta.currency}<br/>
      Price: {props.stocks.values[0].open}</h1> */}
    </div>
  );
}
export default StockInfo;
