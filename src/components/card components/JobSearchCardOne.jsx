//App
import React from "react";

//Icon(s)
import { SlLocationPin } from "react-icons/sl";

const JobSearchCardOne = ({ Jsdata }) => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {Jsdata.map((item, index) => (
          <div
            key={index}
            className="bg-[#F1F0FD] w-[143px] h-[156px] lg:w-[372px] lg:h-[405px] active:bg-[#6B62AA] active:text-[#E9E9E9] lg:hover:bg-[#6B62AA] lg:hover:text-[#E9E9E9] cursor-pointer group"
          >
            <div className="px-[7px] pt-[19px] lg:py-[50px] lg:px-[25px]">
              <section className="relative left-[35px] lg:left-[100px]">
                <h3 className="text-[9px] lg:text-2xl">{item.organization}</h3>
                <p className="text-[5.8px] lg:text-lg">{item.duration}</p>
              </section>
              <div class="border-b border-[#5F5C79] mt-[14.43px] mb-[11.99px] lg:mt-[38px] lg:mb-[31px] group-active:border-[#A4A1A1] lg:group-hover:border-[#A4A1A1]"></div>
              <section className="">
                <h3 className="text-[7.74px] lg:text-lg pl-[11px] lg:pl-[40px]">
                  {item.position}
                </h3>
                <div className="flex items-center mt-[10.11px]  lg:mt-[25px] text-[5.8px] lg:text-[16px]">
                  <SlLocationPin />
                  <p className="ml-[5.41px] lg:ml-[25px]">{item.location}</p>
                </div>
              </section>
              <section className="flex items-center justify-between mt-[29.52px] lg:mt-[65px]">
                <p className="text-[5.8px] lg:text-lg">{item.posted}</p>
                <button className="border border-[#716F89] w-[27.46px] h-[16.24px] lg:w-[71px] lg:h-[42px] text-[6.9px] lg:text-lg group-active:bg-[#FFFFFF] group-active:text-[#6B6868] group-active:border-none lg:group-hover:bg-[#FFFFFF] lg:group-hover:text-[#6B6868]">
                  Apply
                </button>
              </section>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobSearchCardOne;
