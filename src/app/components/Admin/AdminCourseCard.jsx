import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { Context } from "../Context/Index.js";
function AdminCourseCard({ data }) {
  const { name, description, price, desc_price, image, _id } = data;
  const { courseData, handelDeleteCourse } = useContext(Context);
  const [pack, setPack] = useState(1);
  const packsData = [
    {
      months: 1,
      price: 100,
      discPrice: 300,
    },
    {
      months: 3,
      price: 200,
    },
    {
      months: 6,
      price: 300,
      discPrice: 400,
    },
    {
      months: 12,
      price: 500,
      discPrice: 700,
    },
  ];

  useEffect(() => {}, [courseData]);

  return (
    <div className=" w-full border-b-[.2rem] border-black cursor-pointer h-fit">
      <div className="flex gap-[2rem]">
        <Image src={image} height={300} width={300} alt="" />
        <div className="flex flex-col gap-[.4rem] w-full">
          <h2 className="text-[1.2rem] font-semibold">{name}</h2>
          <p>{description}</p>
          <div className="flex gap-[1rem]">
            {packsData?.map((item) => {
              return (
                <div
                  onClick={() => setPack(item?.months)}
                  key={item}
                  className={` cursor-pointer overflow-hidden flex flex-col min-w-[8rem] w-fit rounded-[.4rem] border-[.12rem] border-black`}
                >
                  <div
                    className={`flex items-center justify-center h-[2.4rem]  bg-black text-white w-full`}
                  >
                    <h2>
                      <span>{item?.months}</span> Months
                    </h2>
                  </div>
                  <div className="px-[1.6rem] flex justify-center items-center h-[2.6rem] gap-[.6rem]">
                    {item?.discPrice && (
                      <h2 className="font-semibold line-through text-black/60">
                        <span className="pr-[.2rem] ">$</span>
                        {item?.desc_price}
                      </h2>
                    )}
                    <h2 className="font-semibold text-green-600">
                      <span className="pr-[.2rem]">$</span>
                      {item?.price}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-[.8rem] py-[.8rem] flex items-center justify-end gap-[2rem] border-t-[.1rem] border-black/30">
        <Link
          href={`courses/update/${_id}`}
          className="cursor-pointer h-[2.4rem] w-[8rem] flex  justify-center items-center gap-[.6rem] rounded-[.4rem] text-[1rem]  tracking-[1px] font-normal bg-green-500 hover:bg-green-600 text-white"
        >
          Update
        </Link>
        <button
          onClick={() => handelDeleteCourse(_id)}
          className="cursor-pointer h-[2.4rem] w-[8rem] flex  justify-center items-center gap-[.6rem] rounded-[.4rem] text-[1rem]  tracking-[1px] font-normal bg-red-500 hover:bg-red-600 text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default AdminCourseCard;
