"use client";
import React, { useState, useContext, useEffect } from "react";
import CartPageCard from "@/app/components/CartPageCard.jsx";
import { Context } from "@/app/Context/Index";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
function Page() {
  const { cart, setCheckoutItems } = useContext(Context);

  const [total, setTotal] = useState(0);
  const router = useRouter();
  useEffect(() => {}, [cart]);

  useEffect(() => {
    let allProTotal = 0;
    cart?.length > 0 &&
      cart?.map((item) => {
        let productTotal = item?.price * item?.quantity;
        allProTotal = allProTotal + productTotal;
      });
    setTotal(allProTotal);
  }, [cart]);
  return (
    <>
      <section className="px-[4rem] max-sm:px-[1rem] py-[2rem] pt-[6rem]  min-h-screen max-h-fit flex flex-col gap-[1.6rem]">
        {cart?.length > 0 && (
          <div className="max-sm:hidden pb-[1rem] flex border-b-[.5px]  border-black/50">
            <h2 className="w-[44rem] mr-[3rem] font-medium ">Item</h2>
            <h2 className="w-[6rem] mr-[3rem] font-medium ">Item Price</h2>
            <h2 className="w-[7rem] mr-[3rem] font-medium ">Quantity</h2>
            <h2 className="font-medium">Total Price</h2>
          </div>
        )}
        {cart?.length > 0 ? (
          cart.map((data, index) => (
            <CartPageCard key={index} ProductData={data} />
          ))
        ) : (
          <h2 className="text-center w-full text-[3rem] text-black/20">
            You not have any products
          </h2>
        )}

        {cart?.length > 0 && (
          <div className="mt-[1rem]  flex-col cursor-pointer text-black  p-[1.8rem] flex gap-[1.4rem] rounded-[.2rem]  w-[26rem] border-[.1rem] border-black">
            <h2 className="text-[1.3rem] font-bold ">CART TOTALS</h2>

            <div className="flex flex-col gap-[2rem]">
              <div className="flex flex-col gap-[1rem]">
                <div className="flex justify-between ">
                  <div className="font-semibold">Sub Total :</div>
                  <div className="font-medium ">$ {total}</div>
                </div>
                {/* <div className="flex justify-between ">
                  <div className="font-semibold">Gst :</div>
                  <div className="font-medium ">$ 13</div>
                </div> */}
              </div>

              <div className="pt-[1rem] flex justify-between items-center border-t-[.1rem] border-black">
                <div className="font-semibold ">Total :</div>
                <div className="font-medium text-[1.4rem]">$ {total}</div>
              </div>
            </div>
            <button
              onClick={() => {
                router.push("/checkout");
                setCheckoutItems({ items: cart, SubTotal: total });
                Cookies.set(
                  "checkout-data",
                  JSON.stringify({ items: cart, SubTotal: total })
                );
              }}
              className="mt-[.4rem] flex justify-center items-center gap-[2rem] h-[3.4rem] text-[.8rem] text-white bg-black"
            >
              <h2 className="font-semibold tracking-[.1rem]">
                {" "}
                PROCEED TO CHECKOUT
              </h2>{" "}
              <FaArrowRight className="text-[1.2rem]" />
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Page;
