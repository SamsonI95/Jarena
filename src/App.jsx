//App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Page(s)
import HomePage from "./components/pages/HomePage";
import JobSearch from "./components/pages/JobSearch";
import LearningHub from "./components/pages/LearningHub";
import Blog from "./components/pages/Blog";
import ToS from "./components/pages/ToS";
import PP from "./components/pages/PP";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";

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
          <Route path="/home" element={<HomePage />} />
          <Route path="/job-search" element={<JobSearch />} />
          <Route path="/learning-hub" element={<LearningHub />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms-of-service" element={<ToS />} />
          <Route path="/privacy-policy" element={<PP />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
