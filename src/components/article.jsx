// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import articleMain from "../assets/article-transition/main.svg";
import SliderCarousel from "./sliderCarousel";

const Article = () => {
  const repeatCount = 4;

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const carouselRef = useRef(null);
  const [carouselBounds, setCarouselBounds] = useState(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updateCarouselBounds = () => {
      if (carouselRef.current) {
        setCarouselBounds(carouselRef.current.getBoundingClientRect());
      }
    };
    updateCarouselBounds();
    window.addEventListener("resize", updateCarouselBounds);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateCarouselBounds);
    };
  }, []);

  const [isMouseInCarousel, setIsMouseInCarousel] = useState(false);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const handleMouseMove = (event) => {
      if (isMouseInCarousel) {
        const carouselRect = carouselElement.getBoundingClientRect();
        const relativeMouseY = event.clientY - carouselRect.top;
        setMousePosition({
          x: event.clientX,
          y: relativeMouseY + window.scrollY,
        });
      }
    };

    const handleMouseEnter = () => {
      setIsMouseInCarousel(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInCarousel(false);
    };

    carouselElement.addEventListener("mousemove", handleMouseMove);
    carouselElement.addEventListener("mouseenter", handleMouseEnter);
    carouselElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      carouselElement.removeEventListener("mousemove", handleMouseMove);
      carouselElement.removeEventListener("mouseenter", handleMouseEnter);
      carouselElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center gap-14 px-4 sm:px-8 md:px-12 mt-12">
        <div className="relative">
          <div className="sticky top-[48px] left-0">
            <img
              src={articleMain}
              alt="Main Article"
              className="w-full lg:w-auto"
            />
          </div>
        </div>
        <article className="flex flex-col mt-2 max-w-full lg:max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:text-left">
            We are dedicated to addressing <br className="hidden lg:block" />
            the evolving requirements of <br className="hidden lg:block" />
            {"world's"} most dynamic companies.
          </h1>
          <hr className="my-4 sm:my-6 md:my-8" />
          {Array.from({ length: repeatCount }).map((_, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <hr className="my-4 sm:my-6 md:my-8" />}
              <div className="flex flex-col md:flex-row justify-between">
                <p className="font-bold text-lg md:text-xl lg:text-2xl">
                  {" "}
                  0{index + 1}
                </p>
                <p className="text-sm sm:text-base ">
                  Lorem ipsum dolor sit amet consectetur. Metus{" "}
                  <br className="hidden md:block" />
                  convallis nulla volutpat tempus. Porta pretium purus{" "}
                  <br className="hidden md:block" />
                  risus sed posuere. Elit odio tellus eget duis facilisis in{" "}
                  <br className="hidden md:block" />
                  lorem. Parturient et ut quis donec mattis at rhoncus{" "}
                  <br className="hidden md:block" />
                  morbi. Neque turpis non orci pulvinar. Luctus proin.
                </p>
              </div>
            </React.Fragment>
          ))}
          <SliderCarousel />
        </article>
      </div>
    </>
  );
};

export default Article;
