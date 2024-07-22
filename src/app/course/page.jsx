"use client";

import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "next/navigation";
import CourseCard from "../components/CourseCard";
import coursesData from "../components/coursesData";
function Page() {
  const [filterIsActive, setFilterIsActive] = useState(false);
  const [filtProducts, setFiltProducts] = useState([]);
  const [search, setSearch] = useState("");

  const handelSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handelSearchProducts = () => {
    if (search) {
      setFilterIsActive(true);
    }
    const lowerserch = search.toLowerCase();
    const result = productData.filter((product) => {
      if (product.product_name.toLowerCase().includes(lowerserch))
        return priceRange;
    });

    setFiltProducts(result);
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
          {coursesData?.map((item) => (
            <CourseCard key={item} data={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Page;
