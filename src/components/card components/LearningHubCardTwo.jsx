//App
import React, { useState } from "react";

//Data
import LearningHubData2 from "../data/LearningHubData2.json";

//Icon(s)
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const LearningHubCardTwo = () => {
  const [slide, setSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const nextSlide = () => {
    setIsSliding(true);
    setTimeout(() => {
      setSlide((slide + 3) % LearningHubData2.length);
      setIsSliding(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsSliding(true);
    setTimeout(() => {
      setSlide((slide - 3 + LearningHubData2.length) % LearningHubData2.length);
      setIsSliding(false);
    }, 300);
  };

  const displayedSlides = [
    ...LearningHubData2.slice(slide, slide + 3),
    ...LearningHubData2.slice(
      0,
      Math.max(0, slide + 3 - LearningHubData2.length)
    ),
  ];
  return (
    <>
      <div className="md:hidden space-y-3">
        {LearningHubData2.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="text-[#424242] bg-[#F1F0FD] w-[199px] h-[270px] pt-[18.31px] px-[12px]"
          >
            <h3 className="text-[14px] font-semibold text-center">
              {item.title}
            </h3>
            <p className="text-[10px] mt-[13.38px] mb-[19.54px]">
              {item.details}
            </p>
            <img src={item.mobileImage} alt="courses" />
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div className="text-[#9593AB]">
          <button className="text-2xl" onClick={prevSlide}>
            <GoArrowLeft />
          </button>
          <button className="text-2xl" onClick={nextSlide}>
            <GoArrowRight />
          </button>
        </div>
        <div className="overflow-hidden">
          <div
            className={`flex items-center justify-center space-x-[39px] transform transition-transform duration-300 ${
              isSliding ? "translate-x-[-100%]" : "translate-x-0"
            }`}
          >
            {displayedSlides.map((item, index) => (
              <div
                key={index}
                className="text-[#424242] bg-[#F1F0FD] w-[387px] h-[483px] pt-[35px] px-[22px]"
              >
                <h3 className="text-[20px] font-semibold text-center">
                  {item.title}
                </h3>
                <p className=" mt-[26px] mb-[38px]">{item.details}</p>
                <img src={item.desktopImage} alt="courses" />
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex items-center justify-center space-x-[39px]">
          {displayedSlides.map((item, index) => (
            <div
              key={index}
              className="text-[#424242] bg-[#F1F0FD] w-[387px] h-[483px] pt-[35px] px-[22px]"
            >
              <h3 className="text-[20px] font-semibold text-center">
                {item.title}
              </h3>
              <p className=" mt-[26px] mb-[38px]">{item.details}</p>
              <img src={item.desktopImage} alt="courses" />
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default LearningHubCardTwo;
