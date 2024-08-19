//App
import React from "react";
import { Link } from "react-router-dom";

//Icon
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="su-img flex flex-col md:flex-row items-center justify-center w-full h-screen">
      <div className="bg-white border border-none rounded-2xl w-[336px] h-[551px] lg:w-[807px] lg:h-[853px] py-[48.5px] lg:py-[97px] relative lg:-right-[15rem]">
        <h3 className="text-[#5847D6] text-[18px] lg:text-[30px] text-center font-semibold mb-[53.53px] lg:mb-[105px]">
          Create an account
        </h3>
        <section className="flex flex-col items-center space-y-4 lg:space-y-7">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-[#424242] rounded-[10.14px] lg:rounded-[20px] w-[288.93px] h-[35px] lg:w-[570px] lg:h-[49px] pl-5 lg:text-[14px]"
          />
          <input
            type="text"
            placeholder="Enter your email"
            className="border border-[#424242] rounded-[10.14px] lg:rounded-[20px] w-[288.93px] h-[35px] lg:w-[570px] lg:h-[49px] pl-5 lg:text-[14px]"
          />
          <input
            type="text"
            placeholder="Enter your password"
            className="border border-[#424242] rounded-[10.14px] lg:rounded-[20px] w-[288.93px] h-[35px] lg:w-[570px] lg:h-[49px] pl-5 lg:text-[14px]"
          />
        </section>
        <section className="flex justify-center">
          <button className="bg-[#5847D6] rounded-[10.14px] lg:rounded-[20px] w-[288.93px] h-[35px] lg:w-[570px] lg:h-[49px] mt-[24.84px] lg:mt-[49px] text-white">
            Sign Up
          </button>
        </section>
        <section className="flex items-center justify-center my-[22px] lg:my-[40px]">
          <div className="dashed-before"></div>
          <h3 className="mx-3 lg:mx-10 text-lg">or</h3>
          <div className="dashed-after"></div>
        </section>
        <section className="flex flex-col items-center justify-center">
          <h3 className="flex items-center mb-[22px] lg:my-[40px]">
            Already have an account?{" "}
            <span className="pl-2 font-semibold">Sign in</span>
          </h3>
          <Link>
            <button className="text-[] flex items-center justify-center border border-[#424242] rounded-[10.14px] lg:rounded-[20px] w-[288.93px] h-[35px] lg:w-[570px] lg:h-[49px]">
              <FcGoogle className="mr-[10px]" />
              <h3 className="flex items-center">Sign up with google</h3>
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
