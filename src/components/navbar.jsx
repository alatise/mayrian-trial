// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Services" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Virtual Estimates" },
    { id: 5, text: "Testimonial" },
    { id: 6, text: "Get in Touch" },
  ];

  return (
    <>
      <div className="flex justify-center lg:justify-center xl:justify-center items-center mx-auto px-8 my-8">
        <ul className="hidden md:flex gap-4 items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`px-3 pb-2 cursor-pointer ${
                item.text === "Home"
                  ? "border-b-2 border-b-[#FAF400]"
                  : "hover:border-b hover:border-b-[#FAF400]"
              } ${
                item.text === "Get in Touch"
                  ? "bg-[#FAF400] text-black font-semibold px-6 py-2 rounded-full"
                  : ""
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end px-8 my-8 md:hidden">
        <div onClick={handleNav} className="cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "absolute z-20 md:hidden left-0 top-0 w-[60%] h-auto border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`p-4 border-b rounded-xl hover:bg-[#FAF400] duration-300 hover:text-black cursor-pointer border-gray-600 ${
                item.text === "Home" ? "border-b-2 border-b-[#FAF400]" : ""
              } ${
                item.text === "Get in Touch"
                  ? "bg-[#FAF400] text-black px-4 py-2 rounded-md my-4"
                  : ""
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
