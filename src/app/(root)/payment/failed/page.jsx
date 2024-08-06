"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "@/app/Context/Index";
import Cookies from "js-cookie";
function Page({ params }) {
  const { status } = params;

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="h-[20rem] w-[26rem] flex flex-col gap-[2rem] rounded-[.8rem] items-center justify-end border-[.2rem]  border-[#e11b1c]/50 bg-[#e11b1c]/10">
        <Image
          src={"/Images/multiply.png"}
          height={70}
          width={80}
          alt="failed"
        />

        <div className="flex flex-col items-center ">
          <h2 className="text-[1.4rem] font-semibold  text-[#e11b1c]">
            Payment Failed
          </h2>
        
            <p className="text-red-600">Payment failed for some reason</p>
          
        </div>

        <dir className="mb-[1.4rem] text-[.8rem]">
          <Link
            href={"/"}
            className="font-medium underline underline-offset-4 landing-[2rem]"
          >
            Back to Home
          </Link>
        </dir>
      </div>
    </div>
  );
}

export default Page;
