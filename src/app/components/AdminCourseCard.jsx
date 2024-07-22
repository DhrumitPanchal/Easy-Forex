import Image from "next/image";
import React from "react";
import Link from "next/link";
function AdminCourseCard({ data }) {
  const { name, desc, image, packs } = data;
  return (
    <div className=" w-full border-b-[.2rem] border-black cursor-pointer h-fit">
      <div className="flex gap-[2rem]">
        <Image src={image} height={300} width={300} alt="" />
        <div className="flex flex-col gap-[.4rem] w-full">
          <h2 className="text-[1.2rem] font-semibold">{name}</h2>
          <p>{desc}</p>
          <div className="flex gap-[1rem]">
            {packs?.map((item) => {
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
                        {item?.discPrice}
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
          href={"courses/update/21356565465"}
          className="cursor-pointer h-[2.4rem] w-[8rem] flex  justify-center items-center gap-[.6rem] rounded-[.4rem] text-[1rem]  tracking-[1px] font-normal bg-green-500 hover:bg-green-600 text-white"
        >
          Update
        </Link>
        <button className="cursor-pointer h-[2.4rem] w-[8rem] flex  justify-center items-center gap-[.6rem] rounded-[.4rem] text-[1rem]  tracking-[1px] font-normal bg-red-500 hover:bg-red-600 text-white">
          Remove
        </button>
      </div>
    </div>
  );
}

export default AdminCourseCard;
