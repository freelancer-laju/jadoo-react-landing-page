import React from "react";

import Testimonial from "../Assets/Testimonial1.png";
import Fill from "../Assets/fill.png";

const Testimonials = () => {
  return (
    <>
      <section className="relative md:flex md:justify-between  px-4 md:px-10 lg:px-[9rem] gap-4 ">
        <div className=" w-full h-auto md:w-[50%] mx-auto">
          <div>
            <p className="uppercase text-[#5E6282] text-[14px] font-semibold font-[Poppins]">
              Testimonials
            </p>
            <h1 className="md:text-[40px] font-[Volkhov] text-[#14183E] text-3xl mt-4">
              What people say about Us.
            </h1>
          </div>
          <div className="mt-10 text-[#14183E]">
            <img src={Fill} alt="" />
          </div>
        </div>

        <div className="w-full h-auto md:w-[50%] mt-10 md:mt-0">
          <img src={Testimonial} alt="" />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
