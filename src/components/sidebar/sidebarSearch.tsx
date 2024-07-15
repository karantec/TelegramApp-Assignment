import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Box, Drawer, Popover } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useState } from "react";
// import { useAsyncError } from "react-router-dom";

const data = [
  {
    id: 1,
    lable: "My Profile",
    icon: AccountCircleIcon,
  },
  {
    id: 2,
    lable: "New Group",
    icon: GroupIcon,
  },
  {
    id: 3,
    lable: "Contact",
    icon: PersonIcon,
  },
  {
    id: 4,
    lable: "Calls",
    icon: PhoneIcon,
  },
  {
    id: 5,
    lable: "People Nearby",
    icon: EmojiPeopleIcon,
  },
  {
    id: 6,
    lable: "Saved Messages",
    icon: BookmarkIcon,
  },
  {
    id: 7,
    lable: "Settings",
    icon: SettingsIcon,
  },
  {
    id: 8,
    lable: "Invite Friend",
    icon: PersonAddAltIcon,
  },
  {
    id: 9,
    lable: "Telegram Feature",
    icon: HelpOutlineIcon,
  },
];

export const SidebarSearch = () => {
  const [open, setOpen] = useState(false);
  const [openPopOver, setOpenPopOver] = useState(false);
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setOpen(!open);
    } else {
      setOpenPopOver(!openPopOver);
    }
  };
  const DrawerList = (
    <Box sx={{ width: "300px" }} role="presentation" onClick={handleClick}>
      <div className="h-screen bg-[#565656] w-full">
        <div className="flex justify-between  p-3 bg-[#2C2C2C]">
          <div className="flex flex-col items-start ">
            <Avatar sx={{ bgcolor: deepPurple[500] }}>DS</Avatar>
            <h2 className="text-[16px] text-gray-100 font-semibold mt-2">
              Deepanshu saini
            </h2>
            <p className="text-[14px] text-gray-300">+91 9996489940</p>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <WbSunnyIcon className="text-gray-300" />
            <KeyboardArrowDownIcon className="text-gray-300" />
          </div>
        </div>
        <div className="flex flex-col bg-[#565656] mt-2">
          {data.map((item) => (
            <div className="flex items-center gap-6 p-3">
              <item.icon className="text-gray-300" />
              <p className="text-gray-300 font-semibold">{item.lable}</p>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
  return (
    <div className="flex items-center px-[18px] pt-[6px] pb-[8px] justify-between fixed top-0 z-50 bg-[#212121] w-full lg:w-[25%]">
      <div
        className="h-[45px] w-[45px] items-center justify-center flex rounded-full cursor-pointer hover:bg-[#2C2C2C]"
        onClick={handleClick}
      >
        <MenuIcon className=" text-[#AAAAAA]" fontSize="medium" />
      </div>
      <div className="flex items-center bg-[#2C2C2C] px-3 py-2.5 ml-[13px] rounded-full gap-5 flex-1">
        <SearchIcon className="h-2 w-2 text-[#565656]" fontSize="medium" />
        <input
          className="text-[#AAAAAA] bg-transparent flex-1 text-[16px] focus-within:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <Drawer open={open} onClose={handleClick}>
        {DrawerList}
      </Drawer>
      <Popover
        // id={id}
        open={openPopOver}
        // anchorEl={anchorEl}
        onClose={handleClick}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        style={{ marginTop: "25px", width: "300px" }}
      >
        <div className="h-auto bg-[#2C2C2C] w-[500px] rounded-xl">
          {/* <div className="flex justify-between  p-3 bg-slate-900">
            <div className="flex flex-col items-start ">
              <Avatar sx={{ bgcolor: deepPurple[500] }}>DS</Avatar>
              <h2 className="text-[16px] text-gray-100 font-semibold mt-2">
                Deepanshu saini
              </h2>
              <p className="text-[14px] text-gray-300">+91 9996489940</p>
            </div>
            <div className="flex flex-col justify-between gap-4">
              <WbSunnyIcon className="text-gray-300" />
              <KeyboardArrowDownIcon className="text-gray-300" />
            </div>
          </div> */}
          <div className="flex flex-col bg-[#2C2C2C] w-full">
            {data.map((item) => (
              <div className="flex items-center gap-6 px-3 py-2 w-full hover:bg-black/30 cursor-pointer">
                <item.icon className="text-gray-300" />
                <p className="text-gray-300 font-semibold">{item.lable}</p>
              </div>
            ))}
          </div>
        </div>
      </Popover>
    </div>
  );
};
