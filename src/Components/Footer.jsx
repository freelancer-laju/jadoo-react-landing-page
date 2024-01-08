import React from "react";

import Jadoo from "../Assets/Jadoo.png";
import OutBound from "../Assets/Outbound.png";

const Footer = () => {
  return (
    <section className="my-10 px-4 md:px-10 lg:px-[9rem]">
      <main className="flex flex-wrap justify-between items-center p-4 gap-4 ">
        {/* div-1 */}
        <div>
          <img src={Jadoo} alt="" />
          <p className="text-[13px] font-[Poppins] text-[#5E6282] mt-5">
            Book your trip in minute, get full <br /> Control for much longer.
          </p>
        </div>

        {/* div-2 */}
        <div>
          <h1 className="font-bold text-[#080809] font-[Poppins]">Company</h1>
          <ul className="mt-2 text-[#5E6282] font-semibold gap-4">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>

        {/* div-3 */}
        <div>
          <h1 className="font-bold text-[#080809] font-[Poppins]">Contact</h1>
          <ul className="mt-2 text-[#5E6282] font-semibold gap-4">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affilates</li>
          </ul>
        </div>

        {/* div-4 */}
        <div>
          <h1 className="font-bold text-[#080809] font-[Poppins]">More</h1>
          <ul className="mt-2 text-[#5E6282] font-semibold gap-4">
            <li>Airlinefees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>

        {/* div-5 */}
        <div>
          <img src={OutBound} alt="" />
        </div>
      </main>

      <div className="text-[14px] text-center text-[#5E6282] font-[Poppins]">
        <p>All rights reserved - contact.jadoo.co</p>
      </div>
    </section>
  );
};

export default Footer;
