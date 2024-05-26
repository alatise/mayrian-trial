import React from "react";
import { useMouse } from "@uidotdev/usehooks";
import { Carousel, IconButton, Typography } from "@material-tailwind/react";
import { FaArrowRightLong } from "react-icons/fa6";
import ArticleSliderData from "../lib/articleSliderData";

export default function SliderCarousel() {
  const [mouse, ref] = useMouse();

  const isInside =
    mouse.elementX >= 0 &&
    mouse.elementX <= 620 &&
    mouse.elementY >= 0 &&
    mouse.elementY <= 800;

  const style = {
    position: "absolute",
    left: mouse.elementX - 50,
    top: mouse.elementY - 50,
    width: "100px",
    height: "100px",
  };

  return (
    <Carousel
      className="mt-8 h-[400px] w-[90%] sm:h-[600px] sm:w-[80%] md:h-[800px] md:w-[620px] mx-auto"
      prevArrow={({ handlePrev }) => (
        <div ref={ref}>
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
          >
            <Typography
              style={style}
              className="!absolute border-2 p-2 border-red-white rounded-full z-10 flex justify-center items-center text-[30px]"
            >
              <FaArrowRightLong />
            </Typography>
          </IconButton>
        </div>
      )}
    >
      {ArticleSliderData.map((item) => (
        <div
          className="relative bg-white"
          key={item.id}
          style={{
            border: "1px solid black",
            backgroundColor: isInside ? "lightblue" : "white",
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={item.url}
            alt={item.title || "Slide"}
          />
        </div>
      ))}
    </Carousel>
  );
}
