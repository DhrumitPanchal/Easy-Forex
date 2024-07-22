import React from "react";
import { country_list } from "../components/coursesData";
import Link from "next/link";
import Image from "next/image";
function page() {
  return (
    <div className="flex justify-center items-center w-full pt-[7rem] pb-[3rem] px-[8rem] h-screen">
      <div className="flex gap-[6rem] w-full h-full ">
        <div className="overflow-hidden flex flex-col gap-[2rem] w-1/2 h-full border-[2px] rounded-[.6rem]  border-black">
          <div className="pl-[2rem] h-[3.8rem] flex items-center w-full text-white bg-black">
            <h2 className=" text-[1.2rem] tracking-[.2px] font-medium">
              Billing Details
            </h2>
          </div>

          <form action="" className="px-[2rem] flex flex-col gap-[1.4rem]">
            <div className="flex gap-[3rem] w-full">
              <div className="flex gap-[.2rem] flex-col w-1/2">
                <label className="text-[.9rem] text-black/70" htmlFor="name">
                  First name
                </label>
                <input
                  className="px-[.6rem] h-[2.6rem] border-[1px] font-light text-black/80 border-black/30"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>

              <div className="flex gap-[.2rem] flex-col w-1/2">
                <label className="text-[.9rem] text-black/70" htmlFor="name">
                  Last name
                </label>
                <input
                  className="px-[.6rem] h-[2.6rem] border-[1px] font-light text-black/80 border-black/30"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-[1rem] w-full">
              <div className="flex gap-[.2rem] flex-col w-full">
                <label className="text-[.9rem] text-black/70" htmlFor="name">
                  Country/Region
                </label>
                <select
                  className="px-[.6rem] h-[2.6rem] border-[1px] font-light text-black/80 border-black/30"
                  type="text"
                  id="name"
                  list="country"
                  required
                >
                  {country_list.map((item) => {
                    return (
                      <option key={item?.name} value={item?.name}>
                        {item?.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="flex gap-[.2rem] flex-col w-full">
                <label className="text-[.9rem] text-black/70" htmlFor="name">
                  Town /Ci
                </label>
                <input
                  className="px-[.6rem] h-[2.6rem] border-[1px] font-light text-black/80 border-black/30"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-[1rem] w-full">
              <div className="flex gap-[.2rem] flex-col w-full">
                <label className="text-[.9rem] text-black/70" htmlFor="name">
                  Phone
                </label>

                <input
                  className="px-[.6rem] h-[2.6rem] border-[1px] font-light text-black/80 border-black/30"
                  type="tel"
                  name="name"
                  id="name"
                  required
                />
              </div>

              <div className="flex gap-[.2rem] flex-col w-full">
                <label className="text-[.9rem] text-black/70" htmlFor="name">
                  Email
                </label>
                <input
                  className="px-[.6rem] h-[2.6rem] border-[1px] font-light text-black/80 border-black/30"
                  type="email"
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-[1rem] pt-[1.2rem] px-[2rem] w-1/2 h-full border-[1px] border-black/30">
          <h2 className=" text-[1.2rem] tracking-[.2px] font-semibold">
            Your Order
          </h2>

          <div className="flex flex-col gap-[.6rem]">
            <h2 className="pl-[.6rem] font-semibold">Product</h2>

            <div className="h-[.1px] w-full bg-black/30" />

            <div className="pt-[1rem] flex flex-col gap-[.8rem]">
              <div className="mt-[.4rem] text-[1.1rem] flex justify-between">
                <div className="pl-[.6rem] flex gap-[.6rem]">
                  <h2>12 Months Membershi</h2>
                  <span>x</span>
                  <h2>6</h2>
                </div>

                <div className="flex gap-[.2rem]">
                  <span>$</span> <h2>300</h2>
                </div>
              </div>

              <div className="mt-[.4rem] text-[1.1rem] flex justify-between">
                <div className="pl-[.6rem] flex gap-[.6rem]">
                  <h2>12 Months Membershi</h2>
                  <span>x</span>
                  <h2>6</h2>
                </div>

                <div className="flex gap-[.2rem]">
                  <span>$</span> <h2>300</h2>
                </div>
              </div>

              <div className="pl-[.6rem] mt-[1rem] text-[1rem] flex justify-between font-semibold">
                <h2>Subtotal</h2>

                <div className="flex gap-[.2rem]">
                  <span>$</span> <h2>300</h2>
                </div>
              </div>
            </div>

            <div className="h-[.1px] w-full bg-black/30" />

            <div className="pl-[.6rem] py-[1rem] text-[1.2rem] flex justify-between items-center font-semibold">
              <h2>Total</h2>

              <div className="flex text-[1.4rem] gap-[.2rem]">
                <span>$</span> <h2>300</h2>
              </div>
            </div>

            <div className="h-[.1px] w-full bg-black/30" />

            <div className="flex flex-col gap-[1.4rem] py-[1.2rem] px-[.6rem]">
              <div className="flex items-center gap-[1rem]">
                <input
                  className="h-[1.1rem] w-[1.1rem] "
                  type="checkbox"
                  name=""
                  id=""
                />
                <h2>
                  I have read and agree to the website{" "}
                  <Link
                    className="text-red-500 underline"
                    href={"/termsandconditions"}
                  >
                    terms and conditions.{" "}
                  </Link>
                </h2>
              </div>

              <button className="flex justify-center items-center h-[3rem] w-[50%] rounded-[.4rem] bg-[#ffd138] hover:bg-[#f2ba36] transition-colors duration-150">
                <Image
                  src={"/Images/paypal.png"}
                  height={20}
                  width={80}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
