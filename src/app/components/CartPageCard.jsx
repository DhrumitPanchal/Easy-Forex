import React, { useState, useContext, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Context } from "../Context/Index";
function CartPageCard({ ProductData }) {
  const { productId, name, description, price, quantity, image } = ProductData;
  const [productQuantity, setProductQuantity] = useState(null);

  console.log("check product data : " + ProductData);
  const navigator = useRouter();
  const { handelRemoveFromCart, handelUpdateCartData } = useContext(Context);

  useEffect(() => {
    setProductQuantity(quantity);
  }, []);

  return (
    <>
      <div className="h-fit max-sm:h-fit flex max-sm:flex-col gap-[3rem] max-sm:gap-[1rem] pb-[1.5rem] max-sm:pb-[2rem] border-b-[.5px]  border-black/50">
        <div className="flex max-sm:flex-col gap-[1rem] h-full w-fit max-sm:w-full ">
          <div
            onClick={() => navigator.push(`/course/${productId}`)}
            className="cursor-pointer select-none h-fit w-[19rem] max-sm:w-fit "
          >
            <Image
              src={image}
              alt=""
              height={2}
              width={300}
              className="h-fit  max-sm:w-[32rem]"
            />
          </div>

          <div className="flex flex-col gap-[.2rem] w-[24rem]  max-sm:w-full">
            <h2
              onClick={() => navigator.push(`/course/${productId}`)}
              className="cursor-pointer text-[1.1rem] font-normal w-[24rem] max-sm:w-full  truncate ..."
            >
              {name}
            </h2>
            <h2 className="text-[.9rem] font-normal w-[24rem] max-sm:w-full  ">
              {description}
            </h2>

            <div className="hidden mt-[.4rem] max-sm:flex gap-[1rem] w-[6rem]">
              <h2 className="font-normal">${price}.00</h2>
            </div>
          </div>
        </div>

        <div className="max-sm:hidden flex gap-[1rem] w-[6rem]">
          <h2 className="font-normal">${price}.00</h2>
        </div>

        <div className="max-sm:mt-[.6rem] w-[7rem] flex gap-[1rem]">
          <div
            onClick={() => {
              handelUpdateCartData(productId, productQuantity + 1);
              setProductQuantity(productQuantity + 1);
            }}
            className="cursor-pointer h-[1.6rem] w-[1.6rem] text-[1.3rem] rounded-[.2rem] flex justify-center transition-colors duration-300 items-center bg-black/80 hover:bg-black text-white"
          >
            <FaPlus className="text-[.6rem]" />
          </div>
          <h2 className=" select-none text-[1.4rem] leading-[1.6rem]  text-black">
            {productQuantity}
          </h2>
          <div
            onClick={() => {
              if (productQuantity > 1) {
                handelUpdateCartData(productId, productQuantity - 1);
                setProductQuantity(productQuantity - 1);
              }
            }}
            className="cursor-pointer h-[1.6rem] w-[1.6rem] text-[1.3rem] rounded-[.2rem] flex justify-center transition-colors duration-300 items-center bg-black/80 hover:bg-black text-white"
          >
            <FaMinus className="text-[.6rem]" />
          </div>
        </div>

        <div className=" max-sm:mt-[.6rem] w-[8rem] font-semibold ">
          <span>Total :</span> ${price * productQuantity}
          .00
        </div>

        <div
          onClick={() => handelRemoveFromCart(productId)}
          className="cursor-pointer flex items-center px-[2rem] h-[2.2rem] w-fit rounded-[.4rem] text-[1.1rem] font-semibold text-white bg-red-500/80 hover:bg-red-500  transition-all duration-300"
        >
          Remove
        </div>
      </div>
    </>
  );
}

export default CartPageCard;
