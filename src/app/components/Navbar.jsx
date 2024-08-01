"use client";

import Image from "next/image";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Context } from "../Context/Index";

function Navbar() {
  const { cart } = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false);
  const [signalMenu, setSignalMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("HOME");
  const [bgColor, setBgColor] = useState(
    "bg-transparent backdrop-blur-[5px] max-sm:bg-[#242b32]"
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
      name: "CONTACT US",
      path: "/contact",
    },

    {
      name: "TESTIMONIALS & REVIEWS",
      path: "/#testimonials",
    },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (pathname.match(/^\/admin/)) return;

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setBgColor("bg-[#242b32]");
      } else {
        setBgColor("bg-transparent backdrop-blur-[5px] max-sm:bg-[#242b32]");
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      // Ensure the background color is correct on initial load
      if (window.scrollY > 600) {
        setBgColor("bg-[#242b32]");
      } else {
        setBgColor("bg-transparent backdrop-blur-[5px] max-sm:bg-[#242b32]");
      }
    } else {
      setBgColor("bg-[#242b32]");
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
      className={`fixed top-0 left-0 right-0 py-[.6rem] z-40 w-full flex justify-between items-center px-[2rem] max-sm:px-[2rem]  ${bgColor} `}
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
        } max-sm:h-screen max-sm:w-full max-sm:justify-center max-sm:bg-[#242b32] max-sm:items-center max-sm:flex-col max-sm:text-[1.3rem] max-sm:gap-[.6rem]  max-sm:z-[50] gap-[1rem] text-[1.1rem] font-semibold tracking-[.5px] transition-all duration-300`}
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
              <div
                key={item?.name}
                onClick={() => {
                  item.name !== "SIGNALS" && setMenuOpen(!menuOpen);
                  item.name !== "SIGNALS" && setActiveSection(item.name);
                  item?.name !== "SIGNALS"
                    ? router.push(item.path)
                    : setSignalMenu(!signalMenu);
                }}
                className={`${
                  item?.Children ? "relative " : "group"
                } cursor-pointer px-[.2rem] pt-[.6rem] pb-[.2rem] flex items-center gap-[.6rem] text-white  transition-colors duration-200 ${
                  activeSection === item?.name && item.name !== "SIGNALS"
                    ? "border-b-[.11rem] border-white"
                    : ""
                }  text-[.9rem]  max-sm:text-[1.2rem] font-medium max-sm:border-b-[.1px] max-sm:border-white/60`}
                href={item?.path}
              >
                <div className="flex gap-[.6rem] max-sm:flex-col max-sm:items-start items-center group-hover:text-slate-300">
                  <div className="flex gap-[.6rem] items-center">
                    {" "}
                    {item?.name}
                    {item.Children && (
                      <div>
                        {signalMenu ? (
                          <IoIosArrowUp className="text-[1rem]" />
                        ) : (
                          <IoIosArrowDown className="text-[1rem]" />
                        )}
                      </div>
                    )}
                  </div>

                  {item?.name === "SIGNALS" && (
                    <div
                      className={`hidden max-sm:block ${
                        signalMenu ? "max-sm:block" : "max-sm:hidden"
                      }`}
                    >
                      {signalMenu && (
                        <div className="flex flex-col pb-[.4rem] gap-[.4rem]">
                          {item?.Children?.map((e) => {
                            return <div key={e.name}>{e?.name}</div>;
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {item?.name === "CART" && cart.length > 0 && (
                  <div className=" h-[1.2rem] w-[1.2rem] max-sm:h-[1.6rem] max-sm:w-[1.6rem]  flex items-center justify-center text-[.9rem] max-sm:text-[1.2rem] max-sm:ml-[rem] rounded-full bg-white/20   ">
                    {cart?.length}
                  </div>
                )}

                {item?.name === "SIGNALS"
                  ? signalMenu && (
                      <div
                        className={`max-sm:hidden absolute max-sm:relative flex flex-col gap-[.3rem] top-[3.8rem] rounded-sm w-[13rem] font-medium px-[.8rem] py-[.8rem] ${
                          bgColor === "bg-[#242b32]"
                            ? "bg-[#242b32] text-white/80"
                            : "bg-black/30 "
                        }`}
                      >
                        {item?.Children?.map((e) => {
                          return (
                            <div
                              className="hover:text-white text-white/70"
                              onClick={() => router.push("/")}
                              key={e.name}
                            >
                              {e.name}
                            </div>
                          );
                        })}
                      </div>
                    )
                  : null}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
