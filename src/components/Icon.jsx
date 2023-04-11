const Icon = ({ children }) => {
  return (
    <div className="relative">
      {children}
      {/* <div className="absolute bg-red-400 text-yellow-300 px-4 py-2 top-[20px] left-[25px]">
        Tooltip
      </div> */}
    </div>
  );
};

export default Icon;
