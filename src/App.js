import React, { useState, useEffect } from "react";
import Form from "./Form";
import StockInfo from "./routes/StockInfo";
import {Outlet, Link} from "react-router-dom"

function App() {
  const [StockData, setStockData] = useState("AAPL");
  const [StockTitle, setStockTitle] = useState("");

  useEffect(() => {
    //const stockUrl = `https://api.twelvedata.com/stocks?symbol=`;

    const stockUrl = `https://api.twelvedata.com/time_series?symbol=${StockTitle}&interval=1min&apikey=c1974e7862354751b9df6e7b9b7fe83b`
    const makeApiCall = async () => {
      const res = await fetch(stockUrl);
      const data = await res.json();
      setStockData(data);
    };

    //makeApiCall();
  }, [StockTitle]);

  const handleSubmit = (title) => {
    console.log("App - handleSubmit - title", title);

    //const url = `https://api.twelvedata.com/stocks?symbol=${title}`;

   const url =`https://api.twelvedata.com/time_series?symbol=${title}&interval=1min&apikey=c1974e7862354751b9df6e7b9b7fe83b`

    fetch(url) //call the url (GET REQUEST)
      .then((res) => res.json()) //convert to json and pass
      .then((res) => {
        console.log("StockData", res.values);
        setStockData(res);

        // const title = data.Title;
        // setStockTitle(title);
      });
  };

  return (
    <div className="App">
      <div className="header">
            <Link to="/">Market Stock</Link> {""}
            <Link to="/top10">Top 10</Link> {""}
       </div>
      <Form handleSubmit={handleSubmit} />
      <StockInfo stocks={StockData} />
      <div>{JSON.stringify(StockData)}</div>
      <Outlet />
    </div>
  );
}

export default App;
