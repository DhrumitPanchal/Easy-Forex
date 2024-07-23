import React from "react";
import SideMenu from "@/app/components/Admin/SideMenu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
function page() {
  const Plans = [
    {
      months: 1,
      price: 45,
      benefits: [
        "Trade with Pro Trader",
        "Daily market signals",
        "Short term strategies",
        "Long term strategies",
        "1-3 Targets strategy",
        "Management tools",
        "Live Chat Support",
      ],
    },

    {
      months: 3,
      price: 75,
      benefits: [
        "Trade with Pro Trader",
        "Daily market signals",
        "Short term strategies",
        "Long term strategies",
        "1-3 Targets strategy",
        "Management tools",
        "Live Chat Support",
      ],
    },

    {
      months: 12,
      price: 100,
      benefits: [
        "Trade with Pro Trader",
        "Daily market signals",
        "Short term strategies",
        "Long term strategies",
        "1-3 Targets strategy",
        "Management tools",
        "Live Chat Support",
      ],
    },

    {
      months: 12,
      price: 100,
      benefits: [
        "Trade with Pro Trader",
        "Daily market signals",
        "Short term strategies",
        "Long term strategies",
        "1-3 Targets strategy",
        "Management tools",
        "Live Chat Support",
      ],
    },

    {
      months: 12,
      price: 100,
      benefits: [
        "Trade with Pro Trader",
        "Daily market signals",
        "Short term strategies",
        "Long term strategies",
        "1-3 Targets strategy",
        "Management tools",
        "Live Chat Support",
      ],
    },
  ];
  return (
    <div className="relative flex w-full h-fit">
      <SideMenu />

      <div className="absolute left-[15rem] max-sm:left-0 right-0 ">
        <div className="px-[2rem] max-sm:px-[1rem] py-[1rem] flex justify-between flex-row-reverse max-sm:flex-col max-sm:gap-[1rem]">
          <Link
            href={"/admin/plans/add"}
            className="self-end cursor-pointer h-[2.4rem] w-[11rem] flex  justify-center items-center gap-[.6rem] rounded-[.4rem] text-[1rem]  tracking-[1px] font-normal bg-black text-white"
          >
            <FaPlus className="text-[1.2rem] text-white " />
            <h2>Add Course</h2>
          </Link>
          <div className="flex gap-[1rem]">
            <input
              placeholder="Search Product"
              type="text"
              className="px-[.8rem] h-[2.4rem] max-sm:w-full w-[25rem] border-[2px] rounded-[.4rem] text-[1.2rem] border-black/70 focus:border-black focus:border-[2.4px] placeholder:text-black/70"
            />
            <div className="cursor-pointer h-[2.4rem] w-[8rem]  max-sm:w-fit max-sm:px-[.8rem] flex justify-center items-center gap-[.6rem] rounded-[.4rem] text-[1.1rem]  tracking-[1px] font-normal bg-black text-white">
              <FaMagnifyingGlass className="text-[1rem] text-white " />{" "}
              <span className="max-sm:hidden">Search</span>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------- */}
        <div className="px-[2rem] mt-[1rem] flex flex-wrap max-sm:flex-col max-sm:items-center  gap-[2rem] w-full ">
          {Plans?.map((item, index) => {
            return (
              <div
                key={item?.months}
                className="flex flex-col items-center w-[18rem] border-[1px] border-black/20"
              >
                <div
                  className={`h-[3rem] w-full  flex justify-center items-center font-light text-white  ${
                    Plans.length === index + 1
                      ? "bg-[#f4645a]"
                      : "bg-[#2e353e] "
                  }`}
                >
                  <p>
                    <span>{item?.months}</span> Month Membership
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-full h-[6rem] text-[#2e353e] bg-[#f7f7f7]">
                  <div className="flex flex-col gap-[.2rem] items-center">
                    <div className="flex gap-[.2rem]">
                      <h2 className="text-[1rem] font-semibold">$</h2>{" "}
                      <h2 className="text-[2rem] leading-[1.6rem] font-semibold">
                        {item?.price}
                      </h2>
                    </div>
                    <p className="text-[.8rem]">VIP</p>
                  </div>
                </div>

                <div className="w-full ">
                  {item?.benefits?.map((benefit) => {
                    return (
                      <h2
                        key={benefit}
                        className="w-full text-center py-[.2rem] border-b-[1px] border-black/20"
                      >
                        {benefit}
                      </h2>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
