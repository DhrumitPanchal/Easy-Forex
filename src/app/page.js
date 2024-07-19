/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export default function Home() {
  const tableHading = [
    "Currency Pair",
    "Buy Sell",
    "Closed at:",
    "Hit TP/SL",
    "Profit Loss",
  ];
  const tableData = [
    {
      currency: "CHF/JPY ",
      buy_sell: "SELL",
      closed_at: 116.62,
      hit_tp_sl: "TP-3",
      profit_loss: 100,
    },
    {
      currency: "EUR/CAD",
      buy_sell: "SELL",
      closed_at: 116.62,
      hit_tp_sl: "TP-3",
      profit_loss: 100,
    },
    {
      currency: "EUR/USD",
      buy_sell: "SELL",
      closed_at: 116.62,
      hit_tp_sl: "TP-3",
      profit_loss: 100,
    },
    {
      currency: "NZD/CHF",
      buy_sell: "SELL",
      closed_at: 116.62,
      hit_tp_sl: "TP-3",
      profit_loss: 100,
    },
  ];

  const Plans = [
    {
      months: 1,
      price: 45,
      benefits: [
        "Trade with Pro Trader",
        "Daily market signals",
        "Short term strategies",
        "Long term strategies",
        "1-3 Targets strategy",
        "Management tools",
        "Live Chat Support",
      ],
    },

    {
      months: 3,
      price: 75,
      benefits: [
        "Trade with Pro Trader",
        "Daily market signals",
        "Short term strategies",
        "Long term strategies",
        "1-3 Targets strategy",
        "Management tools",
        "Live Chat Support",
      ],
    },

    {
      months: 12,
      price: 100,
      benefits: [
        "Trade with Pro Trader",
        "Daily market signals",
        "Short term strategies",
        "Long term strategies",
        "1-3 Targets strategy",
        "Management tools",
        "Live Chat Support",
      ],
    },
  ];

  const Testimonials = [
    {
      name: "Josh Taylor",
      rating: 5,
      review:
        "I never realized how easy it was to trade - but with these education tools, I can stay in touch with the markets, even when I'm away.",
    },
    {
      name: "Mathew Joseph",
      rating: 4,
      review:
        "I really appreciate how supportive you have been in helping me figure out Forex trading. I had a lot of difficulties reading Forex and it felt like a second job.",
    },
    {
      name: "Albert Manjo",
      rating: 5,
      review:
        "Thank you so much. I honestly had a great experience with your mentors. I love the fact that the strategies are fast and simple.",
    },
    {
      name: "Mariya Sino",
      rating: 5,
      review:
        "More analysis than I actually want, but once I saw the success rate, I realized that it doesnt matter how many strategies there are!",
    },
  ];
  return (
    <>
      <section className="w-full h-[calc(100vh-4.6rem)] bg-cover bg-fixed bg-hero-image">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center w-1/2 text-white">
            <div>
              <h4 className="pl-[.2rem] text-[1.2rem] font-medium">
                Trading Education end Tools
              </h4>
              <h2 className="text-[4.6rem] font-semibold leading-[4.2rem]">
                Easy Forex Pips
              </h2>
              <div className="mt-[2rem] flex gap-[2rem]">
                <button className="h-[3.4rem] w-[9.6rem] rounded-[1.6rem] ">
                  Features
                </button>
                <button className="h-[3.4rem] w-[9.6rem] rounded-[1.6rem] border-[1px] border-red-400">
                  VIP Plans
                </button>
              </div>
            </div>
          </div>

          <div className="w-1/2 text-white "></div>
        </div>
        <div className="flex justify-center h-[4.6rem] flex-col pl-[8rem]  bg-[#242b32] text-white">
          <h3 className="text-[1.1rem] font-normal">
            Join our{" "}
            <span className="font-semibold">Free Telegram Channel</span>
          </h3>
          <h4 className="text-[.9rem]">95% Accurate Signals</h4>
        </div>
      </section>

      <section className="flex flex-col items-center w-full h-fit mt-[2rem]">
        <div className="pt-[8rem] pb-[4rem] px-[6rem] max-sm:px-[2rem] relative z-20 max-sm:py-[4rem]  flex max-sm:flex-col  gap-[2rem] ">
          <div className="w-full flex gap-[1rem] max-sm:rounded-[1rem] rounded-tl-[1.6rem] rounded-bl-[1.6rem] flex-col justify-center items-center py-[3rem] px-[2rem] max-sm:px-[2.5rem] max-sm:py-[2rem] text-textColor bg-white shadow-[0_4px_7px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_7px] hover:shadow-[#f4645a]/40 transition-all duration-300">
            <Image
              src={"/Images/trend.png"}
              width={80}
              height={80}
              alt="Permanent Recruitment"
            />
            <h1 className="mt-[.4rem] text-[1.6rem] font-bold capitalize text-textColor">
              Free Forex Training
            </h1>
            <p className="text-center text-secondaryColor ">
              Easy Forex Pips is a powerful Forex trading analysis tool that
              provides subscribers with trading analysis and education, all in
              Real- Time, assisting you in your trading plan to achieve great
              results in Forex trading.
            </p>
          </div>

          <div className="w-full flex gap-[1rem] max-sm:rounded-[1rem] flex-col justify-center items-center py-[3rem] px-[2rem] max-sm:px-[2.5rem] max-sm:py-[2rem] text-textColor bg-white shadow-[0_4px_7px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_7px] hover:shadow-[#242a31]/60  transition-all duration-300">
            <Image
              src={"/Images/bar-graph.png"}
              width={80}
              height={80}
              alt="International Recruitment"
            />

            <h1 className="mt-[.4rem] text-[1.6rem] font-bold capitalize text-textColor">
              Premium Forex Training
            </h1>
            <p className="text-center text-secondaryColor">
              An expert team of market analysts generate our trading forex
              strategies and unlike the automated trading bots used everywhere,
              they bring in the human touch to the process and provide you with
              the most best effective trading opportunities and education you
              can find on the web.
            </p>
          </div>

          <div className="w-full flex gap-[1rem] max-sm:rounded-[1rem] rounded-tr-[1.6rem] rounded-br-[1.6rem] flex-col justify-center items-center py-[3rem] px-[2rem] max-sm:px-[2.5rem] max-sm:py-[2rem] text-textColor bg-white shadow-[0_4px_7px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_7px] hover:shadow-[#f4645a]/40  transition-all duration-300">
            <Image
              src={"/Images/pie-chart.png"}
              width={86}
              height={86}
              alt="Compliance"
            />

            <h1 className="mt-[.4rem] text-[1.6rem] font-bold capitalize text-textColor">
              Our Tools give information
            </h1>
            <p className="text-center text-secondaryColor">
              When is the best time for you to trade? What is the best way for
              you to trade? Which one of the currency pair is good to choose?
              After we identify the best trading opportunity daily, you will
              receive our trading analysis and tools.
            </p>
          </div>
        </div>

        <div className="h-[.1rem] w-[80%] bg-black" />

        <section className="flex flex-col gap-[2rem] items-center py-[2rem] w-full">
          <div className="flex flex-col gap-[.6rem] items-center">
            <h2 className="text-[1.6rem] font-bold">JULY SPECIAL OFFER</h2>
            <div className="flex text-[.9rem] gap-[.6rem] text-slate-900 font-extralight">
              <span>13 Days</span>
              <span>10 Hours</span>
              <span>16 Minutes</span>
              <span>13 Seconds</span>
            </div>
          </div>

          <Image
            alt=""
            src={"/IMages/offer-banner.png"}
            height={9000}
            width={1100}
          />

          <button className="mt-[.8rem] h-[2.6rem] w-[16rem] rounded-[.4rem] tracking-[.2px] text-[.8rem] text-white bg-[#ff695d]">
            GET 12 MONTHS PROMO NOW!
          </button>
        </section>

        <div className="flex justify-center h-[11rem] w-full bg-[#fff3f2]">
          <div className="flex gap-[8rem]">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[1.6rem] font-semibold">240000+</h2>
              <h4>People In Free channel</h4>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[1.6rem] font-semibold">20,000+</h2>
              <h4>People In VIP Channel</h4>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[1.6rem] font-semibold">7+</h2>
              <h4>Years of History</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-[4rem]">
        <div className="flex flex-col items-center w-full ">
          <h2 className="text-center text-[1.6rem] font-bold">Key Features</h2>
          <div className="h-[.2rem] w-[1.6rem] bg-[#f4645a]"></div>
        </div>

        <div className="flex gap-[6rem] py-[2rem] w-full px-[8rem]">
          <Image
            alt=""
            className="w-[35rem]"
            src={"/Images/mokup.png"}
            height={400}
            width={500}
          />
          <div className=" flex flex-col justify-center gap-[2rem] w-full 1/2">
            <div className="flex gap-[1.6rem] w-full">
              <div className="flex justify-center items-center w-[3.6rem] h-[3.3rem] rounded-full border-[1px] border-[#f36358]">
                <Image
                  src={"/Images/trend.png"}
                  width={25}
                  height={25}
                  alt="Permanent Recruitment"
                />
              </div>
              <div className="flex w-fit flex-col gap-[.2rem]">
                <h2 className="text-[1.2rem] font-semibold">
                  Daily Forex Opportunities
                </h2>
                <p className="text-[.9rem]">
                  Once you start using our forex analysis and education your
                  ability to track your deals will be improved and you will be
                  sure that you will not miss opportunities, because you just
                  have not had the necessary time to analyze the market.
                </p>
              </div>
            </div>

            <div className="flex gap-[1.6rem] w-full">
              <div className="flex justify-center items-center w-[3.6rem] h-[3.3rem] rounded-full border-[1px] border-[#f36358]">
                <Image
                  src={"/Images/trend.png"}
                  width={25}
                  height={25}
                  alt="Permanent Recruitment"
                />
              </div>
              <div className="flex flex-col w-fit gap-[.2rem]">
                <h2 className="text-[1.2rem] font-semibold">
                  Professional Forex Traders
                </h2>
                <p className="text-[.9rem]">
                  Once you start using our forex analysis and education your
                  ability to track your deals will be improved and you will be
                  sure that you will not miss opportunities, because you just
                  have not had the necessary time to analyze the market.
                </p>
              </div>
            </div>

            <div className="flex gap-[1.6rem] w-full">
              <div className="flex justify-center items-center w-[3.6rem] h-[3.3rem] rounded-full border-[1px] border-[#f36358]">
                <Image
                  src={"/Images/pie-chart.png"}
                  width={30}
                  height={30}
                  alt="Permanent Recruitment"
                />
              </div>
              <div className="flex w-fit flex-col gap-[.2rem]">
                <h2 className="text-[1.2rem] font-semibold">
                  All Types of Tools
                </h2>
                <p className="text-[.9rem]">
                  Once you start using our forex analysis and education your
                  ability to track your deals will be improved and you will be
                  sure that you will not miss opportunities, because you just
                  have not had the necessary time to analyze the market.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[.1px] w-[80%] bg-black" />

        <section className="py-[2rem] w-full">
          <h1 className="text-center text-[1.6rem] font-bold">
            Turn yourself into a WINNER with our PREMIUM program
          </h1>

          <div className="flex px-[8rem] gap-[6rem] mt-[1rem] w-full">
            <div className="w-1/2">
              <Image
                src={"/Images/graph-2.png"}
                width={550}
                height={550}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-[1.6rem] pt-[1.4rem]  w-1/2">
              <h2 className="text-[1.3rem] tracking-[.6px] font-semibold">
                We will show you the best trading opportunities!
              </h2>

              <div className="flex flex-col gap-[.6rem]">
                <div className="flex gap-[1rem] items-center">
                  <Image
                    src={"/Images/check.png"}
                    width={30}
                    height={30}
                    alt=""
                  />
                  <h2 className="text-[1.4rem] font-medium">
                    Clear entry and exit points
                  </h2>
                </div>

                <div className="flex gap-[1rem] items-center">
                  <Image
                    src={"/Images/check.png"}
                    width={30}
                    height={30}
                    alt=""
                  />
                  <h2 className="text-[1.4rem] font-medium">
                    Innovative FOREX trade ideas{" "}
                  </h2>
                </div>

                <div className="flex gap-[1rem] w- items-center">
                  <Image
                    src={"/Images/check.png"}
                    width={30}
                    height={30}
                    alt=""
                  />
                  <h2 className="text-[1.4rem] font-medium">
                    New strategies and daily analysis
                  </h2>
                </div>
              </div>

              <p className="text-[1.2rem]">
                Every day our experienced traders apply different manual trading
                strategies to the markets. Guided by technical indicators they
                analyze and make decisions, then turn them into education and
                tools to help your trading.
              </p>

              <button className="mt-[.8rem] h-[2.6rem] w-[16rem] rounded-[.4rem] tracking-[.2px] text-[.8rem] text-white bg-[#ff695d]">
                GET 12 MONTHS PROMO NOW!
              </button>
            </div>
          </div>
        </section>
        <div className="h-[.1px] w-[80%] bg-black" />

        <section className="flex flex-col gap-[2rem] items-center py-[2rem] w-full">
          <h1 className="text-center text-[1.6rem] font-bold">
            Latest Analysis{" "}
          </h1>

          <table className="w-[70%] border-[1px] border-black">
            <tr className=" bg-slate-200">
              {tableHading?.map((item, index) => {
                return (
                  <td
                    key={item}
                    className="px-[1rem] py-[.6rem]  text-[1.1rem] font-semibold  border-[1px] border-black/50"
                  >
                    {item}
                  </td>
                );
              })}
            </tr>
            {tableData?.map((item, index) => {
              return (
                <tr
                  key={item}
                  className={`${index % 2 !== 0 && "bg-slate-100"} text-[1rem]`}
                >
                  <td className="px-[1rem] py-[.8rem] border-[1px] text-black/80 font-semibold  border-black/50">
                    {item?.currency}
                  </td>
                  <td
                    className={`${
                      item?.buy_sell === "SELL"
                        ? "text-red-500"
                        : "text-green-500"
                    } px-[1rem] py-[.6rem] border-[1px] border-black/50`}
                  >
                    {item?.buy_sell}
                  </td>
                  <td className="px-[1rem] py-[.8rem] border-[1px] border-black/50">
                    {item?.closed_at}
                  </td>
                  <td className="px-[1rem] py-[.8rem] text-green-700 border-[1px] border-black/50">
                    {item?.hit_tp_sl}
                  </td>
                  <td className="px-[1rem] py-[.8rem] border-[1px] font-semibold border-black/50">
                    + {item?.profit_loss} pips
                  </td>
                </tr>
              );
            })}
          </table>
        </section>
        <div className="h-[.1px] w-[80%] bg-black" />
      </section>

      <section className="flex flex-col gap-[1.6rem]  items-center py-[4rem] bg-[#fff3f2]">
        <h2 className="text-center text-[1.6rem] font-bold">
          MyFxBook Performance
        </h2>
        <div className=" flex items-center gap-[1rem]">
          <Image src={"/Images/check.png"} width={25} height={25} alt="" />
          <h3 className="text-[1.1rem] font-semibold">
            3+ Years Verified Performance
          </h3>
        </div>

        <Image
          className="mt-[1rem]"
          src={"/Images/graph.png"}
          width={1100}
          height={1200}
          alt=""
        />
      </section>

      <section className="flex flex-col gap-[2rem] items-center py-[4rem]">
        <div className="flex flex-col items-center w-full ">
          <h2 className="text-center text-[1.6rem] font-bold">VIP PLANS</h2>
          <div className="h-[.2rem] w-[1.6rem] bg-[#f4645a]"></div>
        </div>
        <button className="mt-[.8rem] h-[2.6rem] w-[16rem] rounded-[.4rem] tracking-[.2px] text-[.8rem] text-white bg-[#ff695d]">
          View Full Results
        </button>
        <Image
          className="mt-[1rem]"
          src={"/Images/vip-plans.png"}
          width={800}
          height={500}
          alt=""
        />

        <div className="flex justify-center gap-[4rem] w-full ">
          {Plans?.map((item, index) => {
            return (
              <div
                key={item?.months}
                className="flex flex-col items-center w-[22rem] border-[1px] border-black/20"
              >
                <div
                  className={`h-[3rem] w-full  flex justify-center items-center font-light text-white  ${
                    Plans.length === index + 1
                      ? "bg-[#f4645a]"
                      : "bg-[#2e353e] "
                  }`}
                >
                  <p>
                    <span>{item?.months}</span> Month Membership
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center w-full h-[10rem] text-[#2e353e] bg-[#f7f7f7]">
                  <div className="flex flex-col gap-[.2rem] items-center">
                    <div className="flex gap-[.2rem]">
                      <h2 className="text-[1.2rem] font-semibold">$</h2>{" "}
                      <h2 className="text-[3rem]  leading-[2.6rem] font-semibold">
                        {item?.price}
                      </h2>
                    </div>
                    <p className="text-[.8rem]">VIP</p>
                  </div>
                </div>

                <div className="w-full ">
                  {item?.benefits?.map((benefit) => {
                    return (
                      <h2
                        key={benefit}
                        className="w-full text-center py-[.6rem] border-b-[1px] border-black/20"
                      >
                        {benefit}
                      </h2>
                    );
                  })}
                </div>

                <button className="my-[1.4rem] h-[2.6rem] w-[8rem] rounded-[.6rem]  border-[2px] border-black hover:bg-black hover:text-white transition-colors duration-200">
                  Buy
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-[3rem] items-center pt-[4rem] pb-[2rem] bg-[#242b32]">
        <div className="flex flex-col items-center w-full ">
          <h2 className="text-center text-[1.6rem] font-bold text-white">
            Reviews
          </h2>
          <div className="h-[.2rem] w-[1.6rem] bg-[#f4645a]"></div>
        </div>

        <div className="w-[70%] flex flex-wrap justify-between">
          {Testimonials?.map((item) => {
            return (
              <div
                key={item}
                className="mb-[2rem] flex flex-col gap-[.6rem] w-[32rem] "
              >
                <div className="flex items-center gap-[.8rem]">
                  <h2 className="text-[1.1rem] font-semibold tracking-[.1rem] text-white">
                    {item?.name}
                  </h2>
                  <div className="flex gap-[.2rem] text-[1.2rem] text-[#f4645a]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>

                <p className="text-slate-300">{item?.review}</p>
              </div>
            );
          })}
        </div>

        <button className="mt-[.8rem] h-[2.6rem] w-[10rem] rounded-[.4rem] tracking-[.2px] text-[.8rem] text-white bg-[#ff695d]">
          ALL REVIEWS
        </button>
      </section>

      <section className="flex flex-col gap-[2rem] py-[4rem] w-full">
        <h1 className="text-center text-[1.6rem] font-bold">
          Forex Trading Course{" "}
        </h1>

        <div className="flex px-[8rem] gap-[6rem] mt-[1rem] w-full">
          <div className="flex flex-col gap-[2rem] w-1/2 ">
            <h2 className="text-[1.1rem] font-semibold">
              A Complete Smart Money Concepts Course : Master The Forex Market
            </h2>
            <Image src={"/Images/forex.webp"} width={590} height={540} alt="" />
          </div>

          <div className="flex flex-col gap-[1.6rem]  w-1/2">
            <h2 className="text-[1.3rem] tracking-[.6px] font-semibold">
              Upgrade your trading with the Forex Trading Course!{" "}
            </h2>
            <h4 className="text-[1.1rem] tracking-[.6px] font-semibold">
              Learn how trade the markets!
            </h4>

            <li className=" flex flex-col gap-[.2rem]">
              <li>Step by Step: How to trade with Smart Money Concepts</li>
              <li>8+ hours of Video Lessons</li>
              <li>18 Articles </li>
              <li>Best Strategy for Long term and Scalping</li>
              <li>English Subtitles</li>
              <li>Become a PRO trader course</li>
              <li>Order Blocks</li>
              <li>A-Z Smart Money Concept</li>
            </li>
            <button className="mt-[.6rem] h-[2.6rem] w-[16rem] rounded-[.4rem] tracking-[.2px] text-[.8rem] text-white bg-[#ff695d]">
              LEARN MOR
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[2rem] py-[4rem] w-full text-white bg-[#242b32]">
        <div className="flex px-[8rem] gap-[6rem] mt-[1rem] w-full">
          <div className="flex flex-col gap-[2rem] w-1/2 ">
            <h2 className="text-[1.6rem] font-semibold">
              BUY/SELL Indicator for TradingView
            </h2>
            <Image
              className="border-[.4rem] border-white"
              src={"/Images/Screenshot_1102.png"}
              width={590}
              height={540}
              alt=""
            />
          </div>

          <div className="flex flex-col gap-[1.6rem]  w-1/2">
            <h2 className="text-[1.2rem] tracking-[.6px] font-semibold">
              Best TradingView indicator for buy and sell signals. Accurate
              trend reversal detector. Support and resistance breakouts. Trend
              follow stratew.{" "}
            </h2>

            <div className=" flex flex-col gap-[.2rem]">
              <h5>✅ Working with all Telegram channels in the world</h5>
              <h5>✅ BUY/SELL Alerts & Language</h5>
              <h5>✅ Support/Resistance Levels </h5>
              <h5>✅ working on All Timeframes</h5>
              <h5>✅ Custom Price Action Filter</h5>
              <h5>✅ Suitable Exit Points</h5>
            </div>

            <h2 className="text-[1rem] tracking-[.6px] font-semibold">
              Never miss a winning trade again!
            </h2>
            <button className="mt-[.6rem] h-[2.6rem] w-[16rem] rounded-[.4rem] tracking-[.2px] text-[.8rem] text-white bg-[#ff695d]">
              LEARN MOR
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[2rem] items-center py-[2rem] w-full">
        <div className="flex flex-col gap-[.2rem] items-center">
          <h2 className="text-[1.6rem] font-bold">We recommend you:</h2>
          <h2 className="text-[1.3rem] font-bold">Trusted Forex Broker:</h2>
        </div>

        <Image
          alt=""
          src={"/IMages/banner-xm-1024x630.jpg"}
          height={9000}
          width={1100}
        />

        <button className="mt-[.8rem] h-[2.6rem] w-[16rem] rounded-[.4rem] tracking-[.2px] text-[.8rem] text-white bg-[#ff695d]">
          CLICK HERE to open an account
        </button>
      </section>

      <section className="flex flex-col gap-[2rem] py-[4rem] w-full text-white bg-[#242b32]">
        <div className="flex px-[8rem] gap-[6rem] mt-[1rem] w-full">
          <div className="flex flex-col justify-between gap-[2rem] w-1/2 ">
            <h2 className="text-[1.6rem] font-semibold">
              🆕 Support and Resistance Indicator{" "}
            </h2>
            <Image
              className="border-[.4rem] border-white"
              src={"/Images/Screenshot_1156-2.png"}
              width={590}
              height={540}
              alt=""
            />
          </div>

          <div className="flex flex-col gap-[1.6rem]  w-1/2">
            <h2 className="text-[1.2rem] tracking-[.6px] font-semibold">
              Support and Resistance indicator helps you to reduce the risks and
              find more accurate points of entry to the market. Accurate support
              and resistance detector. Daily highs and lows. Breakouts.
            </h2>

            <div className=" flex flex-col gap-[.2rem]">
              <h5>✅ Auto Support/Resistance Levels</h5>
              <h5>✅ 99% Perfect levels & Language</h5>
              <h5>✅ Auto High/lows on chart</h5>
              <h5>✅ Working on All Timeframes</h5>
              <h5>✅ Custom Price Action Filter</h5>
              <h5>✅ Working with TradingView</h5>
            </div>

            <h2 className="text-[1rem] tracking-[.6px] font-semibold">
              Never miss a winning trade again!
            </h2>
            <button className="mt-[.6rem] h-[2.6rem] w-[16rem] rounded-[.4rem] tracking-[.2px] text-[.8rem] text-white bg-[#ff695d]">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
