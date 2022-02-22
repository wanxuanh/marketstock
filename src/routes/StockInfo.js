import React from "react";
import './StockInfo.css'

function StockInfo(props) {
  console.log("props", props);
  return (
    <div>
      {props.stocks && props.stocks.values ? (
        <h3>
          Symbol: {props.stocks.meta.symbol} <br />
          Stock: ${props.stocks.values[0].close} <br />
          Currency: {props.stocks.meta.currency} <br />
          DateTime: {props.stocks.values[0].datetime} <br />
        </h3>
      ) : (
        <div></div>
      )}
      {/* {props.stocks.meta.currency} */}

      {/* <h1> Symbol: {props.stocks.meta.symbol} <br/>
      Currency: {props.stocks.meta.currency}<br/>
      Price: {props.stocks.values[0].open}</h1> */}
    </div>
  );
}
export default StockInfo;
