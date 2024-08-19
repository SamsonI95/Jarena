//App
import React from "react";

//Component
import Header from "../page components/Header";
import BlogCard from "../card components/BlogCard";


const Blog = () => {
  return (
    <>
      <div>
        <section className="blogimg">
          <Header />
          <div className="flex flex-col justify-center items-center lg:mt-[8%]">
            <h3 className="text-center text-white text-lg lg:text-3xl mt-[33.21px] mb-[22.53px] lg:mb-0">
              Dive into Tips, Trends, and Job Hunt Joys!
            </h3>
            <section className="flex justify-between py-2 px-2 rounded-lg border border-gray-300 w-[290px] lg:w-[524px] mt-5 lg:mt-[5%] mb-[96.91px] lg:mb-[348px]">
              <div className="flex items-center space-x-2 text-[#C3C3C3]">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search topics"
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
          </div>
        </section>
        <section className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-14 mt-[32.14px] lg:mt-[128px] lg:mb-[109.86px] px-[30px] lg:px-0">
          <img src="assets/blog-image2.png" alt="blog-image" className="lg:w-[655px] relative lg:right-4 mx-auto lg:mx-0"/>
          <div className="mt-[17.16px] lg:mt-0">
            <h3 className="font-bold lg:text-2xl">Optimizing Your Online Job Search</h3>
            <p className="lg:text-[16px] w-[px] lg:w-[512px] mt-2 mb-[9px] lg:mt-[36px] lg:mb-[32px]">
              In the age of digital job hunting, the key to success lies in more
              than just sending out resumes. It's about strategically enhancing
              your online presence to navigate the expansive digital landscape
              effectively. Craft a compelling online profile on platforms like
              LinkedIn, highlighting your skills and accomplishments.
            </p>
            {/* <button className="outline-none lg:text-lg">Read more</button> */}
          </div>
        </section>
        <section className="mb-12 lg:mb-[101px]">
          <h3 className="font-semibold text-2xl lg:text-3xl text-center my-12 lg:my-[60px]">Articles</h3>
          <BlogCard />
        </section>
      </div>
    </>
  );
};

export default Blog;
