import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className=" left-0 w-full px-[14rem] pt-[1rem] bg-[#f7f7f7] ">
        <div className="w-full  max-sm:px-[2.6rem] py-[3rem] flex max-sm:flex-col gap-[4rem] max-sm:gap-[2rem]">
          <div className="flex flex-col justify-between w-3/6 max-sm:w-full">
            <h2 className="text-[1.4rem] font-semibold">Easy forex</h2>
            <p className="mt-[.6rem] text-[1rem] font-light tracking-[.1rem]">
              Easy Forex Pips is an educational site and a platform for
              exchanging Forex information. All information contained on this
              web site is a personal opinion or belief of the author. None of
              these data is a recommendation or financial advice in any sense.
            </p>
          </div>

          <div className="w-1/6 max-sm:w-full">
            <h2 className="text-[1.2rem] font-semibold uppercase">
              Quick Links
            </h2>
            <div className="flex flex-col mt-[.6rem] text-[1rem] tracking-[.1rem] font-light">
              <Link href="/">Home</Link>
              <Link href="/">Products</Link>
              <Link href="/">Terms and Conditions</Link>
              <Link href="/products">Privacy Policy</Link>
              <Link href="cart">Contact US</Link>
            </div>
          </div>

          <div className="flex flex-col w-1/6 gap-[1rem]">
            <h2>FOLLOW US</h2>

            <div className="flex gap-[1rem]">
              <Link
                href={"/"}
                className="h-[2.2rem] w-[2.2rem] flex justify-center items-center text-white text-[1.2rem] rounded-[.4rem] bg-black hover:bg-secondaryColor transition-colors duration-300"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"/"}
                className="h-[2.2rem] w-[2.2rem] flex justify-center items-center text-white text-[1.2rem] rounded-[.4rem] bg-black  hover:bg-secondaryColor transition-colors duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={"/"}
                className="h-[2.2rem] w-[2.2rem] flex justify-center items-center text-white text-[1.2rem] rounded-[.4rem] bg-black  hover:bg-secondaryColor transition-colors duration-300"
              >
                <FaTelegram />
              </Link>

              <Link
                href={"/"}
                className="h-[2.2rem] w-[2.2rem] flex justify-center items-center text-white text-[1.2rem] rounded-[.4rem] bg-black  hover:bg-secondaryColor transition-colors duration-300"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>

        <div className=" w-full  py-[1.4rem] border-t-[1px] border-black/20">
          <h2 className="text-center text-[.9rem]">
            Caution: Trading involves the possibility of financial loss. Only
            trade with money that you are prepared to lose, you must recognize
            that for factors outside your control you may lose all of the money
            in your trading account. Many forex brokers also hold you liable for
            losses that exceed your trading capital. So you may stand to lose
            more money than is in your account. Easy Forex Ltd. takes not
            responsibility for loss incurred as a result of our trading signals.
            By signing up as a member you acknowledge that we are not providing
            financial advice and that you are making a the decision to copy our
            trades on your own account. We have no knowledge on the level of
            money you are trading with or the level of risk you are taking with
            each trade. You must make your own financial decisions, we take no
            responsibility for money made or lost as a result of our signals or
            advice on forex related products on this website. Terms And
            Conditions C) Copyright Easy Forex Ltd. 2023. All Rights Reserved.
          </h2>
        </div>
      </footer>
    </>
  );
}

export default Footer;
