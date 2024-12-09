import React, { Children } from "react";

export function Test1({ children }) {
  return (
    <div className="flex text-black">
      <div className="transition-all duration-1000 h-screen bg-blue-900 md:p-4 md:w-40 w-[0px]">
        sidebar
      </div>
      <div className="w-61 bg-blue-200 p-4 w-screen h-screen">{children}</div>
    </div>
  );
}
