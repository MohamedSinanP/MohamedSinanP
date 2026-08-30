import React from 'react';

const SectionHead = ({ children }) => {
  return (
    <div>
      <h2 className="relative text-3xl font-bold my-6 text-center">
        <span className="text-[#38BDF8] md:text-4xl lg:text-5xl xl:text-7xl">
          {children}
        </span>
      </h2>
    </div>
  );
};

export default SectionHead;
