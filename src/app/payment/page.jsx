"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
function Page() {
  const searchParams = useSearchParams();

  const [status, setStatus] = useState("");

  useEffect(() => {
    const search = searchParams.get("status");
    search === "success" && setStatus("success");
    search === "failed" && setStatus("failed");
  }, [searchParams]);
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div
        className={`h-[20rem] w-[26rem] flex flex-col gap-[2rem] rounded-[.8rem] items-center justify-end border-[.2rem] ${
          status === "success"
            ? "border-[#30ba7b]/50 bg-[#30ba7b]/10"
            : "border-[#e11b1c]/50 bg-[#e11b1c]/10"
        }`}
      >
        {status === "success" ? (
          <Image
            src={"/Images/checked.png"}
            height={70}
            width={80}
            alt="success"
            className=""
          />
        ) : (
          <Image
            src={"/Images/multiply.png"}
            height={70}
            width={80}
            alt="failed"
          />
        )}

        <div className="flex flex-col items-center ">
          <h2
            className={`text-[1.4rem] font-semibold  ${
              status === "success" ? "text-[#30ba7b]" : "text-[#e11b1c]"
            }`}
          >
            {status === "success" ? " Payment Successful" : "Payment Failed"}
          </h2>
          {status === "success" ? (
            <p className="text-green-600">Check your email to access courses</p>
          ) : (
            <p className="text-red-600">Payment failed for some reason</p>
          )}
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
