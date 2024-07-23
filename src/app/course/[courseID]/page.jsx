"use client";
import { Context } from "@/app/Context/Index";
import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
function Page({ params }) {
  const [data, setData] = useState({});
  const { courseData } = useContext(Context);
  const [pack, setPack] = useState(1);
  const { courseID } = params;
  console.log("courseID : " + courseID);

  useEffect(() => {
    const course = courseData?.filter((item) => item?._id === courseID);
    course && setData(course[0]);
    console.log(course);
  }, [courseID, courseData]);

  return (
    <div className="mb-[4rem] w-full min-h-screen max-h-fit pt-[6rem] px-[8rem] max-sm:px-[2rem]">
      <div className="flex justify-between max-sm:flex-col gap-[4rem] max-sm:gap-[2rem] w-full ">
        <Image
          className="w-[80%] max-sm:w-full transition-all duration-150 h-fit "
          alt=""
          height={0}
          width={300}
          src={data?.image}
        />

        <div className="flex flex-col gap-[1rem] w-full">
          <div>
            <h2 className="text-[1.8rem] font-sans font-bold">{data?.name}</h2>
            <p>{data?.description}</p>
          </div>

          <div className="flex flex-col gap-[.4rem]">
            <h2 className="text-[1.2rem] font-medium ">Benefits</h2>
            <ul className="flex flex-col gap-[.2rem] font-semibold text-black/80">
              {data?.benefits?.map((item) => {
                return <li key={item}>✅ {item}</li>;
              })}
            </ul>
          </div>

          <div className=" w-full h-[.1px] bg-black/30" />

          <div className="flex overflow-x-auto pb-[1rem] max-sm:pb-[1rem] gap-[.8rem]">
            {data?.membership?.map((item, index) => {
              return (
                <div
                  onClick={() => setPack(item?.months)}
                  key={item}
                  className={`p-[.2rem] rounded-[.6rem] border-[.35rem] ${
                    item?.months === pack
                      ? "border-black"
                      : "border-transparent"
                  } `}
                >
                  <div
                    className={`${
                      item.months !== pack && "opacity-[.5]"
                    } cursor-pointer overflow-hidden flex flex-col min-w-[8rem] w-fit rounded-[.4rem] border-[.12rem] border-black`}
                  >
                    <div
                      className={`flex items-center justify-center h-[2.4rem] ${
                        data?.membership?.length === index + 1
                          ? "bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500"
                          : "bg-black"
                      }  text-white w-full`}
                    >
                      <h2>
                        <span>{item?.months}</span> Months
                      </h2>
                    </div>
                    <div className="px-[1.6rem] flex justify-center items-center h-[2.6rem] gap-[.6rem]">
                      {item?.desc_price && (
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
                </div>
              );
            })}
          </div>

          <div className=" w-full h-[.1px] bg-black/30" />

          <button className="h-[3rem] w-[10rem] rounded-[.4rem] bg-black text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
