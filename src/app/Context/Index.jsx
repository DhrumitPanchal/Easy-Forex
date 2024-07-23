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
  const [plansData, setPlansData] = useState(null);

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

  // get all Plans ---------------------------------------------
  const getAllPlans = async () => {
    try {
      const { data } = await axios.get(BaseURL + "/plans");
      setPlansData(data);
      console.table(data);
    } catch ({ response }) {
      toast.error(response?.data?.message);
    }
  };

  //  Add Plan -------------------------------------------------
  const handelAddPlan = async (formData) => {
    try {
      const { data } = await axios.post(BaseURL + "/plans", formData);
      toast.success(data?.message);
      router.push("/admin/plans");
      getAllPlans();
    } catch ({ response }) {
      toast.error(response?.data?.message);
    }
  };

  // Update Product --------------------------------------------------

  const handelUpdatePlan = async (Id, Data) => {
    try {
      const { data } = await axios.put(BaseURL + "/plans", {
        ID: Id,
        planData: { ...Data },
      });
      toast.success(data?.message);
      router.push("/admin/plans");
      getAllPlans();
    } catch ({ response }) {
      toast.error(response?.data?.message);
    }
  };

  const handelDeletePlan = async (planID) => {
    try {
      const { data } = await axios.delete(BaseURL + "/plans", {
        data: { ID: planID },
      });

      toast.success(data.message);

      setPlansData((prevPlansData) =>
        prevPlansData.filter((plan) => plan._id !== planID)
      );
      router.push("/admin/plans");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllCourses();
    getAllPlans();
  }, []);

  return (
    <Context.Provider
      value={{
        courseData,
        plansData,
        handelAddCourse,
        handelUpdateCourse,
        handelDeleteCourse,
        handelAddPlan,
        handelUpdatePlan,
        handelDeletePlan,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
