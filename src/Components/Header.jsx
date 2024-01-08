import React, { useState } from "react";

import Logo from "../Assets/Logo.png";
import Traveller from "../Assets/Traveller2.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  let Links = [
    { name: "Desitnations", link: "/" },
    { name: "Hotels", link: "/" },
    { name: "Flights", link: "/" },
    { name: "Bookings", link: "/" },
    { name: "Login", link: "/" },
  ];

  return (
    <>
      <section className=" md:px-10 lg:px-[6rem] shadow-md  w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white md:bg-transparent py-5 md:px-10 px-7">
          <div>
            <img src={Logo} alt="" />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`gap-4 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#DF6951] md:bg-transparent  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in rounded-xl ${
              open ? "top-20 " : "top-[-490px]"
            }`}>
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-md md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white md:text-black font-semibold">
                  {link.name}
                </a>
              </li>
            ))}
            <button className="font-semibold text-black md:text-black ring-1 md:ring-black ring-white rounded-md px-4 py-1 hover:bg-white md:hover:bg-[#DF6951] md:hover:ring-[#DF6951] transition-all duration-300 md:hover:text-white">
              Sign up
            </button>

            <div className="flex md:justify-center items-center gap-1 font-semibold mt-4 md:mt-0 text-white md:text-black">
              <p>EN</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none">
                  <path d="M0.5 0.5L5 5L9.5 0.5" stroke="#212832" />
                </svg>
              </span>
            </div>
          </ul>
        </div>
      </section>

      {/* hero section */}
      <main className="px-4 md:px-10 lg:px-[9rem] mt-[150px]">
        <div className=" absolute top-0 right-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="704"
            height="724"
            viewBox="0 0 704 724"
            fill="none">
            <path
              d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z"
              fill="#FFF1DA"
            />
          </svg>
        </div>

        <section className=" md:flex md:justify-between md:items-center z-auto">
          <div>
            <div className="text-[#DF6951] font-bold text-[16px]">
              BEST DESTINATIONS AROUND THE WORLD
            </div>
            <h1 className="text-[#181E4B] text-[40px] md:text-[60px] font-bold font-[Volkhov] md:leading-[89px] mt-5">
              Travel, enjoy <br /> and live a new and full life
            </h1>
            <p className="text-[#181E4B] font-[Poppins] text-[16px] font-semibold mt-4 w-[460px] ">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="flex  items-center md:justify-start">
              <div>
                <button className="bg-[#F1A501] w-[170px] h-[60px] text-[18px] font-bold text-white rounded-md ">
                  Find out more
                </button>
              </div>
              <div className="flex justify-center items-center">
                <div className=" mt-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="112"
                    height="112"
                    viewBox="0 0 112 112"
                    fill="none">
                    <g filter="url(#filter0_d_1_131)">
                      <circle cx="56" cy="41" r="26" fill="#DF6951" />
                    </g>
                    <path
                      d="M64 42.5L52.75 48.9952L52.75 36.0048L64 42.5Z"
                      fill="white"
                    />
                    <defs>
                      <filter
                        id="filter0_d_1_131"
                        x="0"
                        y="0"
                        width="112"
                        height="112"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="15" />
                        <feGaussianBlur stdDeviation="15" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.87451 0 0 0 0 0.411765 0 0 0 0 0.317647 0 0 0 0.3 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1_131"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_1_131"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="text-[#686D77] font-semibold font-[Poppins]text-[17px] -ml-4">
                  Play Demo
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block z-10 w-[600px]">
            <img src={Traveller} alt="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Header;
