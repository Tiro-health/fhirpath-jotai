import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

import { BMICalculator } from "./pages/BMICalculator";
import { LBMCalculator } from "./pages/LBMCalculator";
import { PSADTCalculator } from "./pages/PSADTCalculator";
import BMIQuestionnairePage from "./pages/BMIQuestionnaire";
import TNMQuestionnairePage from "./pages/TNMQuestionnaire";
import { Home } from "./pages/Home";
import Layout from "./components/Layout";
import { SESCDQuestionnaire } from "./pages/SESCDQuestionnaire";
import LNIQuestionnairePage from "./pages/LNIQuestionnaire";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/fhirpath-jotai">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bmi" element={<BMICalculator />} />
          <Route path="lbm" element={<LBMCalculator />} />
          <Route path="psadt" element={<PSADTCalculator />} />
          <Route path="bmi-questionnaire" element={<BMIQuestionnairePage />} />
          <Route path="tnm-questionnaire" element={<TNMQuestionnairePage />} />
          <Route path="sescd-questionnaire" element={<SESCDQuestionnaire />} />
          <Route path="lni-questionnaire" element={<LNIQuestionnairePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
