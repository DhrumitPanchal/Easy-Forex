import React, { useContext } from "react";
import Image from "next/image";
import { Context } from "@/app/Context/Index";
import { formatDistanceToNow } from "date-fns";

function PaymentCard({ data }) {
  const { payer_Info, items, subTotal, paymentDate } = data;
  const { courseData } = useContext(Context);

  const findImageUrl = (productID) => {
    const course = courseData.filter((e) => e._id === productID);
    console.log(course);
    return course[0]?.image;
  };
  return (
    <div className="mx-[1.6rem] mt-[1rem] px-[1rem] pt-[1rem] pb-[.4rem] border-[.15rem] rounded-[.4rem] border-black  flex flex-col">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-[1rem] w-3/4">
          {items?.map((e) => {
            const url = findImageUrl(e?.productId);
            return (
              <div key={e?.productId} className="flex gap-[2rem]">
                <Image src={url} height={150} width={150} alt={e?.name} />
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

        <div className="flex flex-col gap-[.4rem] w-2/5 text-[1.1rem] font-semibold">
          <h2>Name : {payer_Info?.name + " " + payer_Info?.first_name}</h2>
          <h2>Country : {payer_Info?.country}</h2>
          <h2>Town/City : {payer_Info?.town_Ci}</h2>
          <h2>Email: {payer_Info?.email}</h2>
        </div>
      </div>

      <div className="mt-[1rem] pt-[.4rem] justify-between flex gap-[2rem] border-t-[.15rem] text-[1.1rem] font-semibold border-black/50">
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
