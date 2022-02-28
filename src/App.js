import React, { useState } from "react";
import Form from "./Form";
import StockInfo from "./Pages/StockInfo";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  const [stockTitle, setStockTitle] = useState("AAPL");

  const handleSubmit = (title) => {
    console.log("App - handleSubmit - title", title);

    // const title = data.Title;
    setStockTitle(title);
  };

  return (
    <div className="App">
      <Navbar />
      <Form handleSubmit={handleSubmit} />
      <StockInfo stockTitle={stockTitle}/>
      <Outlet />
    </div>
  );
}

export default App;
