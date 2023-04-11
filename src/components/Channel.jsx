import { BiCog } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import ChannelMessage from "./Channel-message";

const Channel = () => {
  return (
    <div className="ml-[480px] mt-0">
      <section className="flex gap-4 py-4 items-center bg-slate-700">
        <h2 className="mr-auto ml-5 text-xl text-purple-300 hover:text-purple-400 transition-all duration-200 hover:scale-[1.02] backface-hidden">
          # Tailwind css
        </h2>
        <BiCog className="channel-icon" />
        <input
          placeholder="Search"
          className=" w-14 bg-slate-200 rounded-md py-1 px-1 "
        />
        <BsBellFill className="channel-icon" />
        <CgProfile className="channel-icon mr-5 " />
      </section>
      <section>
        <ChannelMessage />
        <ChannelMessage author="Samuel" time="1 weeks ago" />
        <ChannelMessage author="Josh" time="3 weeks ago" />
        <ChannelMessage author="Erik" time="month ago" body="I like it" />
      </section>
    </div>
  );
};
export default Channel;
