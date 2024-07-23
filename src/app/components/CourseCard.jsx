import React from "react";
import Image from "next/image";
import Link from "next/link";
function CourseCard({ data }) {
  return (
    <Link
      href={`course/${data?._id}`}
      className="cursor-pointer flex flex-col gap-[.6rem] w-[21rem] max-sm:w-full h-fit "
    >
      <div className="w-full overflow-hidden group ">
        <Image
          className="w-full transition-all duration-150 group-hover:scale-105"
          alt=""
          height={200}
          width={300}
          src={data?.image}
        />
      </div>

      <div>
        <h4 className="text-[.7rem] max-sm:text-[.9rem ] text-black/60">
          FOREX MEMBERSHIP
        </h4>
        <h2 className="text-[1rem] max-sm:text-[1.4rem] capitalize font-medium">
          {data?.name}
        </h2>
        <div className="flex gap-[.8rem] text-[.9rem] max-sm:text-[1.2rem]">
          {data?.desc_price && (
            <h2 className="font-medium line-through">
              <span>$</span>
              {data?.desc_price}
            </h2>
          )}
          {data?.price && (
            <h2 className="font-semibold text-green-600">
              <span>$</span>
              {data?.price}
            </h2>
          )}
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
