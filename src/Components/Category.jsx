import React from "react";

import Group1 from "../Assets/Group1.png";
import Group2 from "../Assets/Group2.png";
import Group3 from "../Assets/Group3.png";
import Group4 from "../Assets/Group4.png";
import Rectangle1 from "../Assets/Rectangle1.png";

const Category = () => {
  return (
    <>
      <section className="px-4 md:px-10 lg:px-[9rem] mt-20 mb-10">
        <div className="text-center">
          <p className="text-[18px] text-[#5E6282] font-semibold">CATEGORY</p>
          <h1 className="text-[30px] md:text-[40px] font-[Volkhov] text-[#14183E] font-[700px]">
            We Offer Best Services
          </h1>
        </div>

        {/* card section */}
        <div className="md:flex md:justify-center md:items-center gap-10">
          <div className="w-auto h-auto  flex flex-col justify-center items-center px-4 py-10 rounded-3xl md:shadow-lg shadow-md mb-5">
            <div>
              <img src={Group1} alt="" />
            </div>

            <div>
              <h1 className="text-lg font-bold text-center mt-4 mb-2">
                Calculated Weather{" "}
              </h1>
              <p className="text-[#5E6282] font-semibold font-[Poppins] text-[14px]">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
            </div>
          </div>

          <div className="w-auto h-auto  flex flex-col justify-center items-center px-4 py-10 rounded-3xl md:shadow-lg shadow-md mb-5 relative ">
            <div className="w-20">
              <img src={Group2} alt="" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-center mt-4 mb-2">
                Best Flights
              </h1>
              <p className="text-[#5E6282] font-semibold font-[Poppins] text-[14px]">
                Engrossed listening. Park gate sell they west hard for the.{" "}
              </p>
            </div>
          </div>

          <div className="w-auto h-auto flex flex-col justify-center items-center px-4 py-10 rounded-3xl md:shadow-lg shadow-md mb-5">
            <div>
              <img src={Group3} alt="" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-center mt-4 mb-2">
                Local Events
              </h1>
              <p className="text-[#5E6282] font-semibold font-[Poppins] text-[14px]">
                Barton vanity itself do in it. Preferd to men it engrossed
                listening.
              </p>
            </div>
          </div>

          <div className="w-auto h-auto flex flex-col justify-center items-center px-4 py-10 rounded-3xl md:shadow-lg shadow-md mb-5">
            <div>
              <img src={Group4} alt="" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-center mt-4 mb-2">
                Customization
              </h1>
              <p className="text-[#5E6282] font-semibold font-[Poppins] text-[14px]">
                We deliver outsourced aviation services for military customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
