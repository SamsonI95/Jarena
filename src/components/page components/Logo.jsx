//App
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <h3 className="font-semibold text-3xl ">
          <span className="text-[#5847D6] text-[42px]">J</span>arena
        </h3>
      </Link>
    </>
  );
};

export default Logo;
