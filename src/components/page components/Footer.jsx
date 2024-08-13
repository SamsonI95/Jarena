//App
import React from "react";

//Comoponent
import Logo from "./Logo";
import { Link } from "react-router-dom";

//Image(s)
import Xicon from "../../assets/Xicon.png";
import LinkedInIcon from "../../assets/LinkedInIcon.png";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col space-y-[5rem] bg-[#F1F0FD] lg:w-full py-6 px-8 lg:py-[80px] lg:px-[100px]">
        <div className="flex flex-col lg:flex-row items-start lg:justify-between">
          <div className="space-y-5">
            <section>
              <Logo />
            </section>
            <section>
              <h3 className="font-semibold text-lg">
                Keep yourself up to date
              </h3>
            </section>
            <section className="flex justify-between py-2 px-2 rounded-lg border border-gray-300 w-[357px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none px-2 py-2"
              />
              <button
                type="submit"
                className="w-[120px] text-white bg-[#5847D6] py-2 px-4 rounded-lg"
              >
                Subscribe
              </button>
            </section>
          </div>
          <section className="flex space-x-8 mt-5 lg:mt-0">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className=" space-y-3 lg:space-y-5">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/job-search">Job Search</Link>
                </li>
                <li>
                  <Link to="/learning-hub">Learning Hub</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/cv">CV</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Tools</h3>
              <ul className=" space-y-3 lg:space-y-5">
                <li>
                  <Link>Job Search</Link>
                </li>
                <li>
                  <Link>Recommended Jobs</Link>
                </li>
                <li>
                  <Link>Career Blog</Link>
                </li>
                {/* <li>
                  <Link></Link>
                </li>
                <li>
                  <Link></Link>
                </li> */}
              </ul>
            </div>
          </section>
        </div>
        <section className="border border-t-[#BCBCBC] border-transparent flex flex-col lg:flex-row lg:justify-between">
          <p className="mt-6">© Copyright 2024, All Rights Reserved</p>
          <div className="flex items-center mt-6 space-x-[32px] ">
            <Link to="#">
              <img src={Xicon} alt="twitter/x-logo" />
            </Link>
            <Link to="#">
              <img src={LinkedInIcon} alt="linkedin-logo" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
