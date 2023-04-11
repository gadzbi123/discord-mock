import ChannelDropDown from "./ChannelDropDown";
import ChannelSettings from "./ChannelSettings";
const Channels = () => {
  return (
    <div className="fixed top-0 left-[120px]">
      <div className="flex flex-col h-screen w-[360px] bg-slate-900 resize-x">
        <h2 className="text-gray-200 text-3xl mt-2 self-center">Channels</h2>
        <ChannelDropDown
          title="Questions"
          topics={[
            "How can i win?",
            "Is it possible to fly?",
            "How hard can it be?",
          ]}
        />
        <ChannelDropDown
          title="Topics"
          topics={["BeGoodAtMath", "BeGoodAtPolish"]}
        />
        <ChannelDropDown title="Random" topics={["Random num gen"]} />
        <ChannelSettings />
      </div>
    </div>
  );
};
export default Channels;
