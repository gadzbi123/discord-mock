import { useEffect, useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
const ChannelMessage = ({
  author = "Ada",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at porta lorem. Cras semper tellus eget gravida sodales. Donec posuere purus sem, ac convallis risus venenatis quis. Quisque tellus nisi, ultrices sed quam eleifend, congue bibendum nunc. Pellentesque tempus congue quam, in scelerisque nunc mattis id. Cras cursus lorem ut mi maximus, eget lobortis nulla malesuada. Quisque tincidunt, lorem non pharetra auctor, ex lorem dapibus nisi, non hendrerit dui arcu vitae nisl. Quisque velit nunc, pulvinar at tellus id, vestibulum convallis mauris. Nullam ornare pellentesque auctor. Nullam efficitur convallis leo eu porttitor. Pellentesque arcu sapien, hendrerit eget orci nec, molestie accumsan quam. Curabitur bibendum nunc in ipsum efficitur, non dapibus nisi tempus.",
  time = "2 weeks ago",
}) => {
  const [avatarConfig, setAvatarConfig] = useState();
  useEffect(() => {
    setAvatarConfig(genConfig());
  }, []);
  return (
    <>
      <div className="flex w-full justify-evenly justify-items-center items-center bg-slate-800">
        <Avatar
          className=" w-32 h-32 shrink-0  self-start mt-4 hover:scale-105 transition-all duration-100 hover:shadow-2xl"
          {...avatarConfig}
        />
        <div className="w-[80%] py-5">
          <h2 className="text-slate-100 text-4xl mb-3">
            <span className="hover:shadow-xl text-green-600">{author}</span>
            <span className=" text-sm text-slate-500 ml-3">{time}</span>
          </h2>
          <p className="text-slate-300 text-xl">{body}</p>
        </div>
      </div>
    </>
  );
};

export default ChannelMessage;
