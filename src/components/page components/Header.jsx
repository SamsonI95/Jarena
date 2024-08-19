//App
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

//Component
import Logo from "../page components/Logo";

//Icon(s)
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  const transparentPaths = ["/job-search", "/blog"];
  const isTransparent = transparentPaths.includes(location.pathname);

  const getMenuColor = () => {
    switch (location.pathname) {
      case "/":
        return "text-[#817F7F]";
      case "/job-search":
        return "text-[#FFFFFF]";
      case "/blog":
        return "text-[#FFFFFF]";
      default:
        return "text-[#817F7F]";
    }
  };

  const getTextColor = () => {
    switch (location.pathname) {
      case "/":
        return "lg:text-[#817F7F]";
      case "/job-search":
        return "lg:text-[#FFFFFF]";
      case "/blog":
        return "lg:text-[#FFFFFF]";
      default:
        return "lg:text-[#817F7F]";
    }
  };

  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/":
        return "lg:bg-[#FFFFFF]";
      case "/job-search":
        return "lg:bg-transparent";
      case "/blog":
        return "lg:bg-transparent";
      case "/learning-hub":
        return "lg:bg-[#5847D6]";
      default:
        return "lg:bg-[#FFFFFF]";
    }
  };

  return (
    <>
      <div
        className={`flex items-center justify-between px-[30px] lg:px-[100px] py-[30px]  ${
          isTransparent ? "bg-transparent" : "bg-white"
        } `}
      >
        <section>
          <Logo />
        </section>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`text-2xl ${getMenuColor()} ${getTextColor()}`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <section
          className={`md:flex items-center justify-center absolute lg:relative top-[80px] lg:top-0 left-0 w-full lg:w-fit h-fit z-10 bg-white border lg:border-0 text-center py-10 lg:py-0 ${
            isOpen ? "block" : "hidden"
          } ${getBackgroundColor()}`}
        >
          <nav className={` ${getTextColor()}`}>
            <ul
              className={`flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10`}
            >
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/job-search" onClick={() => setIsOpen(false)}>
                  Job Search
                </Link>
              </li>
              <li>
                <Link to="/learning-hub" onClick={() => setIsOpen(false)}>
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/cv" onClick={() => setIsOpen(false)}>
                  CV
                </Link>
              </li>
              <li className="md:hidden flex flex-col space-y-6">
                <Link to="/signin">
                  <button>Sign in</button>
                </Link>
                <Link to="/signup">
                  <button>Sign up</button>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="hidden md:flex items-center space-x-5">
          <Link to="/signin">
            <button className="text-[#817F7F]">Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="text-white bg-[#5847D6] rounded-lg border border-transparent py-2 px-4">
              Sign up
            </button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Header;
