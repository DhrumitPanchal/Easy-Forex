import React, { useContext } from "react";
import Image from "next/image";
import { Context } from "@/app/Context/Index";
import { formatDistanceToNow } from "date-fns";

function PaymentCard({ data }) {
  const { payer_Info, items, subTotal, paymentDate, status, paymentId } = data;
  const { courseData } = useContext(Context);

  const findImageUrl = (productID) => {
    const course = courseData.filter((e) => e._id === productID);
    console.log(course);
    return course[0]?.image;
  };
  return (
    <div className="mx-[1.6rem] max-sm:mx-[1rem] mt-[1rem] px-[1rem] pt-[1rem] pb-[.4rem] border-[.15rem] rounded-[.4rem] border-black  flex flex-col">
      <div className="flex justify-between w-full max-sm:flex-col max-sm:gap-[1rem]">
        <div className="flex flex-col gap-[1rem] w-3/4 max-sm:w-full">
          {items?.map((e) => {
            const url = findImageUrl(e?.productId);
            return (
              <div key={e?.productId} className="flex gap-[2rem]">
                <Image
                  src={url}
                  height={150}
                  width={150}
                  alt={e?.name}
                  className="max-sm:h-fit"
                />
                <div>
                  <h2 className="font-semibold">{e?.name}</h2>
                  <h2 className="font-normal text-[.9rem]">
                    <span className="font-semibold">Prise </span> : ${e?.price}
                  </h2>
                  <h2 className="font-normal text-[.9rem]">
                    <span className="font-semibold">Quantity </span> :{" "}
                    {e?.quantity}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-[.4rem] max-sm:gap-0 max-sm:text-[.9rem] w-2/5 max-sm:w-full text-[1.1rem] font-semibold">
          <h2>Name : {payer_Info?.first_name + " " + payer_Info?.last_name}</h2>
          <h2>Country : {payer_Info?.country}</h2>
          <h2>Town/City : {payer_Info?.town_Ci}</h2>
          <h2>Email: {payer_Info?.email}</h2>
          <h2>phone no : {payer_Info?.phone}</h2>
        </div>
      </div>

      <div className="mt-[1rem] pt-[.4rem] justify-between flex max-sm:flex-col max-sm:gap-[.2rem] gap-[2rem] border-t-[.15rem] text-[1.1rem] font-semibold border-black/50">
        <div className="flex gap-[2rem] ">
          <h2 className="w-[9.75rem]">Total : </h2>
          <h2>${subTotal}</h2>
        </div>

        <h2 className="mr-[1rem]">
          {formatDistanceToNow(new Date(paymentDate))} ago
        </h2>
      </div>
    </div>
  );
}

export default PaymentCard;
