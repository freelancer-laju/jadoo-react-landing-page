import React from "react";

import { TextInput } from "keep-react";
import { Envelope } from "phosphor-react";

const Subscribe = () => {
  return (
    <>
      <section className="w-full -mt-12 md:-mt-[100px] h-auto px-4 md:px-10 lg:px-[9rem] my-20">
        <main className="bg-[#DFD7F9] md:p-10 p-5 rounded-t-[50px]">
          <div>
            <h1 className="md:text-[30px] text-center font-[Poppins] text-[#5E6282] leading-10">
              Subscribe to get information, latest news and other <br />{" "}
              interesting offers about Jadoo
            </h1>
          </div>

          <div className="w-full md:flex md:justify-between md:items-center gap-20 mt-10">
            <div className="w-full">
              <TextInput
                id="#id-9"
                placeholder="example@gmail.com"
                color="gray"
                sizing="md"
                addon={<Envelope size={20} color="#5E718D" />}
                addonPosition="left"
              />
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-[#FF946D] w-[150px] h-auto py-3 text-white rounded-lg shadow-md hover:bg-[#FF7D68] transition-all duration-300 ease-in">
                Subscribe
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Subscribe;
