//App
import React from "react";

//Component
import LearningHubCardOne from "../card components/LearningHubCardOne";
import LearningHubCardTwo from "../card components/LearningHubCardTwo";
import LearningHubCardThree from "../card components/LearningHubCardThree";
import LearningHubCardFour from "../card components/LearningHubCardFour";

//Data
import LearningHubData3 from "../data/LearningHubData3";

const LearningHub = () => {
  return (
    <>
      <div>
        <section className="flex flex-col lg:flex-row lg:justify-between bg-gradient-to-b from-[#FFFFFF] via-[#E6E3FB] to-[#FFFFFF]">
          <div className="flex flex-col items-center lg:items-start lg:pl-[100px]">
            <div>
              <h3 className="text-[#424242] font-semibold text-lg lg:text-3xl w-[163px] lg:w-[269px] mx-auto lg:mx-0">
                Build your Skills Anytime anywhere
              </h3>
              <p className="text-center lg:text-left text-[#6B6868] text-[12px] lg:text-[16px] w-[270px] lg:w-[368px] mt-[8.42px] mb-[19.6px] lg:mt-[16px] lg:mb-[56px]">
                Empower your career journey with on-the-go learning. Explore our
                flexible courses and enhance your skills at your own pace,
                anytime, anywhere
              </p>
            </div>
            <section className="flex justify-between py-2 px-2 rounded-lg border border-gray-300 w-[290px] lg:w-[524px] mt-5 lg:mt-[5%] mb-[] lg:mb-[]">
              <div className="flex items-center space-x-2 text-[#C3C3C3]">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search course"
                  className="outline-none text-[15px] lg:text-xl w-[150px] lg:w-[250px] bg-transparent"
                />
              </div>
              <button
                type="submit"
                className="text-white text-sm lg:text-lg bg-[#5847D6] rounded-lg border border-transparent py-2 px-4 lg:w-[183px]"
              >
                Search
              </button>
            </section>
            <section className="text-[10px] lg:text-[16px] flex items-center justify-evenly lg:justify-between w-[200px] lg:w-[341px] mt-[9.04px] mb-[15.75px] lg:mt-6 lg:mb-0">
              <div className="text-center">
                <h3>40K</h3>
                <p>Appreciations</p>
              </div>
              <div className="text-center">
                <h3>100K</h3>
                <p>Courses</p>
              </div>
              <div className="text-center">
                <h3>10</h3>
                <p>Countries</p>
              </div>
            </section>
          </div>
          <div>
            <img
              src="assets/LhMainImage.png"
              alt="lb-image"
              className="hidden md:flex"
            />
            <img
              src="assets/LhMainImages.png"
              alt="lb-image"
              className="md:hidden mx-auto"
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center  mt-[37.4px] lg:mt-[65px]">
          <div className="text-center">
            <h3 className="font-semibold lg:text-2xl mb-[8px] lg:mb-[10px]">
              Featured Courses
            </h3>
            <p className="text-[10px] lg:text-[16px] w-[202px] lg:w-[422px] mb-[30px] lg:mb-[72px]">
              Discover career-enhancing Featured Courses. Elevate your skills
              and stand out in the job market with just a click.
            </p>
          </div>
          <LearningHubCardOne />
          <div className="mt-[33px] lg:mt-[56px]">
            <button className="text-[16px] lg:text-[18px] text-[#6B6868] border-2 border-[#6B6868] w-[80px] h-[40px] lg:w-[146px] lg:h-[49px] mt-[22.49px] lg:mt-[35px] ml-[29px] lg:ml-[61px]">
              View all
            </button>
          </div>
        </section>
        <section className="px-9 lg:px-[100px] mt-[40.92px] lg:mt-[155.6px]">
          <div className="text-[#424242]">
            <h3 className="font-semibold text-[16px] lg:text-2xl w-[120px] lg:w-[200px] mb-[6px] lg:mb-4">Start your Learning today</h3>
            <p className="text-[10px] lg:text-[16px] w-[180px] lg:w-[376px]">
              Start your learning today. Explore all the categories and choose
              what’s best for you.
            </p>
          </div>
          <LearningHubCardTwo />
        </section>
        <section className="mt-[50px] lg:mt-[126px] px-9 lg:px-[100px]">
          <LearningHubCardThree data={LearningHubData3}/>
        </section>
        <section className="px-9 lg:px-[100px] mt-[62px] mb-[59px] lg:mt-[164px] lg:mb-[98px]">
          <LearningHubCardFour />
        </section>
      </div>
    </>
  );
};

export default LearningHub;
