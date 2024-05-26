import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-16 my-5">
        <div></div>
        <div className="flex gap-4 items-center">
          <p>
            <span className="font-bold">Phone:</span> (+443) 200 3107
          </p>
          <span className="border-r h-full mx-2"></span>
          <p>
            <span className="font-bold">Support:</span> placeholder@pbds.com
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
