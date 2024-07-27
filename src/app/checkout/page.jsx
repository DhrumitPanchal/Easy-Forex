"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import country_list from "../components/country_list";
import Image from "next/image";
import { Context } from "../Context/Index";

function Page({ items, total }) {
  const { handelPayment, checkoutItems } = useContext(Context);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    country: "",
    town_Ci: "",
    phone: undefined,
    email: "",
  });

  const handelInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    handelPayment(formData, checkoutItems?.items, checkoutItems?.SubTotal);
  };
  useEffect(() => {}, [checkoutItems]);
  return (
    <div className="flex  justify-center items-center w-full pt-[7rem] max-sm:pt-[6rem] pb-[3rem] px-[8rem] max-sm:px-[2rem] h-screen max-sm:h-fit">
      <form
        onSubmit={(e) => handelSubmit(e)}
        className="flex max-sm:flex-col gap-[6rem] max-sm:gap-[2rem]  w-full h-full "
      >
        <div className="overflow-hidden flex flex-col gap-[2rem] w-1/2 max-sm:pb-[2rem] max-sm:w-full h-full border-[2px] rounded-[.6rem]  border-black">
          <div className="pl-[2rem] h-[3.8rem] flex items-center w-full text-white bg-black">
            <h2 className=" text-[1.2rem] tracking-[.2px] font-medium">
              Billing Details
            </h2>
          </div>

          <div className="px-[2rem] max-sm:px-[1rem] flex flex-col gap-[1.4rem]">
            <div className="flex max-sm:flex-col gap-[3rem] max-sm:gap-[1.4rem] w-full">
              <div className="flex gap-[.2rem] flex-col w-1/2 max-sm:w-full">
                <label className="text-[.9rem] text-black/70" htmlFor="name">
                  First name
                </label>
                <input
                  className="px-[.6rem] h-[2.6rem] border-[1px] font-light text-black/80 border-black/30"
                  type="text"
                  name="first_name"
                  id="name"
                  onChange={(e) => handelInput(e)}
                  value={formData?.first_name}
                  required
                />
              </div>

              <div className="flex gap-[.2rem] flex-col w-1/2 max-sm:w-full">
                <label className="text-[.9rem] text-black/70" htmlFor="name">
                  Last name
                </label>
                <input
                  className="px-[.6rem] h-[2.6rem] border-[1px] font-light text-black/80 border-black/30"
                  type="text"
                  name="last_name"
                  id="name"
                  onChange={(e) => handelInput(e)}
                  value={formData?.last_name}
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
                  name="country"
                  onChange={(e) => handelInput(e)}
                  value={formData?.country}
                  required
                >
                  <option value="">Select Country/Region</option>
                  {country_list.map((item, index) => {
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
                  Town/Ci
                </label>
                <input
                  className="px-[.6rem] h-[2.6rem] border-[1px] font-light text-black/80 border-black/30"
                  type="text"
                  name="town_Ci"
                  id="name"
                  onChange={(e) => handelInput(e)}
                  value={formData?.town_Ci}
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
                  name="phone"
                  id="name"
                  onChange={(e) => handelInput(e)}
                  value={formData?.phone}
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
                  name="email"
                  id="name"
                  onChange={(e) => handelInput(e)}
                  value={formData?.email}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[1rem] pt-[1.2rem] px-[2rem] max-sm:px-[1rem] w-1/2 max-sm:w-full h-full border-[1px] border-black/30">
          <h2 className=" text-[1.2rem] tracking-[.2px] font-semibold">
            Your Order
          </h2>

          <div className="flex flex-col gap-[.6rem]">
            <h2 className="pl-[.6rem] font-semibold">Product</h2>

            <div className="h-[.1px] w-full bg-black/30" />

            <div className="pt-[1rem] flex flex-col gap-[.8rem]">
              {checkoutItems?.items?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mt-[.4rem] text-[1.1rem] flex justify-between"
                  >
                    <div className="pl-[.6rem] flex gap-[.6rem]">
                      <h2>{item.name}</h2>
                      <span>x</span>
                      <h2>{item.quantity}</h2>
                    </div>

                    <div className="flex gap-[.2rem]">
                      <span>$</span> <h2>{item?.price * item?.quantity}</h2>
                    </div>
                  </div>
                );
              })}

              <div className="pl-[.6rem] mt-[1rem] text-[1rem] flex justify-between font-semibold">
                <h2>Subtotal</h2>

                <div className="flex gap-[.2rem]">
                  <span>$</span> <h2>{checkoutItems?.SubTotal}</h2>
                </div>
              </div>

              {/* <div className="pl-[.6rem] mt-[1rem] text-[1rem] flex justify-between font-semibold">
                <h2>GST</h2>

                <div className="flex gap-[.2rem]">
                  <span>$</span> <h2>{3.5}</h2>
                </div>
              </div> */}
            </div>

            <div className="h-[.1px] w-full bg-black/30" />

            <div className="pl-[.6rem] py-[1rem] text-[1.2rem] flex justify-between items-center font-semibold">
              <h2>Total</h2>

              <div className="flex text-[1.4rem] gap-[.2rem]">
                <span>$</span> <h2>{checkoutItems?.SubTotal}</h2>
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
                  required
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

              <button className="flex justify-center items-center h-[3rem] w-[50%] max-sm:w-full rounded-[.4rem] bg-[#ffd138] hover:bg-[#f2ba36] transition-colors duration-150">
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
      </form>
    </div>
  );
}

export default Page;
