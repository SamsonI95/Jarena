//App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"

//Page(s)
import HomePage from "./components/pages/HomePage";
import ToS from "./components/pages/ToS";
import PP from "./components/pages/PP";

//Page Component(s)
import Header from "./components/page components/Header";
import Footer from "./components/page components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms-of-service" element={<ToS />} />
          <Route path="/privacy-policy" element={<PP />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
