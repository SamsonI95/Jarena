//App
import React from "react";

//Data
import LearningHubData1 from "../data/LearningHubData1.json";

const LearningHubCardOne = () => {
  return (
    <>
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:gap-10 lg:grid grid-cols-2">
        {LearningHubData1.map((item, index) => (
          <div
            key={index}
            className="w-[273.26px] h-[217.97px] lg:w-[538.06px] lg:h-fit bg-[#F1F0FD] py-[17px] pl-[11px] lg:py-[36px] lg:pl-[24px] flex items-start"
          >
            <div>
              <img
                src={item.cardImage}
                alt={item.userName}
                className="hidden md:flex"
              />
              <img
                src={item.cardImageSmall}
                alt={item.userName}
                className="md:hidden"
              />
            </div>
            <div>
              <section className="text-[#3B3B3B] pl-2 lg:pl-[19px]">
                <h3 className="text-[9px] lg:text-[15px] font-semibold mt-[15px] lg:mt-[33px] pr-2 lg:pr-0">
                  {item.course}
                </h3>
                <section className="flex items-center space-x-2 text-[7.2px] lg:text-[15px] mt-[22px] mb-[18px] lg:mt-[48px] lg:mb-[39px]">
                  <p className="">{item.classNo}</p>
                  <div className="border rounded-full w-[5px] h-[5px] lg:w-[10px] lg:h-[10px] bg-[#6B6868]"></div>
                  <p>{item.duration}</p>
                </section>
                <section className="flex items-center space-x-2 text-[7.2px] lg:text-[15px]">
                  <img src={item.userImage} alt={item.userName} className="hidden md:block"/>
                  <img src={item.userImageSmall} alt={item.userName} className="md:hidden"/>
                  <p>{item.userName}</p>
                </section>
              </section>
              <section className="border-b border-[#5F5C79] w-[125.6px] lg:w-[268px] mt-[22px]"></section>
              <button className="text-[13px] lg:text-[15px] text-[#6B6868] border border-[#6B6868] rounded-[6px] w-[68.43px] h-[22.96px] lg:w-[146px] lg:h-[49px] mt-[22.49px] lg:mt-[35px] ml-[29px] lg:ml-[61px]">Start Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LearningHubCardOne;
