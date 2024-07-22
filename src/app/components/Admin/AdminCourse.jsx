import React from "react";
import Link from "next/link";
import { FaPlus, FaMagnifyingGlass } from "react-icons/fa";
function AdminCourse() {
  return (
    <div>
      <div className="px-[2rem] max-sm:px-[1rem] py-[1rem]  flex justify-between flex-row-reverse max-sm:flex-col max-sm:gap-[1rem]">
        <div className="self-end cursor-pointer h-[2.4rem] w-[11rem] flex  justify-center items-center gap-[.6rem] rounded-[.4rem] text-[1.1rem]  tracking-[1px] font-normal bg-black text-white">
          <FaPlus className="text-[1.2rem] text-white " />
          <Link href="add">
            <h2>Add Product</h2>
          </Link>
        </div>
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

      <div className="px-[1.6rem] pt-[1.4rem] pb-[2rem] flex flex-col gap-[1.2rem]">
        {/* {productData?.map((data, index) => (
        <ProductCard key={index} ProductData={data} />
       ))} */}
      </div>
    </div>
  );
}

export default AdminCourse;
