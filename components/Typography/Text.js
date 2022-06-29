import React from "react";

const Text = ({ children }) => {
  return (
    <p className="font-barlow text-[0.9375rem] normal-case leading-[25px] text-grayBlue md:text-sm md:leading-[28px] md:tracking-normal lg:text-lg">
      {children}
    </p>
  );
};

export default Text;
