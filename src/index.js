import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Top10 from "./routes/Top10"

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="Top10" element={<Top10 />} />
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
  document.getElementById('root')
);
