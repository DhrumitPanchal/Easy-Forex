"use client";

import React, { useState, useContext } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import CourseCard from "@/app/components/CourseCard";
import { Context } from "@/app/Context/Index";
function Page() {
  const { courseData } = useContext(Context);

  const [search, setSearch] = useState("");

  const handelSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <>
      <section className="w-full min-h-screen max-h-fit pt-[6rem] px-[2rem] max-sm:px-[1rem] py-[1rem] flex flex-col gap-[2rem]">
        <div className="flex gap-[2rem] max-sm:gap-[1.6rem] w-full h-fit">
          <input
            onChange={(e) => handelSearch(e)}
            value={search}
            placeholder="Search Course"
            type="text"
            className="px-[.8rem] h-[2.4rem] w-[25rem] max-sm:w-[22rem] border-[1.4px] text-[1rem]  border-black/70 focus:border-black  placeholder:text-black/70 placeholder:font-normal"
          />
          <div
            onClick={() => handelSearchProducts()}
            className="cursor-pointer h-[2.4rem] w-[8rem] flex justify-center items-center gap-[.6rem]  text-[1rem]  tracking-[1px] font-normal bg-black text-white"
          >
            <FaMagnifyingGlass className="text-[.9rem] text-white " /> Search
          </div>
        </div>

        {/* ----------------- Courses ------------------ */}
        <div className="flex flex-wrap  gap-[3rem] max-sm:gap-[2rem] w-full h-full mb-[6rem]">
          {/* {filterIsActive
            ? filtProducts?.map((e) => <CourseCard key={e._id} data={e} />)
            : productData?.map((e) => <CourseCard key={e._id} data={e} />)} */}
          {courseData?.map((item) => (
            <CourseCard key={item?._id} data={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Page;
