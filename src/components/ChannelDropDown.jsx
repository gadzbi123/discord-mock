import { useEffect, useRef, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
const ChannelDropDown = ({ title, topics, isOpen = false }) => {
  const [visible, setVisible] = useState(isOpen);
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(`h-[${topics.length * 25}px]`);
    console.log(height);
  }, [height]);
  return (
    <div className=" ml-5">
      <div
        onClick={() => setVisible(!visible)}
        className="flex items-center gap-2 text-gray-400">
        <BsChevronRight
          className={`${
            visible ? "rotate-90" : "rotate-0"
          } transition-all duration-500`}
        />
        <h3 className=" text-xl">{title}</h3>
      </div>
      <div
        className={`${
          visible ? `scale-100 ${height}` : "scale-0 h-0"
        } transition-all duration-500 origin-top-left ml-5`}>
        {topics.map((topic, i) => (
          <p
            key={i}
            className="flex items-center gap-1 text-gray-300 text-l hover:bg-slate-400 w-15 transition-all duration-200">
            <FaHashtag />
            {topic}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ChannelDropDown;
