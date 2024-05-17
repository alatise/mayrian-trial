// eslint-disable-next-line no-unused-vars
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-10 my-5">
        <div></div>
        <div className="flex gap-4">
          <p>
            {" "}
            <span className="font-bold">Phone:</span> (+443) 200 3107
          </p>
          <span className="border border-r"></span>
          <p>
            <span className="font-bold">Support: {""}</span>
            placeholder@pbds.com
          </p>
        </div>
      </div>
      <hr className="" />
    </>
  );
};

export default Header;
