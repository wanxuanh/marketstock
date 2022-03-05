import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import CompanyInfo from "./Pages/CompanyInfo";
import App from "./App";
import About from "./Pages/About";
import Price from "./Pages/Price";
import Trending from "./Pages/Trending";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/price" element={<Price />} />
        <Route path="/companyinfo" element={<CompanyInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/trending" element={<Trending />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
