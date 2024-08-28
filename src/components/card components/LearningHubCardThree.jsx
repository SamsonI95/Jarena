//App
import React, { useState } from "react";

//Icon(s)
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

//Image
import Group99 from "../../../public/assets/Group99.png";
import Group99s from "../../../public/assets/Group99s.png";

const LearningHubCardThree = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="relative flex items-center justify-center lg:p-11">
        {data.map((item, index) => {
          const isActive = index === activeIndex;
          const isPrev =
            index === (activeIndex === 0 ? data.length - 1 : activeIndex - 1);
          const isNext = index === (activeIndex + 1) % data.length;

          return (
            <div
              key={index}
              className={`bg-image transform transition-all duration-500 ease-in-out ${
                isActive
                  ? "w-[287px] h-[224px] lg:w-[1075px] lg:h-[714px]"
                  : isPrev || isNext
                  ? "z-10"
                  : "z-0"
              } ${isActive ? "" : "pointer-events-none"}`}
              style={{
                left: isPrev ? "10%" : isNext ? "70%" : "50%",
                top: isActive ? "0%" : "20%",
              }}
            >
              <div className="text-[#6B6868] flex flex-col items-center justify-center">
                {isActive && (
                  <div className="w-fit flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center relative top-[4rem] lg:top-[10rem]">
                      <img
                        src={item.mobileImage}
                        alt={item.name}
                        className="md:hidden"
                      />
                      <img
                        src={item.image}
                        alt={item.name}
                        className="hidden md:block"
                      />
                      <h2 className="lg:text-xl font-bold w-fit lg:mt-[19px] lg:mb-[10px]">
                        {item.name}
                      </h2>
                      <h3 className="text-[10px] lg:text-xl">{item.location}</h3>
                    </div>
                    <p className="relative top-[7rem] lg:top-[25rem] mt-2 text-center text-[5px] lg:text-xl w-[213px] lg:w-[823px]">
                      {item.story}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="absolute top-[11rem] lg:top-[35rem] flex items-center space-x-[50px] lg:space-x-[505px]">
          <button className="" onClick={handlePrev}>
            <GoArrowLeft className="lg:w-8 h-8 text-[#9593AB] z-20 cursor-pointer" />
          </button>
          <button className="" onClick={handleNext}>
            <GoArrowRight className="lg:w-8 h-8 text-[#9593AB] z-20 cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LearningHubCardThree;
