"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import SideMenu from "@/app/components/Admin/SideMenu";
import { FaPlus } from "react-icons/fa";
import { Context } from "@/app/Context/Index";
import { CldUploadWidget } from "next-cloudinary";

function Page() {
  const { handelAddCourse } = useContext(Context);
  const [formData, setFromData] = useState({
    name: "",
    description: "",
    price: undefined,
    desc_price: undefined,
    image: "",
  });

  const [packData, setPackData] = useState({
    months: undefined,
    price: undefined,
    desc_price: undefined,
  });
  const [benefitData, setBenefitData] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [membershipMenu, setMembershipMenu] = useState(false);
  const [membership, setMembership] = useState([]);
  const [benefits, setBenefits] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    handelAddCourse(formData, membership, benefits);
  };

  const AddBenefits = () => {
    setBenefits([...benefits, benefitData]);
    setBenefitData("");
  };

  const handelAddPack = (e) => {
    e.preventDefault();

    setMembership([...membership, packData]);
    setPackData({
      months: undefined,
      price: undefined,
      desc_price: undefined,
    });
    setMembershipMenu(false);
  };
  const handelInput = (e, isPack) => {
    isPack
      ? setPackData({ ...packData, [e.target.name]: e.target.value })
      : setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("image url : " + imageURL);
  }, [imageURL]);

  return (
    <>
      {membershipMenu && (
        <div className=" flex justify-center items-center fixed top-0 bottom-0 left-[15rem] right-0 z-20  h-screen bg-slate-400/10 backdrop-blur-[2px]">
          <form
            onSubmit={(e) => handelAddPack(e)}
            className="flex flex-col gap-[1rem] p-[2rem] rounded-[.4rem] h-fit w-[30rem] shadow-md bg-white"
          >
            <h2 className="text-[1.2rem] font-semibold">Membership</h2>
            <input
              type="number"
              name="months"
              placeholder="months"
              required
              onChange={(e) => handelInput(e, true)}
              value={packData?.name}
              className="pl-[1rem] pr-[.4rem] py-[.2rem] rounded-[.4rem] text-[1.2rem] w-full border-[2px] focus:border-black border-black/30 placeholder:text-black/50"
            />
            <input
              type="number"
              name="price"
              placeholder="price"
              required
              onChange={(e) => handelInput(e, true)}
              value={packData?.price}
              className="pl-[1rem] pr-[.4rem] py-[.2rem] rounded-[.4rem] text-[1.2rem] w-full border-[2px] focus:border-black border-black/30 placeholder:text-black/50"
            />

            <input
              type="number"
              name="desc_price"
              placeholder="discount rate"
              onChange={(e) => handelInput(e, true)}
              value={packData?.desc_price}
              className="pl-[1rem] pr-[.4rem] py-[.2rem] rounded-[.4rem] text-[1.2rem] w-full border-[2px] focus:border-black border-black/30 placeholder:text-black/50"
            />

            <div className="mt-[1.6rem] flex justify-between w-full ">
              <button
                type="submit"
                className="cursor-pointer flex items-center px-[2rem] h-[2.6rem] w-fit rounded-[.4rem] text-[1.1rem] font-semibold text-white bg-green-600"
              >
                Add
              </button>

              <button onClick={() => setMembershipMenu(!membershipMenu)}>
                <button className="cursor-pointer flex items-center px-[2rem] h-[2.6rem] w-fit rounded-[.4rem] text-[1.1rem] font-semibold text-white bg-red-500">
                  Cancel
                </button>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* -------------------------------------------------------------------------- */}
      <div className="relative flex w-full h-fit">
        <SideMenu />

        <div className="absolute left-[15rem] max-sm:left-0 right-0 ">
          <section className="px-[8rem] max-sm:px-[1rem] pt-[2rem] max-sm:pt-[.8rem] pb-[2rem] h-fit flex flex-col gap-[1.2rem]">
            <h2 className="max-sm:text-end ml-[.2rem] text-[1.4rem] underline font-bold">
              Add New Course
            </h2>

            <form
              onSubmit={(e) => handelSubmit(e)}
              className="mt-[1rem] flex flex-col gap-[1rem] "
            >
              <input
                type="text"
                name="name"
                placeholder="Course Name"
                required
                onChange={(e) => handelInput(e)}
                value={formData.name}
                className="px-[1.4rem] py-[.2rem] rounded-[.4rem] text-[1.2rem] w-full border-[2px] focus:border-black border-black/30 placeholder:text-black/50"
              />

              <textarea
                type="text"
                rows={3}
                name="description"
                required
                onChange={(e) => handelInput(e)}
                value={formData.description}
                placeholder="Course Description"
                className="px-[1.4rem] py-[.2rem] rounded-[.4rem] text-[1.2rem] w-full border-[2px] focus:border-black border-black/30 placeholder:text-black/50"
              />
              {/* 
              <div className="flex max-sm:flex-col gap-[1rem]">
                <input
                  type="number"
                  min={1}
                  required
                  onChange={(e) => handelInput(e)}
                  value={formData.price}
                  name="price"
                  placeholder="Course Price"
                  className="w-1/2 px-[1.4rem] py-[.2rem] rounded-[.4rem] text-[1.2rem] max-sm:w-full border-[2px] focus:border-black border-black/30 placeholder:text-black/50"
                />
                <input
                  type="number"
                  onChange={(e) => handelInput(e)}
                  value={formData.desc_price}
                  name="desc_price"
                  placeholder="Product Discount Rate"
                  className="w-1/2 px-[1.4rem] py-[.2rem] rounded-[.4rem] text-[1.2rem] max-sm:w-full border-[2px] focus:border-black border-black/30 placeholder:text-black/50"
                />
              </div> */}

              {/* <input
                type="url"
                min={1}
                name="image"
                required
                onChange={(e) => handelInput(e)}
                value={formData.image}
                placeholder="Course Image Url"
                className=" px-[1.4rem] py-[.2rem] rounded-[.4rem] text-[1.2rem] max-sm:w-full border-[2px] focus:border-black border-black/30 placeholder:text-black/50"
              /> */}

              <CldUploadWidget
                signatureEndpoint="/api/cloudinary"
                onSuccess={(result, { widget }) => {
                  setFromData({ ...formData, image: result?.info?.secure_url });
                  widget.close();
                }}
              >
                {({ open }) => {
                  return (
                    <div
                      className="cursor-pointer flex justify-center items-center h-[3rem] w-[20rem] rounded-[.4rem] bg-black text-white"
                      onClick={() => open()}
                    >
                      Upload an Image
                    </div>
                  );
                }}
              </CldUploadWidget>

              <div className="border-t-[.1rem] pt-[1rem] border-black/30 flex flex-col gap-[1rem] ">
                <div className="text-[1.1rem] font-semibold">Membership</div>

                <div className="flex  gap-[1rem]">
                  <div
                    onClick={() => setMembershipMenu(!membershipMenu)}
                    className="cursor-pointer flex rounded-[.4rem] justify-center items-center h-[5.1rem] w-[8rem] bg-slate-100"
                  >
                    <FaPlus className="text-[2rem] text-black/50" />
                  </div>

                  {membership &&
                    membership?.map((item) => {
                      return (
                        <div
                          onClick={() => setPack(item?.months)}
                          key={item}
                          className={`cursor-pointer overflow-hidden flex flex-col h-fit min-w-[8rem] w-fit rounded-[.4rem] border-[.12rem] border-black`}
                        >
                          <div
                            className={`flex items-center justify-center h-[2.4rem] bg-black text-white w-full`}
                          >
                            <h2>
                              <span>{item?.months}</span> Months
                            </h2>
                          </div>
                          <div className="px-[1.6rem] flex justify-center items-center h-[2.6rem] gap-[.6rem] ">
                            {item?.desc_price && (
                              <h2 className="font-semibold line-through text-black/60">
                                <span className="pr-[.2rem] ">$</span>
                                {item?.desc_price}
                              </h2>
                            )}
                            <h2 className="font-semibold text-green-600">
                              <span className="pr-[.2rem]">$</span>
                              {item?.price}
                            </h2>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

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

                <div>
                  {benefits?.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </div>
              </div>

              <div className="border-t-[.1rem] pt-[1rem] border-black/30 mt-[2rem] flex justify-between w-full ">
                <button
                  type="submit"
                  className="cursor-pointer flex items-center px-[2rem] h-[2.6rem] w-fit rounded-[.4rem] text-[1.1rem] font-semibold text-white bg-green-600"
                >
                  Add
                </button>

                <Link href="/admin/courses">
                  <button className="cursor-pointer flex items-center px-[2rem] h-[2.6rem] w-fit rounded-[.4rem] text-[1.1rem] font-semibold text-white bg-red-500">
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Page;
