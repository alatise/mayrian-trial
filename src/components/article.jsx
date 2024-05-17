// eslint-disable-next-line no-unused-vars
import React from "react";
import articleMain from "../assets/article-transition/main.svg";
import { Carousel } from "@material-tailwind/react";
import ArticleSliderData from "../lib/articleSliderData";

const Article = () => {
  const repeatCount = 4;
  return (
    <>
      <div className="flex gap-10 px-12 mt-12">
        <img src={articleMain} alt="" className="" />
        <article className="flex flex-col mt-2">
          <h1 className="text-4xl">
            We are dedicated to addressing <br /> the evolving requirements of
            the <br />
            {"world's"} most dynamic companies.
          </h1>
          <hr className="my-8" />
          {Array.from({ length: repeatCount }).map((_, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <hr className="my-8" />}{" "}
              <div className="flex justify-between">
                <p> 0{index + 1}</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Metus <br /> convallis
                  nulla volutpat tempus. Porta pretium purus <br /> risus sed
                  posuere. Elit odio tellus eget duis facilisis in <br /> lorem.
                  Parturient et ut quis donec mattis at rhoncus <br /> morbi.
                  Neque turpis non orci pulvinar. Luctus proin.
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
            {ArticleSliderData?.map((item) => {
              return (
                <div className="" key={item.id}>
                  <img className="w-full h-full" src={item.url} alt="" />
                </div>
              );
            })}
          </Carousel>
        </article>
      </div>
    </>
  );
};

export default Article;
