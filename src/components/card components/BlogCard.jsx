//App
import React from "react";

//Data
import BlogData from "../data/BlogData.json";

const BlogCard = () => {
  return (
    <>
      <div>
        <section className="hidden md:flex items-center justify-evenly">
          {BlogData.map((item, index) => (
            <div key={index} className="w-[361.77px] h-[541.19px]">
              <div>
                <img src={item.image} alt={item.name} />
                <div className="flex justify-between text-[15px] mt-3">
                  <h3>{item.date}</h3>
                  <h3>{item.name}</h3>
                </div>
              </div>
              <div className="my-5 space-y-5">
                <h3 className="text-sm lg:text-xl font-semibold w-[370px]">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-[15px] w-[350px]">
                  {item.details}
                </p>
              </div>
              <button className="font-bold lg:hover:text-[#5847D6] border-none mt-2">
                Read more
              </button>
            </div>
          ))}
        </section>

        <section className="md:hidden flex flex-col gap-8 px-[60px]">
          <section>
            <div className="w-[400px]">
              <div className="w-fit">
                <img src="assets/BlogCard1Image1.png" alt="Emeka Mba" />
                <div className="flex justify-between text-[12px] mb-3">
                  <h3>June 10, 2024</h3>
                  <h3>Emeka Mba</h3>
                </div>
              </div>
              <div>
                <h3 className="text-sm lg:text-2xl font-semibold w-[370px]">
                  Mastering the Art of Networking: Building Connections for
                  Career Success
                </h3>
                <p className="text-sm lg:text-2xl w-[350px]">
                  Networking — it’s a word that often evokes mixed emotions.
                  Some people thrive on it, while others find it daunting.
                  Regardless of where you fall on the spectrum, there’s no
                  denying that networking is an essential skill that can
                  turbocharge your career.{" "}
                </p>
              </div>
              <button className="font-bold lg:hover:text-[#5847D6] border-none">
                Read more
              </button>
            </div>
          </section>
          <section>
            <div className="w-[400px]">
              <div className="w-fit">
                <img src="assets/BlogCard1Image2.png" alt="Esther Eze" />
                <div className="flex justify-between text-[12px] mb-3">
                  <h3>June 17, 2024</h3>
                  <h3>Esther Eze</h3>
                </div>
              </div>
              <div>
                <h3 className="text-sm lg:text-2xl font-semibold w-[370px]">
                  Finding Your Fit: How to Identify and Pursue Your Ideal Career
                  Path
                </h3>
                <p className="text-sm lg:text- w-[350px]">
                  Understanding oneself is the cornerstone of discovering a
                  fulfilling career. Begin by reflecting on your passions,
                  interests, and values. What activities make you lose track of
                  time? What subjects or causes ignite a spark within you?
                </p>
              </div>
              <button className="font-bold lg:hover:text-[#5847D6] border-none">
                Read more
              </button>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default BlogCard;
