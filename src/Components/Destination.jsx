import React from "react";

import rome from "../Assets/rome.png";
import london from "../Assets/london.jpg";
import europe from "../Assets/europe.png";

const Destination = () => {
  return (
    <>
      <div className="text-center mt-20">
        <p className="text-[18px] text-[#5E6282] font-semibold">Top Selling</p>
        <h1 className="text-3xl md:text-[40px] md:font-normal font-[Volkhov] text-[#14183E] font-bold mt-2">
          Top Destinations
        </h1>
      </div>

      {/* main section */}
      <section className="md:flex md:justify-between md:items-center px-4 md:px-10 lg:px-[9rem] my-5 gap-4 flex-wrap">
        {/* card 1 */}
        <div className="w-full md:w-[314px] h-auto rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 ease-in">
          <div>
            <img className="w-full h-[314px] rounded-3xl" src={rome} alt="" />
          </div>

          <main className="mt-5 px-10 pb-4 font-[Poppins] text-[#5E6282]">
            <div className="flex justify-between text-[18px] font-[500]">
              <h1>Rome, Italty</h1>
              <p>$5,42k</p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                    d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                    fill="#080809"
                  />
                </svg>
              </span>
              <p className="text-[16px]">10 Days Trip</p>
            </div>
          </main>
        </div>

        {/* card 2 */}
        <div className="w-full md:w-[314px] h-auto rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 ease-in my-6">
          <div>
            <img className="w-full h-[314px] rounded-3xl" src={london} alt="" />
          </div>

          <main className="mt-5 px-10 pb-4 font-[Poppins] text-[#5E6282]">
            <div className="flex justify-between text-[18px] font-[500]">
              <h1>London, UK</h1>
              <p>$4.2k</p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                    d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                    fill="#080809"
                  />
                </svg>
              </span>
              <p className="text-[16px]">12 Days Trip</p>
            </div>
          </main>
        </div>

        {/* card 3 */}
        <div className="w-full md:w-[314px] h-auto rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 ease-in">
          <div>
            <img className="w-full h-[314px] rounded-3xl" src={europe} alt="" />
          </div>

          <main className="mt-5 px-10 pb-4 font-[Poppins] text-[#5E6282]">
            <div className="flex justify-between text-[18px] font-[500]">
              <h1>Full Europe</h1>
              <p>$15k</p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                    d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                    fill="#080809"
                  />
                </svg>
              </span>
              <p className="text-[16px]">28 Days Trip</p>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Destination;
