//App
import React from "react";

//Data
import LandingCardData from "../data/LandingCardData1.json";

const LandingPageCardOne = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:px-[100px]">
        {LandingCardData.map((item, index) => (
          <div key={index}>
            <div className="w-[170px] h-[180px] lg:w-[350px] lg:h-[350px] lg:hover:scale-105 transition duration-200">
              <img src={item.image} alt={item.title} className="rounded-t-lg"/>
              <div className="bg-[#AEAEAE] rounded-b-lg flex justify-between p-2 pb-5 lg:p-4 lg:pb-10">
                <div>
                  <h3 className="text-[12px] lg:text-lg font-semibold">{item.title}</h3>
                  <p className="text-[12px] lg:text-lg">{item.location}</p>
                </div>
                <button className="text-white text-[12px] lg:text-lg w-8 h-8 lg:w-16 lg:h-16 bg-[#5847D6] rounded-full">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPageCardOne;
