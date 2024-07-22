"use client";

import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AdminCourseCard from "../../components/AdminCourseCard";
import SideMenu from "@/app/components/Admin/SideMenu";
function Page() {
  const courses = [
    {
      name: "Forex Mastery",
      desc: "Learn the art of Forex trading with our comprehensive course. Understand market trends, strategies, and risk management to become a proficient trader.",
      image: "/Images/forex.webp",
      packs: [
        { months: 1, price: 60, disc_price: 110 },
        { months: 3, price: 120, disc_price: 180 },
        { months: 6, price: 180, disc_price: 240 },
        { months: 12, price: 300, disc_price: 450 },
      ],
    },
    {
      name: "Crypto Trading Basics",
      desc: "Start your journey into the world of cryptocurrency trading. Learn about different cryptocurrencies, trading platforms, and basic trading techniques.",
      image: "/Images/forex.webp",
      packs: [
        { months: 1, price: 40, disc_price: 80 },
        { months: 3, price: 90, disc_price: 130 },
        { months: 6, price: 140, disc_price: 190 },
        { months: 12, price: 240, disc_price: 380 },
      ],
    },
    {
      name: "Stock Market Essentials",
      desc: "Understand the fundamentals of stock trading. This course covers market analysis, stock selection, and portfolio management.",
      image: "/Images/forex.webp",
      packs: [
        { months: 1, price: 70, disc_price: 120 },
        { months: 3, price: 130, disc_price: 190 },
        { months: 6, price: 190, disc_price: 250 },
        { months: 12, price: 350, disc_price: 500 },
      ],
    },
    {
      name: "Options Trading Pro",
      desc: "Dive deep into options trading with our expert-led course. Learn about different options strategies, risk management, and advanced trading techniques.",
      image: "/Images/forex.webp",
      packs: [
        { months: 1, price: 80, disc_price: 140 },
        { months: 3, price: 150, disc_price: 220 },
        { months: 6, price: 220, disc_price: 300 },
        { months: 12, price: 400, disc_price: 600 },
      ],
    },
    {
      name: "Commodities Trading",
      desc: "Explore the world of commodities trading. Learn about different commodities, trading strategies, and how to analyze market trends.",
      image: "/Images/forex.webp",
      packs: [
        { months: 1, price: 55, disc_price: 100 },
        { months: 3, price: 110, disc_price: 160 },
        { months: 6, price: 165, disc_price: 220 },
        { months: 12, price: 300, disc_price: 450 },
      ],
    },
    {
      name: "Futures Trading Strategies",
      desc: "Master the strategies of futures trading. This course covers market analysis, trading techniques, and risk management for futures markets.",
      image: "/Images/forex.webp",
      packs: [
        { months: 1, price: 75, disc_price: 130 },
        { months: 3, price: 140, disc_price: 200 },
        { months: 6, price: 210, disc_price: 280 },
        { months: 12, price: 380, disc_price: 550 },
      ],
    },
  ];
  return (
    <div className="relative flex w-full h-full ">
      <SideMenu />

      <div className="absolute left-[15rem] max-sm:left-0 right-0 ">
        <div className="px-[2rem] max-sm:px-[1rem] py-[1rem]  flex justify-between flex-row-reverse max-sm:flex-col max-sm:gap-[1rem]">
          <Link
            href={"/admin/courses/add"}
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

        <div className="px-[1.6rem] pt-[1.4rem] pb-[2rem] flex flex-col gap-[2rem]">
          {courses?.map((item) => {
            return <AdminCourseCard key={item} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
