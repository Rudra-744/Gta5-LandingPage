import React from "react";

const Navbar = ({ navref }) => {
  return (
    <div className="navbar absolute top-0 left-0 w-full py-6 px-8  z-10">
      <div ref={navref} className="logo flex gap-10">
        <div className="lines flex flex-col gap-[5px] justify-center">
          <div className="line w-12 h-1.5 bg-white"></div>
          <div className="line w-8 h-1.5 bg-white"></div>
          <div className="line w-5 h-1.5  bg-white"></div>
        </div>
        <h3 className="text-3xl -m-[7px] leading-none text-white">Rockstar</h3>
      </div>
    </div>
  );
};

export default Navbar;