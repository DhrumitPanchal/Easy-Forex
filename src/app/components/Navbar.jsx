"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");
  const [bgColor, setBgColor] = useState(
    "bg-transparent backdrop-blur-[5px] max-sm:bg-black"
  );

  const router = useRouter();
  const pathname = usePathname();

  const NavItems = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "ABOUT US",
      path: "/#about",
    },
    {
      name: "COURSE",
      path: "/course",
    },
    {
      name: "CART",
      path: "/cart",
    },
    {
      name: "SIGNALS",
      path: "/",
      Children: [
        { name: "Signals History", path: "/" },
        { name: "VIP Instruction", path: "/" },
        { name: "XAUUSD Signals History", path: "/" },
        { name: "INDICES Signals History", path: "/" },
        { name: "OIL Signals History", path: "/" },
      ],
    },
    {
      name: "TELEGRAM TO MT5",
      path: "telegramtomt5",
    },

    {
      name: "TESTIMONIALS & REVIEWS",
      path: "testimonials",
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (pathname.match(/^\/admin/)) return;

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setBgColor("bg-black");
      } else {
        setBgColor("bg-transparent backdrop-blur-[5px] max-sm:bg-black");
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      // Ensure the background color is correct on initial load
      if (window.scrollY > 600) {
        setBgColor("bg-black");
      } else {
        setBgColor("bg-transparent backdrop-blur-[5px] max-sm:bg-black");
      }
    } else {
      setBgColor("bg-black");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  if (pathname.match(/^\/admin/) || pathname.match(/^\/payment/)) {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 pt-[.6rem] z-40 w-full flex justify-between items-center px-[2rem] max-sm:px-[2rem] py-[.2rem] ${bgColor} transition-colors duration-300`}
    >
      <a
        href="#home"
        className="cursor-pointer flex items-center gap-[.6rem] text-[1.4rem] text-secondaryColor font-bold"
      >
        <Image alt="" src={"/Images/Logo.png"} height={50} width={50} />{" "}
      </a>

      <FaBars
        onClick={() => setMenuOpen(!menuOpen)}
        className="cursor-pointer text-white text-[1.5rem] max-sm:block hidden text-secondaryColor"
      />

      <div
        className={`flex max-sm:fixed max-sm:top-0 ${
          menuOpen ? "max-sm:left-0" : "max-sm:-left-[100%]"
        } max-sm:h-screen max-sm:w-full max-sm:justify-center max-sm:bg-black max-sm:items-center max-sm:flex-col max-sm:text-[1.3rem] max-sm:gap-[.6rem]  max-sm:z-[50] gap-[1rem] text-[1.1rem] font-semibold tracking-[.5px] transition-all duration-300`}
      >
        <div className="px-[1.2rem] pr-[1.6rem] py-[.8rem] absolute top-0 justify-between hidden max-sm:flex max-sm:w-full ">
          <Image
            className=""
            alt=""
            src={"/Images/Logo.png"}
            height={50}
            width={50}
          />{" "}
          <button className="hidden max-sm:block text-[1.4rem] font-semibold ">
            <FaTimes
              className="cursor-pointer text-white text-[1.6rem]"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </button>
        </div>

        <div className="flex w-full h-full gap-[1rem] max-sm:flex-col max-sm:mt-[6rem] max-sm:px-[.8rem]">
          {NavItems?.map((item) => {
            return (
              <Link
                key={item.path}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  setActiveSection(item.name);
                }}
                className={`${
                  item?.Children && "relative group h-fit"
                } px-[.2rem] pt-[.6rem] pb-[.2rem] flex items-center gap-[.6rem] text-white  transition-colors duration-200 ${
                  activeSection === item?.name &&
                  "border-b-[.11rem] border-white"
                } hover:text-slate-300 text-[.9rem]  max-sm:text-[1.2rem] font-medium max-sm:border-b-[.1px] max-sm:border-white/60`}
                href={item?.path}
              >
                {item?.name}
                {item.Children && <IoIosArrowDown className="text-[1rem]" />}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
