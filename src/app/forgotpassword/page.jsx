"use client";

import React, { useState, useContext, useEffect } from "react";
import { Context } from "../Context/Index";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
function ForgotPasswordPage() {
  const { handelSendForgotPasswordEmail, handelSendChangePassword } =
    useContext(Context);
  const [loading, setLoading] = useState(false);
  const [isForSendEmail, setIsForSendEmail] = useState(true);
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const [formData, setFromData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSendEmail(e) {
    e.preventDefault();
    setLoading(true);
    await handelSendForgotPasswordEmail(formData.email);
    setLoading(false);
  }

  async function handleResetEmail(e) {
    e.preventDefault();
    setLoading(true);
    await handelSendChangePassword(
      formData.password,
      formData?.confirmPassword,
      token
    );
    setLoading(false);
  }

  useEffect(() => {
    token && setIsForSendEmail(false);
  });

  return (
    <section className="flex items-center justify-center w-full h-screen select-none ">
      <div className="p-[4rem] max-sm:p-[2rem]  w-[30rem] max-sm:mx-[2rem] max-sm:w-full rounded-[1rem] bg-black">
        <h2 className="mb-[1rem] text-white text-[1.6rem] font-semibold">
          Forgot Password
        </h2>

        {isForSendEmail ? (
          <form
            onSubmit={(e) => handleSendEmail(e)}
            className="mt-[2rem]  flex flex-col gap-[1.2rem]"
          >
            <input
              name="email"
              onChange={(e) => handleInput(e)}
              value={formData.email}
              type="email"
              required
              className="mb-[2rem] px-[1rem] py-[.2rem] w-full rounded-[.4rem] border-[2px] font-normal text-[1.2rem] text-white border-white/20 placeholder:text-white/50 focus:border-white/50 bg-transparent "
              placeholder="Enter your email"
            />

            {loading ? (
              <div className="cursor-pointer mt-[1rem] flex justify-center items-center h-[2.4rem] w-[8rem] rounded-[.3rem] text-[1.2rem] font-bold  transition-colors duration-300 bg-white/80 text-black">
                <div
                  class="inline-block h-7 w-7 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
                  role="status"
                >
                  <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            ) : (
              <button
                type="submit"
                className="cursor-pointer mt-[1rem] flex justify-center items-center h-[2.4rem] w-[8rem] rounded-[.3rem] text-[1.2rem] font-bold  transition-colors duration-300 bg-white text-black"
              >
                Submit
              </button>
            )}
          </form>
        ) : (
          <form
            onSubmit={(e) => handleResetEmail(e)}
            className="mt-[2rem]  flex flex-col gap-[1.2rem]"
          >
            <input
              name="password"
              onChange={(e) => handleInput(e)}
              value={formData.password}
              type="text"
              required
              className=" px-[1rem] py-[.2rem] w-full rounded-[.4rem] border-[2px] font-normal text-[1.2rem] text-white border-white/20 placeholder:text-white/50 focus:border-white/50 bg-transparent "
              placeholder="Enter your email"
            />

            <input
              name="confirmPassword"
              onChange={(e) => handleInput(e)}
              value={formData.confirmPassword}
              type="password"
              required
              className="  px-[1rem] py-[.2rem] w-full rounded-[.4rem] border-[2px] font-normal text-[1.2rem] text-white border-white/20 placeholder:text-white/50 focus:border-white/50 bg-transparent "
              placeholder="Enter your email"
            />

            {loading ? (
              <div className="cursor-pointer mt-[1rem] flex justify-center items-center h-[2.4rem] w-[8rem] rounded-[.3rem] text-[1.2rem] font-bold  transition-colors duration-300 bg-white/80 text-black">
                <div
                  class="inline-block h-7 w-7 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
                  role="status"
                >
                  <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              </div>
            ) : (
              <button
                type="submit"
                className="cursor-pointer mt-[1rem] flex justify-center items-center h-[2.4rem] w-[8rem] rounded-[.3rem] text-[1.2rem] font-bold  transition-colors duration-300 bg-white text-black"
              >
                Change
              </button>
            )}
          </form>
        )}
      </div>
    </section>
  );
}

function Page() {
  return (
    <Suspense>
      <ForgotPasswordPage />
    </Suspense>
  );
}

export default Page;
