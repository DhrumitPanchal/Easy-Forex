"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";

function Page() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const BaseURL = process.env.NEXT_PUBLIC_BACK_END_URL;
  const handelInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(BaseURL + "/contactus", formData);
      toast.success(response.data.message);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    } catch ({ response }) {
      console.log(response);
      toast.error(response?.data?.message);
      setLoading(false);
    }
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
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-[1rem] px-[2rem] max-sm:px-0"
        >
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
            {loading ? (
              <div
                className={` flex justify-center items-center gap-[1rem] w-[12rem] h-[3.2rem] capitalize text-[1.1rem] rounded-[1rem] font-medium  bg-black/70 transition-colors duration-200 text-[#fdf9ff] `}
              >
                <div
                  class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
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
                className={` flex justify-center items-center gap-[1rem] w-[12rem] h-[3.2rem] capitalize text-[1.1rem] rounded-[1rem] font-medium  bg-black text-[#fdf9ff] `}
              >
                <FaPaperPlane className="text-[1.5rem]" />
                Send Message
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Page;
