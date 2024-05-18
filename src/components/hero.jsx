// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import HeroSliderData from "../lib/heroSliderData";

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div
      className="overflow-hidden w-full mx-auto flex items-center justify-center h-screen"
      ref={emblaRef}
    >
      <div className="flex">
        {HeroSliderData?.map((item) => {
          return (
            <div className="embla__slide relative h-full w-full" key={item.id}>
              <img className="w-full h-full" src={item.url} alt="" />
              {/* <div className="flex flex-col">
                <h1 className="absolute  w-full md:w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem]  lg:translate-y-48 py-2 lg:py-4 px-2 lg:px-8 text-xl lg:text-2xl text-white font-extrabold">
                  {item.title}
                </h1>
                <p className="absolute  w-full md:w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem]  lg:translate-y-48 py-2 lg:py-4 px-2 lg:px-8 text-xl lg:text-2xl text-white font-extrabold">
                  {item.description}
                </p>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
