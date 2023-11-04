import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import CaseStudy from "./components/CaseStudy";
import Recommendations from "./components/Recommendations";
import Certifications from "./components/Certifications";
import HaloInvest from "./components/HaloInvest";



const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/about" element={<AboutMe/>} />
      <Route path="/work" element={<WorkExperience/>} />
      <Route path="/case-study" element={<CaseStudy/>} />
      <Route path="/recommendations" element={<Recommendations/>} />
      <Route path="/certifications" element={<Certifications/>} />
      <Route path="/case-study/halo-invest" element={<HaloInvest/>} />
    </Routes>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  </React.StrictMode>
);
