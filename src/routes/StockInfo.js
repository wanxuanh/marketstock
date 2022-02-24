import React from "react";

function StockInfo(props) {
  
  console.log("props", props);
  return (
    <div className="cards">
      {props.stocks && props.stocks.values ? (
        <div>
          <h2>
            Symbol: {props.stocks.meta.symbol} <br />
          </h2>
          <h3> 
            Stock: ${props.stocks.values[0].close} <br />
            Currency: {props.stocks.meta.currency} <br />
            DateTime: {props.stocks.values[0].datetime} <br />
          </h3>
        </div>
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

//after one card appear, next search will move to the side
// spread operator add items to state
//show name

//home
//search
//top 10
//news
//firebase database short list