import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { Context } from "../../Context/Index.jsx";
function AdminCourseCard({ data }) {
  const {
    _id,
    isMembership,
    name,
    description,
    desc_price,
    price,
    image,
    membership,
    benefits,
  } = data;
  const { courseData, handelDeleteCourse } = useContext(Context);
  const [pack, setPack] = useState(1);

  useEffect(() => {}, [courseData]);

  return (
    <div className=" w-full border-b-[.2rem] border-black cursor-pointer h-fit">
      <div className="flex max-sm:flex-col gap-[2rem] max-sm:gap-[1rem]">
        <Image
          src={image}
          height={300}
          width={300}
          alt=""
          className="max-sm:w-[32rem]"
        />
        <div className="flex flex-col gap-[.4rem] w-full">
          <h2 className="text-[1.2rem] font-semibold">{name}</h2>
          <p>{description}</p>
          <div className="flex overflow-x-auto gap-[1rem]">
            {isMembership ? (
              membership?.map((item) => {
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
                );
              })
            ) : (
              <div className="text-[1.2rem] flex justify-center items-center h-[2.6rem] gap-[1rem]">
                {desc_price && (
                  <h2 className="font-semibold line-through text-black/60">
                    <span className="pr-[.1rem] ">$</span>
                    {desc_price}
                  </h2>
                )}
                <h2 className="font-semibold text-green-600">
                  <span className="pr-[.1rem]">$</span>
                  {price}
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-[.8rem] py-[.8rem] flex items-center justify-end max-sm:justify-center gap-[2rem] border-t-[.1rem] border-black/30">
        <Link
          href={`courses/update/${_id}`}
          className="cursor-pointer h-[2.4rem] w-[8rem] max-sm:w-1/2 max-sm:h-[2.8rem] flex  justify-center items-center gap-[.6rem] rounded-[.4rem] text-[1rem]  tracking-[1px] font-normal bg-green-500 hover:bg-green-600 text-white"
        >
          Update
        </Link>
        <button
          onClick={() => handelDeleteCourse(_id)}
          className="cursor-pointer h-[2.4rem] w-[8rem] max-sm:h-[2.8rem] max-sm:w-1/2 flex  justify-center items-center gap-[.6rem] rounded-[.4rem] text-[1rem]  tracking-[1px] font-normal bg-red-500 hover:bg-red-600 text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default AdminCourseCard;
