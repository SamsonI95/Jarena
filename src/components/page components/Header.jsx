//App
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Component
import Logo from "../page components/Logo";

//Icon(s)
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex items-center justify-between px-[30px] lg:px-[100px] py-[30px]">
        <section>
          <Logo />
        </section>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <section
          className={`md:flex items-center justify-center absolute lg:relative top-[80px] lg:top-0 left-0 w-full lg:w-fit h-fit bg-white border lg:border-0 text-center py-10 lg:py-0 ${
            isOpen ? "block" : "hidden"
          } `}
        >
          <nav className="text-[#817F7F]">
            <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
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
                <button>Sign in</button>
                <button>Sign up</button>
              </li>
            </ul>
          </nav>
        </section>
        <section className="hidden md:flex space-x-5">
          <button className="text-[#817F7F]">Sign in</button>
          <button className="text-white bg-[#5847D6] rounded-lg border border-transparent py-2 px-4">
            Sign up
          </button>
        </section>
      </div>
    </>
  );
};

export default Header;
