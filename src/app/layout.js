import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyContext from "./Context/Index";
export const metadata = {
  title: "ProForexTrading",
  description:
    "ProForexTrading offers expert trading education, making it easy to learn and master forex trading with minimal investment. Get the best trading knowledge and strategies to succeed.",
  keywords:
    "ProForexTrading, Pro Forex Trading, PROFOREXTRADING, PRO FOREX TRADING, proforextrading, pro forex trading, ProForex, Forex Trading, forex trading, forex trading education, forex trading knowledge, forex trading strategies, online forex trading, easy forex trading, affordable forex trading, learn forex trading, beginner forex trading, expert forex trading, forex market, forex trading platform, forex trading course, forex trading guide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="layout, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
        <link rel="icon" sizes="any" href="/Images/favicon.png" />
        <link rel="apple-touch-icon" sizes="any" href="/Images/favicon.png" />
        <link rel="manifest" href="./manifest.json" />
      </head>
      <body>
        <MyContext>
          <Navbar />
          <ToastContainer />
          {children}
          <Footer />
        </MyContext>
      </body>
    </html>
  );
}
