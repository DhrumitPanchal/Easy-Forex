"use client";

import React, { useContext, useState } from "react";
import { FaBars, FaTimes, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Cookies from "js-cookie";
import { Context } from "@/app/Context/Index";
import { BiLogOut } from "react-icons/bi";

function SideMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const { router } = useContext(Context);
  return (
    <div className="relative flex w-screen h-screen overflow-x-hidden ">
      <FaBars
        onClick={() => setOpenMenu(!openMenu)}
        className="hidden max-sm:block mt-[.9rem] ml-[1rem]  z-[10] text-[1.8rem]"
      />
      <aside
        className={`${
          openMenu ? " max-sm:left-0" : "max-sm:-left-[15rem]"
        } z-[10] left-0 fixed top-0 flex flex-col justify-between pb-[2rem] items-center h-full w-[15rem] transition-all duration-300 bg-gray-100`}
      >
        <div className="w-full">
          <div className="cursor-pointer  flex items-center justify-between gap-[1rem] px-[1rem] py-[.6rem] h-fit w-full border-b-[1px] border-black/50 text-[1.2rem] transition-colors duration-300 text-black font-bold ">
            <FaTimes
              onClick={() => setOpenMenu(!openMenu)}
              className="hidden max-sm:block text-[1.6rem]"
            />
            <Link href={"/"} className="flex items-center gap-[.8rem]">
              <FaArrowLeft /> <h2>Back</h2>
            </Link>
          </div>

          <div className="flex flex-col">
            <Link
              href={"/admin/payments"}
              onClick={() => setOpenMenu(!openMenu)}
              className="cursor-pointer px-[1rem] py-[.6rem] h-fit w-full border-b-[1px] border-black/50 text-[1.2rem] transition-colors duration-300 text-black/50 font-bold hover:bg-black/10"
            >
              Payments
            </Link>
            <Link
              href={"/admin/courses"}
              onClick={() => setOpenMenu(!openMenu)}
              className="cursor-pointer px-[1rem] py-[.6rem] h-fit w-full border-b-[1px] border-black/50 text-[1.2rem] transition-colors duration-300 text-black/50 font-bold hover:bg-black/10"
            >
              Courses
            </Link>
            <Link
              href={"/admin/plans"}
              onClick={() => setOpenMenu(!openMenu)}
              className="cursor-pointer px-[1rem] py-[.6rem] h-fit w-full border-b-[1px] border-black/50 text-[1.2rem] transition-colors duration-300 text-black/50 font-bold hover:bg-black/10"
            >
              Plans
            </Link>
          </div>
        </div>

        <button
          onClick={() => {
            Cookies.remove("access-token");
            router.push("/admin");
          }}
          className=" cursor-pointer h-[2.4rem] w-[11rem] flex  justify-center items-center gap-[.6rem] rounded-[.4rem] text-[1rem]  tracking-[1px] font-normal bg-black text-white"
        >
          <BiLogOut className="text-[1.2rem]"/>
          <h2>Logout</h2>
        </button>
      </aside>
    </div>
  );
}

export default SideMenu;
