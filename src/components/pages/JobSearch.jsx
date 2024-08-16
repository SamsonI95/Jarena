//App
import React from "react";

//Component
import Header from "../page components/Header";
import JobSearchCardOne from "../card components/JobSearchCardOne";
import JobSearchCardTwo from "../card components/JobSearchCardTwo";

//Data
import JsData from "../data/JsData.json";
import JsData2 from "../data/JsData2.json";

//Icon(s)
import { IoIosSearch } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

const JobSearch = () => {
  return (
    <>
      <div>
        <section className="jb-img h-[300px] lg:h-[826px]">
          <Header />
          <div className="flex flex-col justify-center items-center lg:mt-[8%]">
            <h3 className="text-center text-white text-lg lg:text-3xl">
              Find Jobs, Create Trackable Resume & Enrich your Application
            </h3>
            <p className="text-white text-xs lg:text-xl lg:mt-5">
              The Easiest Way to Get Your New Job
            </p>
            <section className="flex justify-between py-2 px-2 rounded-lg border border-gray-300 w-[330px] lg:w-[686px] mt-5 lg:mt-[5%]">
              <div className="flex items-center space-x-2 text-[#C3C3C3]">
                <IoIosSearch />
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Job title, Keyword or Company"
                  className="outline-none w-[90px] lg:w-full bg-transparent"
                />
              </div>
              <div className="flex items-center space-x-2 text-[#C3C3C3]">
                <SlLocationPin />
                <input
                  type="text"
                  placeholder="Any location"
                  className="outline-none w-[90px] lg:w-full bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="text-white text-sm lg:text-lg bg-[#5847D6] rounded-lg border border-transparent py-2 px-4 lg:w-[183px]"
              >
                Search
              </button>
            </section>
          </div>
        </section>
        <section className="mt-[34px] mb-[24.83px] lg:mt-[65px] lg:mb-[52px] text-center">
          <h3 className="text-2xl lg:text-3xl ">Featured Jobs</h3>
        </section>
        <section className="px-9 lg:px-[100px] mb-[25.46px] lg:mb-[67px] ">
          <JobSearchCardOne Jsdata={JsData} />
        </section>
        <section className="px-9 lg:px-[100px] mb-[67.77px] lg:mb-[80.6px]">
          <h3 className="text-2xl lg:text-3xl mb-[31.93px] lg:mb-[113px] text-center">Job Categories</h3>
          <JobSearchCardTwo JsTdata={JsData2} />
        </section>
      </div>
    </>
  );
};

export default JobSearch;
