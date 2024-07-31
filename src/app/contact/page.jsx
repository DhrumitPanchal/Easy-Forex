"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handelInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //
  };
  return (
    <section
      className={` relative overflow-hidden max-sm:h-fit h-screen w-full flex justify-center gap-[6rem] flex-col py-[2rem] px-[6rem] max-sm:px-[2rem]`}
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        className="flex justify-center flex-col items-center gap-[.1rem]"
      >
        <h2 className={`text-[2.2rem]  font-bold capitalize underline`}>
          Contact Us
        </h2>

        {/* <h4 className="text-[1.3rem] font-semibold">
          I’M VERY RESPONSIVE TO MESSAGES
        </h4> */}
      </div>

      <div>
        <form className="flex flex-col gap-[1rem] px-[2rem] max-sm:px-0">
          <div className="flex max-sm:flex-col w-full gap-[1.5rem] max-sm:gap-[1rem]">
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              onChange={(e) => handelInput(e)}
              value={formData?.name}
              className={`h-[3.2rem] w-full px-[1rem] rounded-[.5rem] border-[1px]  border-black/50 focus:border-black`}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => handelInput(e)}
              value={formData?.email}
              className={`h-[3.2rem] w-full px-[1rem] rounded-[.5rem] border-[1px] border-black/50 focus:border-black`}
            />
          </div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            onChange={(e) => handelInput(e)}
            value={formData?.subject}
            className={`h-[3.2rem] w-full px-[1rem] rounded-[.5rem] border-[1px]  border-black/50 focus:border-black`}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            required
            onChange={(e) => handelInput(e)}
            value={formData?.message}
            className={`h-[9rem] w-full p-[1rem] rounded-[1rem] border-[1px]  border-black/50 focus:border-black`}
          />
          <div className="mt-[2rem] flex items-center justify-center h-fit">
            <button
              type="submit"
              className={` flex justify-center items-center gap-[1rem] w-[12rem] h-[3.2rem] capitalize text-[1.1rem] rounded-[1rem] font-medium  bg-black text-[#fdf9ff] `}
            >
              <FaPaperPlane className="text-[1.5rem]" />
              Send Message
            </button>
            {/* <div>
              <span className={`relative  msg `}>{msg}</span>
            </div> */}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Page;
