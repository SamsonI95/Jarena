//App
import React from "react";

//Component
import PPcomponent from "../card components/PPcomponent";

//Data
import PPData from "../data/PPData.json";

//Image
import PPImage from "../../../public/assets/PPImage.png";

const PP = () => {
  return (
    <>
      <div className="px-9 lg:px-[100px] mb-[4rem] lg:mb-[7rem]">
        <img src={PPImage} alt="PPimage" />
        <h3 className="text-2xl font-bold my-5">Privacy Policy</h3>
        <PPcomponent pdata={PPData} />
      </div>
    </>
  );
};

export default PP;
