// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectsSliderData from "../lib/selectedProjectsData";

const Projects = () => {
  return (
    <div className="mt-10 px-4 sm:px-8 md:px-12">
      <p className="flex justify-center text-3xl sm:text-4xl md:text-5xl my-4">
        Selected Projects
      </p>
      <div className="flex flex-col items-center justify-center lg:flex-row mt-6 gap-8 lg:gap-12">
        <div className="flex-1 space-y-8 max-w-full lg:max-w-xs">
          {ProjectsSliderData.slice(0, 2).map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800">
                <img
                  src={item.url}
                  className="group-hover:scale-110 duration-500 w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-center items-center max-w-full lg:max-w-xs">
          {ProjectsSliderData.slice(2, 3).map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800">
                <img
                  src={item.url}
                  className="group-hover:scale-110 duration-500 w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-8 max-w-full lg:max-w-xs">
          {ProjectsSliderData.slice(3, 5).map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800">
                <img
                  src={item.url}
                  className="group-hover:scale-110 duration-500 w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
