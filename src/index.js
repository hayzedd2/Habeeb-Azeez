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
import Express from "./components/Express";
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReOwn from "./components/ReOwn";
import FSDH from "./components/FSDH";
import HaloWebsite from "./components/HaloWebsite";


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
      <Route path="/case-study/express" element={<Express/>} />
      <Route path="/case-study/re-own" element={<ReOwn/>} />
      <Route path="/case-study/FSDH" element={<FSDH/>} />
      <Route path="/case-study/halo-website" element={<HaloWebsite/>} />
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
