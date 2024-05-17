// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import serviceSliderData from "../lib/servicesSliderData";
import "tailwindcss/tailwind.css";

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) =>
        prevIndex === serviceSliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const progressPercentage =
    (selectedIndex / (serviceSliderData.length - 1)) * 100;

  return (
    <div>
      <p className="text-5xl flex justify-center my-8">Our Services</p>
      <div className="overflow-hidden mx-auto w-full flex justify-center">
        <div className="flex space-x-4 w-full">
          {serviceSliderData?.map((item, index) => (
            <div
              key={item.id}
              className={`transition-transform duration-700 transform ${
                index === selectedIndex ? "scale-125" : "scale-100"
              } mx-auto`}
            >
              <img src={item.url} alt="" className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full flex justify-center items-center mt-4">
        <span className="mr-2">1</span>
        <div className="w-1/6 h-1 bg-gray-200 relative">
          <div
            className="h-1 bg-[#7D7D7D] absolute transition-all duration-700"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <span className="ml-2">3</span>
      </div>
    </div>
  );
};

export default Services;
