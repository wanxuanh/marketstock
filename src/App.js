import React, { useState } from "react";
import Form from "./components/Form";
import Trade from "./Pages/Trade";
import CompanyInfo from "./Pages/CompanyInfo"
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./Pages/Home"

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
      {/* <Form handleSubmit={handleSubmit} /> */}
       {/* <Trade stockTitle={stockTitle} /> */}
      <Outlet />
    </div>
  );
}

export default App;
