import {
  FaCannabis,
  FaCog,
  FaCommentDots,
  FaDumbbell,
  FaPlus,
} from "react-icons/fa";
import Icon from "./Icon";
function Sidebar() {
  return (
    <div className="fixed top-0 left-0">
      <div className="flex min-h-screen w-[120px] flex-col items-center  bg-slate-900 gap-5 border-r-slate-950 border-r-2 border-solid">
        <div className="mt-1"></div>
        <Icon>
          <FaCannabis className="sidebar-icon text-green-400 " />
        </Icon>
        <Icon>
          <FaPlus className="sidebar-icon relative" />
        </Icon>
        <Icon>
          <FaCog className="sidebar-icon " />
        </Icon>
        <Icon>
          <FaCommentDots className="sidebar-icon" />
        </Icon>
        <hr className="h-[1px] border-gray-500 w-4/5" />
        <Icon>
          <FaDumbbell className="sidebar-icon " />
        </Icon>
      </div>
    </div>
  );
}

export default Sidebar;
