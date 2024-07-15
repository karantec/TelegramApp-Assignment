import { SidebarChats } from "./chat/SibebarChat";
import { SidebarSearch } from "./sidebarSearch";
import { useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div
      className={`h-auto min-h-screen w-full bg-[#212121] ${
        location.pathname === "/" ? "" : "hidden lg:flex"
      }`}
    >
      <SidebarSearch />
      <SidebarChats />
    </div>
  );
};
