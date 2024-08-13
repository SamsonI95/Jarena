//App
import React from "react";

//Component
import ToScomponent from "../card components/ToScomponent";

//Data
import ToSData from "../data/ToSData.json";

//Image
import ToSp from "../../../public/assets/ToSp.png";

const ToS = () => {
  return (
    <>
      <div className="px-9 lg:px-[100px] mb-[4rem] lg:mb-[7rem]">
        <img src={ToSp} alt="ToSimage" />
        <h3 className="text-2xl font-bold my-5">Terms of Service</h3>
        <ToScomponent data={ToSData}/>
      </div>
    </>
  );
};

export default ToS;
