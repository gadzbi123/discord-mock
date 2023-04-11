import { BsHeadphones } from "react-icons/bs";
import { FaHorseHead } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
const ChannelSettings = () => {
  return (
    <div className=" mt-auto gap-3 flex items-center bg-slate-800 py-5">
      <h3 className="mr-auto ml-5 text-slate-200 text-lg">Gadzbi</h3>
      <MdKeyboardVoice className="channel-settings-icon" />
      <BsHeadphones className="channel-settings-icon" />
      <FaHorseHead className="channel-settings-icon mr-5" />
    </div>
  );
};

export default ChannelSettings;
