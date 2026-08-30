import React from 'react';

const TextHighlight = ({ children }) => {
  return (
    <span className='text-transparent font-extrabold md:text-2xl bg-clip-text bg-gradient-to-r text-[#38BDF8] '>
      {children}
    </span>
  );
};

export default TextHighlight;