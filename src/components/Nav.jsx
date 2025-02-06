import React from "react";

const Nav = () => {
  return (
    <div className="w-full m-0"> 
      <nav className="flex items-center justify-between max-w-[1240px] h-[72px] p-4 m-auto">
        <div className="flex gap-10 items-center justify-between">
          <img className="mt-2.5 cursor-pointer size-14" src="logo.png" alt="logo" />
        </div>
        <ul className="flex items-center justify-between gap-5 font-medium cursor-pointer w-[333px] ">
          <li
            className="hover:underline decoration-black decoration-solid underline-offset-2"
            href="#"
          >
            Menu
          </li>
          <li
            className="hover:underline decoration-black decoration-solid underline-offset-2"
            href="#"
          >
            Locaiton
          </li>
          <li
            className="hover:underline decoration-black decoration-solid underline-offset-2"
            href="#"
          >
            About
          </li>
          <li
            className="hover:underline decoration-black decoration-solid underline-offset-2"
            href="#"
          >
            Contact
          </li>
        </ul>
        <button className="bg-red-500 text-white w-[75px] h-[31px] text-center rounded cursor-pointer">
          Login
        </button>
      </nav>
    </div>
  );
};

export default Nav;
