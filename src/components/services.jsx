// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from "react";
import serviceSliderData from "../lib/servicesSliderData";
import "tailwindcss/tailwind.css";

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => {
        if (prevIndex < 3) {
          return prevIndex + 1;
        } else {
          return 0;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const visibleSlides = 1;
      const scrollPosition =
        (carouselRef.current.scrollWidth / serviceSliderData.length) *
        Math.min(selectedIndex, serviceSliderData.length - visibleSlides);

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  const progressPercentage =
    (selectedIndex / (serviceSliderData.length - 2)) * 100;

  return (
    <div className="flex flex-col relative z-10 items-center gap-14 mt-12">
      <p className="text-3xl sm:text-4xl md:text-5xl text-center mt-10">
        Our Services
      </p>

      <div
        ref={carouselRef}
        className="overflow-x-scroll scrollbar-hide scroll-smooth flex gap-4 w-full snap-x snap-mandatory"
      >
        {serviceSliderData?.map((item, index) => (
          <div
            key={item.id}
            className="snap-center shrink-0 w-[30%] sm:w-[380px]"
          >
            <img
              src={item.url}
              alt={item.title || "Service"}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="relative w-full flex justify-center items-center mt-4">
        <span className="mr-2">1</span>
        <div className=" w-1/3 sm:w-1/4 md:w-1/6  h-1 bg-[#7D7D7D] relative">
          <div
            className="h-1 absolute bg-gray-200 transition-all duration-700"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <span className="ml-2">3</span>
      </div>
    </div>
  );
};

export default Services;
