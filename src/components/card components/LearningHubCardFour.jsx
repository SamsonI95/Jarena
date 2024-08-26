import React from "react";
import { Link } from "react-router-dom";

const LearningHubCardFour = () => {
  return (
    <>
      <div>
        <section className="md:hidden flex justify-between">
          <div className="w-[170px] h-[230px] bg-[#F1F0FD] text-sm px-[10px] pt-3 pb-5">
            <img src="assets/Lhubuser1Image.png" alt="user-image" className="mx-auto"/>
            <div className="border-[#9593AB] border-b mt-5 mb-4"></div>
            <h3 className="font-semibold text-center mb-1">Kunle Ade</h3>
            <p className="text-center">Digital Marketer</p>
            <div className="border-[#9593AB] border-b mt-[10px] mb-3"></div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                <Link>
                  <img src="assets/Email.png" alt="email" width={10} height={10}/>
                </Link>
                <Link>
                  <img src="assets/LinkedInIcon.png" alt="linkedIn" width={10} height={10}/>
                </Link>
                <Link>
                  <img src="assets/Xicon.png" alt="twitterX" width={10} height={10}/>
                </Link>
              </div>
              <button className="text-[12px]">View Profile</button>
            </div>
          </div>
          <div>
            <h3 className="text-[8px]">Meet with our Mentors</h3>
            <p className="text-[5px] w-[121.14px]">
              Discover career guidance from industry experts. Elevate your path
              to success with our mentors. Connect now
            </p>
            <button className="text-[10px] text-[#6B6868] border border-[#6B6868] w-[68.43px] h-[22.96px] mt-[22.49px] ml-[29px]">
              See all profile
            </button>
          </div>
        </section>

        <section className="hidden md:flex justify-between">
          <div className="flex space-x-[19px]">
            <div className="space-y-[23px]">
              <img src="assets/Lhub4Image1.png" alt="icon-image" />
              <img src="assets/Lhub4Image2.png" alt="icon-image" />
            </div>

            <div className="bg-[#F1F0FD] px-6 pt-[35px] pb-[51px] w-[387px] h-[545px]">
              <img src="assets/Lhubuser1ImageL.png" alt="user-image" className="mb-[56px] mx-auto"/>
              <div className="border-[#9593AB] border-b mbb-6"></div>
              <h3 className="mt-6 mb-[10px] font-semibold text-center">Kunle Ade</h3>
              <p className="mb-8 text-center">Digital Marketer</p>
              <div className="border-[#9593AB] border-b mb-8"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Link>
                  <img src="assets/Email.png" alt="email" width={30} height={30}/>
                  </Link>
                  <Link>
                    <img src="assets/LinkedInIcon.png" alt="linkedIn" width={30} height={30}/>
                  </Link>
                  <Link>
                    <img src="assets/Xicon.png" alt="twitterX" width={30} height={30}/>
                  </Link>
                </div>
                <button>View Profile</button>
              </div>
            </div>
          </div>
          <div className="text-[#3B3B3B] mt-[74px]">
            <h3 className="text-2xl">Meet with our Mentors</h3>
            <p className="text-[15px] w-[340px]">
              Discover career guidance from industry experts. Elevate your path
              to success with our mentors. Connect now
            </p>
            <div className="flex items-center justify-center my-[35px]">
              <button className="text-[15px] text-[#6B6868] border border-[#6B6868] w-[146px] h-[49px]">
                See all profile
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LearningHubCardFour;
