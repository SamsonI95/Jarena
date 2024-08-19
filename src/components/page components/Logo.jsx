//App
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Logo = () => {
  const location = useLocation();

  const getLogoColor = () => {
    switch (location.pathname) {
      case "/":
        return "text-[#000000]";
      case "/job-search":
        return "text-[#FFFFFF]";
      case "/blog":
        return "text-[#FFFFFF]";
      default:
        return "text-[#000000]";
    }
  };

  return (
    <>
      <Link to="/">
        <h3 className={`font-semibold text-3xl ${getLogoColor()}`}>
          <span className="text-[#5847D6] text-[42px]">J</span>arena
        </h3>
      </Link>
    </>
  );
};

export default Logo;
