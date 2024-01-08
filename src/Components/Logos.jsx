import React from "react";

import LogoItems from "../Assets/logos-item.png";

const Logos = () => {
  return (
    <>
      <section className="px-4 md:px-10 lg:px-[9rem]">
        <div>
          <img src={LogoItems} alt="" />
        </div>

      </section>
    </>
  );
};

export default Logos;
