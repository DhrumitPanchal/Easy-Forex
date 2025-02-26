"use client";

import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AdminCourseCard from "@/app/components/Admin/AdminCourseCard";
import SideMenu from "@/app/components/Admin/SideMenu";
import { Context } from "@/app/Context/Index";
function Page() {
  const { courseData } = useContext(Context);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handelSearch = (e) => {
    setSearch(e.target.value);
    const lowerSearch = e.target.value.toLowerCase();
    console.log("search is : " + e.target.value);

    if (e.target.value === "") {
      setData(courseData);
    }
    const filteredData = courseData?.filter((item) =>
      item?.name.toLowerCase().includes(lowerSearch)
    );

    setData(filteredData);
  };

  useEffect(() => {
    setData(courseData);
  }, [courseData]);
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
              onChange={(e) => handelSearch(e)}
              value={search}
              placeholder="Search Course"
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
          {data?.map((item) => {
            return <AdminCourseCard key={item} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Page;
