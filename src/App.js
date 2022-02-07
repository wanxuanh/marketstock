import React, { useState, useEffect } from "react";
import Form from "./Form";
import StockInfo from "./StockInfo";

function App() {
  const [StockData, setStockData] = useState("AAPL");
  const [StockTitle, setStockTitle] = useState("");

  useEffect(() => {
    const stockUrl = `https://api.twelvedata.com/stocks?symbol=${StockTitle}`;

    const makeApiCall = async () => {
      const res = await fetch(stockUrl);
      const data = await res.json();
      setStockData(data);
    };

    //makeApiCall();
  }, []);

  const handleSubmit = (title) => {
    console.log("App - handleSubmit - title", title);

    const url = `https://api.twelvedata.com/stocks?symbol=${title}`;

    fetch(url) //call the url (GET REQUEST)
      .then((res) => res.json()) //convert to json and pass
      .then((res) => {
        console.log("StockData", res.data);
        setStockData(res.data);

        // const title = data.Title;
        // setStockTitle(title);
      });
  };

  return (
    <div className="App">
      <div>Live Market Stock App </div>
      <Form handleSubmit={handleSubmit} />
      <StockInfo stocks={StockData} />
      <div>{JSON.stringify(StockData)}</div>
    </div>
  );
}

export default App;
