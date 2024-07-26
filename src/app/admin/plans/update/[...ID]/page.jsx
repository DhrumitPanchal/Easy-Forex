"use client";
import React, { useState, useContext, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import SideMenu from "@/app/components/Admin/SideMenu";
import { Context } from "@/app/Context/Index";
function Page({ params }) {
  const { handelUpdatePlan, plansData, handelDeletePlan } = useContext(Context);
  const [formData, setFormData] = useState({
    months: undefined,
    price: undefined,
    benefits: [],
  });
  const [benefitData, setBenefitData] = useState("");
  const { ID } = params;
  const AddBenefits = () => {
    if (benefitData == "") {
      return;
    }
    setFormData({
      ...formData,
      benefits: [...formData?.benefits, benefitData],
    });
    setBenefitData("");
  };

  const RemoveBenefits = (item) => {
    const NewBenefit = formData?.benefits?.filter((e) => e !== item);
    setFormData({
      ...formData,
      benefits: NewBenefit,
    });
  };

  const handelInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    handelUpdatePlan(formData?._id, formData);
    setFormData({
      months: undefined,
      price: undefined,
      benefits: [],
    });
  };

  useEffect(() => {
    const plan = plansData?.filter((item) => item?._id === ID[0]);
    plan && setFormData(plan[0]);
  }, [ID, plansData]);
  return (
    <div className="relative flex w-full h-fit">
      <SideMenu />

      <div className="flex flex-col item-between gap-[2rem] py-[2rem] max-sm:pt-[.8rem] px-[4rem] max-sm:px-[1rem] absolute left-[15rem] h-screen max-sm:min-h-screen max-sm:max-h-fit max-sm:left-0 right-0 ">
        <div className="flex flex-col gap-[2rem] h-full">
          <h2 className="text-[1.4rem] max-sm:text-end max-sm: font-semibold">
            Add New Plan
          </h2>

          <form
            onSubmit={(e) => handelSubmit(e)}
            className="flex flex-col h-full gap-[1rem] "
          >
            <input
              type="number"
              name="months"
              placeholder="months"
              required
              onChange={(e) => handelInput(e)}
              value={formData?.months}
              className="px-[1.4rem] py-[.2rem] rounded-[.4rem] text-[1.2rem] w-full border-[2px] focus:border-black border-black/30 placeholder:text-black/50"
            />

            <input
              type="number"
              name="price"
              placeholder="price"
              required
              onChange={(e) => handelInput(e)}
              value={formData?.price}
              className="px-[1.4rem] py-[.2rem] rounded-[.4rem] text-[1.2rem] w-full border-[2px] focus:border-black border-black/30 placeholder:text-black/50"
            />

            <div className="border-t-[.1rem] pt-[1rem] border-black/30 flex flex-col gap-[1rem] w-full">
              <h2 className="text-[1.1rem] font-semibold">Benefits</h2>

              <div className="flex gap-[2rem] w-full">
                <input
                  type="text"
                  onChange={(e) => setBenefitData(e?.target?.value)}
                  value={benefitData}
                  placeholder="Benefits"
                  className=" px-[1.4rem] py-[.2rem] rounded-[.4rem] text-[1.2rem] w-[30rem] max-sm:w-full border-[2px] focus:border-black border-black/30 placeholder:text-black/50"
                />
                <button
                  type="button"
                  onClick={() => AddBenefits()}
                  className="cursor-pointer flex items-center px-[2rem] h-[2.6rem] w-fit rounded-[.4rem] text-[1.1rem] font-semibold text-white bg-black"
                >
                  Add
                </button>
              </div>

              <div className="w-[30rem] max-sm:w-full flex flex-col gap-[.4rem]">
                {formData?.benefits?.map((item) => {
                  return (
                    <div
                      className="px-[1rem] py-[.3rem] rounded-[.2rem] flex items-center justify-between gap-[2rem] w-full bg-slate-200"
                      key={item}
                    >
                      <h2 key={item}>{item} </h2>
                      <FaTimes
                        onClick={() => RemoveBenefits(item)}
                        className="cursor-pointer  text-[1.2rem]"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto pb-[2rem] border-t-[.1rem] pt-[1rem] border-black/30 flex justify-between w-full ">
              <button
                type="submit"
                className="cursor-pointer flex items-center px-[2rem] h-[2.6rem] w-fit rounded-[.4rem] text-[1.1rem] font-semibold text-white bg-green-600"
              >
                Update
              </button>

              <button
                type="button"
                onClick={() => handelDeletePlan(formData?._id)}
                className="cursor-pointer flex items-center px-[2rem] h-[2.6rem] w-fit rounded-[.4rem] text-[1.1rem] font-semibold text-white bg-orange-600"
              >
                Delete
              </button>

              <Link href="/admin/plans">
                <button className="cursor-pointer flex items-center px-[2rem] h-[2.6rem] w-fit rounded-[.4rem] text-[1.1rem] font-semibold text-white bg-red-500">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
