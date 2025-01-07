import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

import { BMICalculator } from "./pages/BMICalculator";
import { LBMCalculator } from "./pages/LBMCalculator";
import { BMIQuestionnaire } from "./pages/BMIQuestionnaire";
import { TNMQuestionnaire } from "./pages/TNMQuestionnaire";
import { Home } from "./pages/Home";
import Layout from "./components/Layout";
import { SESCDQuestionnaire } from "./pages/SESCDQuestionnaire";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/fhirpath-jotai">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bmi" element={<BMICalculator />} />
          <Route path="lbm" element={<LBMCalculator />} />
          <Route path="bmi-questionnaire" element={<BMIQuestionnaire />} />
          <Route path="tnm-questionnaire" element={<TNMQuestionnaire />} />
          <Route path="sescd-questionnaire" element={<SESCDQuestionnaire />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
