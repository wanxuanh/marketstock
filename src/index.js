import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import CompanyInfo from './Pages/CompanyInfo';
import App from './App';
import Home from "./Pages/Home";
import Trade from "./Pages/Trade";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/trade" element={<Trade />} />
        <Route path="/companyinfo" element={<CompanyInfo />} />
        <Route path="/home" element={<Home />} />
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
