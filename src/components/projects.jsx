// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectsSliderData from "../lib/selectedProjectsData";

const Projects = () => {
  return (
    <div className="mt-10">
      <p className="flex justify-center text-5xl my-4">Selected Projects</p>
      <div className="flex flex-col lg:flex-row mt-6 gap-8 px-12">
        <div className="flex-1 space-y-8">
          {ProjectsSliderData.slice(0, 2).map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800">
                <img
                  src={item.url}
                  className="group-hover:scale-110 duration-500"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-center items-center">
          {ProjectsSliderData.slice(2, 3).map((item) => (
            <div key={item.id} className="group relative overflow-hidden ">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800 ">
                <img
                  src={item.url}
                  className="group-hover:scale-110 duration-500 object-contain "
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-8">
          {ProjectsSliderData.slice(3, 5).map((item) => (
            <div key={item.id} className="group relative overflow-hidden">
              <div className="relative overflow-hidden shadow dark:shadow-gray-800">
                <img
                  src={item.url}
                  className="group-hover:scale-110 duration-500"
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
