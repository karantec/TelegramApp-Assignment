import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

export const TopBar = ({ creator }: { creator: string }) => {
  // const location = useLocation();
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    console.log(name);
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }
  return (
    <div className=" lg:w-[75%] w-full fixed top-0  bg-[#212121] flex items-center justify-between lg:pl-[23px] py-[4px] pr-[13px]">
      <Link to={"/"} className="lg:hidden">
        <ArrowBackIcon className="text-[#959595] cursor-pointer" />
      </Link>
      <div className="flex items-center gap-[10px]">
        <Avatar {...stringAvatar(creator || "Unknown")} />
        <div className="flex flex-col items-start">
          <h2 className="text-gray-100 text-[16px] font-medium">{creator}</h2>
          <p className="text-[#959595] text-[14px]">
            last seen today at 00:50 AM
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <SearchIcon className="text-[#959595]" />
        <PhoneIcon className="text-[#959595]" />
        <MoreVertIcon className="text-[#959595]" />
      </div>
    </div>
  );
};
