//App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Page(s)
import HomePage from "./components/pages/HomePage";
import JobSearch from "./components/pages/JobSearch";
import ToS from "./components/pages/ToS";
import PP from "./components/pages/PP";

//Page Component(s)
import Header from "./components/page components/Header";
import Footer from "./components/page components/Footer";
import HideHeader from "./components/page components/HideHeader";

function App() {
  return (
    <>
      <Router>
        <HideHeader>
          <Header />
        </HideHeader>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job-search" element={<JobSearch />} />
          <Route path="/terms-of-service" element={<ToS />} />
          <Route path="/privacy-policy" element={<PP />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
