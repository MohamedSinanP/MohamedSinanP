const TextHighlight = ({ children }) => {
  return (
    <span className="font-extrabold md:text-2xl bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default TextHighlight;