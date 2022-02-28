import React, { useState, useEffect } from "react";

function Trade(props) {
  const [stockData, setStockData] = useState("AAPL");
  const { stockTitle } = props;

  useEffect(() => {
    const stockUrl = `https://api.twelvedata.com/time_series?symbol=${stockTitle}&interval=1min&apikey=c1974e7862354751b9df6e7b9b7fe83b`;
    //check for .length = 0 dont run use effect

    fetch(stockUrl)
      .then((res) => res.json())
      .then((data) => setStockData(data)); //.then resolving a promise
  }, [stockTitle]);
  
  return (
    <div className="cards">
      {stockData && stockData.values ? (
        <div>
          <h2>
            Symbol: {stockData.meta.symbol} <br />
          </h2>
          <h3>
            Stock: ${stockData.values[0].close} <br />
            Currency: {stockData.meta.currency} <br />
            DateTime: {stockData.values[0].datetime} <br />{" "}
          </h3>
          <h4>
            {" "}
            Volume: {stockData.values[0].volume} <br />
            Exchange: {stockData.meta.exchange}
          </h4>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default Trade;

//after one card appear, next search will move to the side
// spread operator add items to state
//show name
