import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HideHeader = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/job-search" ||
      location.pathname === "/blog" ||
      location.pathname === "/signup" ||
      location.pathname === "/signin"
    ) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location]);

  return <div>{showHeader && children}</div>;
};

export default HideHeader;
