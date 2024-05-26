// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import { useTransition, animated } from "@react-spring/web";
import HeroSliderData from "../lib/heroSliderData";

const Hero = () => {
  const [index, setIndex] = useState(0);

  const backgroundTransitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 900 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HeroSliderData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full h-screen">
      {backgroundTransitions((style, i) => (
        <animated.div
          className="absolute inset-0 w-full h-[100vh] flex items-end   bg-cover text-white p-8"
          style={{
            ...style,
            backgroundImage: `url(${HeroSliderData[i].url})`,
          }}
        >
          <div className="flex w-full pb-10 justify-between">
            <div className="flex flex-col mt-[300px] gap-[70px] h-fit  w-fit ">
              <h1
                className={`text-[60px] font-walsheim font-bold mb-0 tracking-wider duration-400 ${
                  i === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[120%] opacity-0"
                }`}
                style={{ transition: "0.5s all linear" }}
              >
                {HeroSliderData[i].heading}
              </h1>

              <p
                className={`text-lg mb-0 max-w-[500px] duration-500 ${
                  i === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[100%] opacity-0"
                }`}
                style={{ transition: "0.2s all linear" }}
              >
                {HeroSliderData[i].text} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quod rem totam qui quis vel facere blanditiis
                temporibus dolore unde nesciunt. Lorem ipsum dolor sit amet
                consectetur
              </p>
            </div>

            <div className=" h-[90px] mt-[300px] w-[40%]">
              <p
                className={` h-[90px] text-[25px] transition-opacity duration-1000 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-4">
                  {i + 1}
                  <div className="h-[10px] w-full  bg-white"></div>
                </div>
                {HeroSliderData[i].industry}
              </p>
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default Hero;
