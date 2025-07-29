import React from "react";

const CommonWrapper = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1400px] mx-auto my-auto ${className}`}>
      {children}
    </div>
  );
};

export default CommonWrapper;
