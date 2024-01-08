import React from "react";

import TripLogo1 from "../Assets/TripLogo1.png";
import TripLogo2 from "../Assets/TripLogo2.png";
import TripLogo3 from "../Assets/TripLogo3.png";
import TripLogo from "../Assets/Trip1png.png";

const BookTripSection = () => {
  return (
    <>
      <section className="md:-mt-20 px-4 md:px-10 lg:px-[9rem] md:flex md:justify-between md:items-center md:gap-10">
        {/* left div */}
        <div className="text-[#5E6282] md:w-[450px]">
          <div className="text-center md:text-start py-10">
            <p className="font-bold">Easy and Fast</p>
            <h1 className="text-2xl md:text-[30px] font-[Volkhov] text-[#14183E] mt-4">
              Book your next trip in 3 easy steps
            </h1>
          </div>

          {/* trip-1 */}
          <div className="flex gap-4 mt-4 font-[Poppins] ">
            <div>
              <img src={TripLogo1} alt="" />
            </div>
            <div>
              <h1 className="font-bold">Choose Destination</h1>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>

          {/* trip-2 */}
          <div className="flex gap-4 mt-4 font-[Poppins] ">
            <div>
              <img src={TripLogo2} alt="" />
            </div>
            <div>
              <h1 className="font-bold">Make Payment</h1>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>

          {/* trip-3 */}
          <div className="flex gap-4 mt-4 font-[Poppins] ">
            <div>
              <img src={TripLogo3} alt="" />
            </div>
            <div>
              <h1 className="font-bold">Reach Airport on Selected Date</h1>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* right div */}
        <div>
          <img src={TripLogo} alt="" />
        </div>
      </section>
    </>
  );
};

export default BookTripSection;
