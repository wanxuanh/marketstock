import React, { useState, useEffect } from "react";
import Form from "./Form";
import StockInfo from "./routes/StockInfo";
import { Outlet, Link } from "react-router-dom";

function App() {
  const [StockData, setStockData] = useState("AAPL");
  const [StockTitle, setStockTitle] = useState("AAPL");

  useEffect(() => {
    const stockUrl = `https://api.twelvedata.com/time_series?symbol=${StockTitle}&interval=1min&apikey=c1974e7862354751b9df6e7b9b7fe83b`;
    const nameUrl = `https://api.twelvedata.com/stocks?symbol=${StockTitle}`;
    //check for .length = 0 dont run use effect

    fetch(stockUrl)
      .then((res) => res.json())
      .then((data) => setStockData(data)); //.then resolving a promise
  }, [StockTitle]);

  const handleSubmit = (title) => {
    console.log("App - handleSubmit - title", title);

    // const title = data.Title;
    setStockTitle(title);
  };

  return (
    <div className="App">
      <div className="header">
        <Link to="/">Search</Link> {""}
        <Link to="/news">News</Link> {""}
        <Link to="/top10">Top 10</Link> {""}
      </div>
      <Form handleSubmit={handleSubmit} />
      <StockInfo stocks={StockData} />
      {/* <div>{JSON.stringify(StockData)}</div> */}
      <Outlet />
    </div>
  );
}

export default App;
