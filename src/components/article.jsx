// eslint-disable-next-line no-unused-vars
import React from "react";
import articleMain from "../assets/article-transition/main.svg";
import { Carousel } from "@material-tailwind/react";
import ArticleSliderData from "../lib/articleSliderData";

const Article = () => {
  const repeatCount = 4;
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center gap-14 px-4 sm:px-8 md:px-12 mt-12">
        <img
          src={articleMain}
          alt="Main Article"
          className="w-full lg:w-auto"
        />
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
          <Carousel
            className="mt-8"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {ArticleSliderData?.map((item) => (
              <div className="" key={item.id}>
                <img
                  className="w-full h-full object-cover"
                  src={item.url}
                  alt={item.title || "Slide"}
                />
              </div>
            ))}
          </Carousel>
        </article>
      </div>
    </>
  );
};

export default Article;
