"use client";

import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

// import { useNavigate, pathname } from "next/navigation";
// import Cookies from "js-cookie";

export const Context = createContext(null);

export default function MyContext(props) {
  const router = useRouter();
  const [courseData, setCourseData] = useState(null);

  const BaseURL = "http://localhost:3000/api";

  // get all products ---------------------------------------------
  const getAllCourses = async () => {
    try {
      const { data } = await axios.get(BaseURL + "/courses");
      setCourseData(data);
    } catch ({ response }) {
      toast.error(response?.data?.message);
    }
  };

  //  Add Course -------------------------------------------------
  const handelAddCourse = async (courseData, membership, benefits) => {
    console.table(courseData);
    console.table(membership);
    console.table(benefits);
    try {
      const { data } = await axios.post(BaseURL + "/courses", {
        courseData,
        membership,
        benefits,
      });
      toast.success(data?.message);
      router.push("/admin/courses");
      getAllCourses();
    } catch ({ response }) {
      toast.error(response?.data?.message);
    }
  };

  // Update Product --------------------------------------------------

  const handelUpdateCourse = async (productId, Data) => {
    try {
      const { data } = await axios.put(BaseURL + "/courses", {
        ID: productId,
        data: { ...Data },
      });
      toast.success(data?.message);
      router.push("/admin/courses");
      getAllCourses();
    } catch ({ response }) {
      toast.error(response?.data?.message);
    }
  };

  // Delete Product --------------------------------------------------

  const handelDeleteCourse = async (courseID) => {
    try {
      const { data } = await axios.delete(BaseURL + "/courses", {
        data: { ID: courseID },
      });

      toast.success(data.message);

      setCourseData((prevCourseData) =>
        prevCourseData.filter((course) => course._id !== courseID)
      );
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <Context.Provider
      value={{
        courseData,
        handelAddCourse,
        handelUpdateCourse,
        handelDeleteCourse,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
