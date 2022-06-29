import React from "react";

const Title = ({ size = "md", color = "white", className, children }) => {
  return (
    <h2
      className={`${size === "sm" && "text-xs md:text-sm"} 
      ${
        size === "md" &&
        "text-sm md:text-[1.25rem] md:leading-[1.5rem] md:tracking-[0.21rem] lg:text-hXl"
      }
      ${size === "xl" && "font-bellefair text-xl"}
       uppercase text-${color} ${className ?? ""}`}
    >
      {children}
    </h2>
  );
};

export default Title;
