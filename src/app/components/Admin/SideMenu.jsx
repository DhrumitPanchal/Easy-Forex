"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
// import CoursePage from "./CoursePage";
// import AddCourse from "./AddCourse";
function SideMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="relative flex w-screen h-screen overflow-x-hidden ">
      <FaBars
        onClick={() => setOpenMenu(!openMenu)}
        className="hidden max-sm:block mt-[.9rem] ml-[1rem]  z-[10] text-[1.8rem]"
      />
      <aside
        className={`${
          openMenu ? " max-sm:left-0" : "max-sm:-left-[15rem]"
        } z-[10] left-0 fixed top-0 flex flex-col h-full w-[15rem] transition-all duration-300 bg-gray-100`}
      >
        <div className="cursor-pointer  flex items-center justify-between gap-[1rem] px-[1rem] py-[.6rem] h-fit w-full border-b-[1px] border-black/50 text-[1.2rem] transition-colors duration-300 text-black font-bold ">
          <FaTimes
            onClick={() => setOpenMenu(!openMenu)}
            className="hidden max-sm:block text-[1.6rem]"
          />
          <Link href={"/"} className="flex items-center gap-[.8rem]">
            <FaArrowLeft /> <h2>Back</h2>
          </Link>
        </div>
        <Link
          href={"/admin/order"}
          onClick={() => setOpenMenu(!openMenu)}
          className="cursor-pointer px-[1rem] py-[.6rem] h-fit w-full border-b-[1px] border-black/50 text-[1.2rem] transition-colors duration-300 text-black/50 font-bold hover:bg-black/10"
        >
          Orders
        </Link>
        <Link
          href={"/admin/courses"}
          onClick={() => setOpenMenu(!openMenu)}
          className="cursor-pointer px-[1rem] py-[.6rem] h-fit w-full border-b-[1px] border-black/50 text-[1.2rem] transition-colors duration-300 text-black/50 font-bold hover:bg-black/10"
        >
          Courses
        </Link>
      </aside>
    </div>
  );
}

export default SideMenu;
