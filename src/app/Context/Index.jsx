"use client";

import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";

export const Context = createContext(null);

export default function MyContext(props) {
  const router = useRouter();
  const [courseData, setCourseData] = useState(null);
  const [plansData, setPlansData] = useState(null);
  const [cart, setCart] = useState([]);
  const [payments, setPayments] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState({});
  const BaseURL = process.env.NEXT_PUBLIC_BACK_END_URL;
  const pathname = usePathname();
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
  const handelAddCourse = async (courseData) => {
    try {
      const { data } = await axios.post(BaseURL + "/courses", { courseData });
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
      toast.error(error?.response?.data?.message);
    }
  };

  // get all Plans ---------------------------------------------
  const getAllPlans = async () => {
    try {
      const { data } = await axios.get(BaseURL + "/plans");
      setPlansData(data);
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
      toast.error(error?.response?.data?.message);
    }
  };

  //  add to cart -----------------------------------------------------------------

  const handelAddToCart = (data) => {
    setCart((prevCart) => [...prevCart, data]);
    console.log("check for name : " + data?.name);
    Cookies.set("cart-products", JSON.stringify([...cart, data]));
    toast.success("Added in cart");
  };

  //  get cart data -----------------------------------------------------------------

  const handelGetCartData = () => {
    const data = Cookies.get("cart-products");
    if (data) {
      setCart(JSON.parse(data));
    }
  };

  //  update cart data -----------------------------------------------------------------

  const handelUpdateCartData = (ID, quantity) => {
    const newData = cart.map((item) => {
      if (item.productId === ID) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(newData);
    Cookies.set("cart-products", JSON.stringify(newData));
  };

  // remove from cart --------------------------------------------------------------------
  const handelRemoveFromCart = (ID) => {
    const newData = cart.filter((item) => item.productId !== ID);
    setCart(newData);
    Cookies.set("cart-products", JSON.stringify(newData));
    toast.success("Removed from cart");
  };

  // handelPayment --------------------------------------------------------------------

  const handelPayment = async (payer_Info, items, subTotal) => {
    try {
      const { data } = await axios.post(BaseURL + "/payment", {
        payer_Info,
        items,
        subTotal,
      });
      if (data?.approvalUrl) {
        window.location.href = data.approvalUrl; // Redirect to PayPal for payment
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  // handel get all payments

  const handelGetAllPayments = async () => {
    try {
      const { data } = await axios.get(BaseURL + "/payment");
      setPayments(data.reverse());
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handelAdminLogin = async (email, password) => {
    try {
      const { data } = await axios.post(BaseURL + "/auth/admin", {
        email,
        password,
      });
      console.log("checking data ");
      var inThreeMinutes = new Date(new Date().getTime() + 30 * 60 * 1000);
      console.log("time  :  " + inThreeMinutes);
      Cookies.set("access-token", data?.access_Token, {
        expires: inThreeMinutes,
      });
      toast.success(data?.message);
      router.push("/admin/courses");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handelAdminAccess = () => {
    if (pathname.match(/^\/admin/)) {
      const token = Cookies.get("access-token");
      if (token) {
        if (pathname === "/admin") {
          router.push("/admin/courses");
        }
      } else {
        router.push("/admin");
      }
    }
  };

  const handelSendForgotPasswordEmail = async (email) => {
    try {
      await axios.post(BaseURL + "/auth/forgotpassword", { email });
      toast.success("Reset password link sent to your email");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      alert(error?.response?.data?.message);
    }
  };

  const handelSendChangePassword = async (password, confirmPassword, token) => {
    try {
      await axios.put(BaseURL + "/auth/forgotpassword", {
        newPassword: password,
        confirmPassword,
        token,
      });
      toast.success("password changed");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    handelAdminAccess();
    getAllCourses();
    getAllPlans();
    handelGetCartData();
    handelGetAllPayments();

    const checkoutData = Cookies.get("checkout-data");
    checkoutData && setCheckoutItems(JSON.parse(checkoutData));
  }, []);

  useEffect(() => {
    handelAdminAccess();
  }, [pathname]);

  return (
    <Context.Provider
      value={{
        cart,
        setCart,
        courseData,
        plansData,
        checkoutItems,
        payments,
        handelSendForgotPasswordEmail,
        handelSendChangePassword,
        setCheckoutItems,
        handelAddCourse,
        handelUpdateCourse,
        handelDeleteCourse,
        handelAddPlan,
        handelUpdatePlan,
        handelDeletePlan,
        handelAddToCart,
        handelRemoveFromCart,
        handelUpdateCartData,
        handelPayment,
        handelAdminLogin,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
