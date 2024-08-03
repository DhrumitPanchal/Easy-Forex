"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "@/app/Context/Index";
import Cookies from "js-cookie";
function Page({ params }) {
  const { status } = params;
  const { cart, setCart } = useContext(Context);

  useEffect(() => {
    setCart([]);
    Cookies.remove("cart-products");
    Cookies.remove("checkout-data");
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div
        className="h-[20rem] w-[26rem] flex flex-col gap-[2rem] rounded-[.8rem] items-center justify-end border-[.2rem]
          border-[#30ba7b]/50 bg-[#30ba7b]/10"
      >
        <Image
          src={"/Images/checked.png"}
          height={70}
          width={80}
          alt="success"
          className=""
        />

        <div className="flex flex-col items-center ">
          <h2 className="text-[1.4rem] font-semibold text-[#30ba7b]">
            Payment Successful
          </h2>

          <p className="text-green-600">Check your email to access courses</p>
        </div>

        <div className="mb-[1.4rem] text-[.8rem]">
          <Link
            href={"/"}
            className="font-medium underline underline-offset-4 landing-[2rem]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
