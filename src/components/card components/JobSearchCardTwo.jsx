import React from "react";

const JobSearchCardTwo = ({ JsTdata }) => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-7">
        {JsTdata.map((item, index) => (
          <div
            key={index}
            className="w-[155.94px] h-[136.26px] lg:w-[275px] lg:h-[252.4px] bg-[#F1F0FD] py-[14.04px] lg:py-[26.4px] active:bg-[#6B62AA] active:text-[#FFFFFF] lg:hover:bg-[#6B62AA] lg:hover:text-[#FFFFFF] cursor-pointer group"
          >
            <div className="w-fit mx-auto ">
              <img
                src={item.image}
                alt={item.position}
                className="w-[45px] h-[45px] lg:w-auto lg:h-auto rounded-full mx-auto"
              />
              <h3 className="text-[10.8px] lg:text-xl font-semibold text-[#3B3B3B] group-active:text-[#FFFFFF] lg:group-hover:text-[#FFFFFF] text-center pt-[11.34px] pb-[23.87px] lg:pt-[21px] lg:pb-[45px]">
                {item.position}
              </h3>
              <p className="text-[8.42px] lg:text-lg text-[#6B6868] group-active:text-[#FFFFFF] lg:group-hover:text-[#FFFFFF] text-center">
                {item.vacancy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobSearchCardTwo;
