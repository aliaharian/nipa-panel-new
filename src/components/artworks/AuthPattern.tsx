import React from "react";

const AuthPattern = ({ className }: { className: string }) => {
  return (
    // create 11*12 little squares
    <div className={`absolute ${className}`}>
      <div className="grid grid-cols-11 grid-rows-12 gap-0 w-full h-full">
        {[...Array(11 * 12)].map((_, i) => (
          <div
            key={i}
            className="bg-text-300 opacity-60 rounded-[1px] w-[6px] h-[6px] m-[3px]"
          ></div>
        ))}
      </div>
    </div>
  );
};
export default AuthPattern;
