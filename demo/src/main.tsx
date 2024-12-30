import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

import { BMICalculator } from "./pages/BMICalculator";
import { LBMCalculator } from "./pages/LBMCalculator";
import Layout from "./components/Layout";
import { Home } from "./components/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/fhirpath-jotai">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bmi" element={<BMICalculator />} />
          <Route path="lbm" element={<LBMCalculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
