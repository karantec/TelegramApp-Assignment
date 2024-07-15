import { Avatar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export const ChatReference = ({
  msg_count,
  creator,
  chatId,
}: {
  ImageUrl: string;
  msg_count: number;
  creator: string;
  chatId: string;
}) => {
  console.log(chatId);
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);

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
    <Link
      to={`/chat/${chatId}`}
      className={`flex items-center ${
        location.pathname.split("/")[2] == chatId ? "bg-[#766AC8]" : ""
      } justify-between py-2 px-2 cursor-pointer rounded-lg hover:bg-[#2C2C2C]`}
    >
      <div className="flex items-center gap-2">
        <Avatar {...stringAvatar(creator || "Unknown")} />
        <div className="flex flex-col items-start ">
          <h2 className="text-gray-100 text-[16px] font-medium">{creator}</h2>
          <p
            className={`text-[#959595] ${
              location.pathname.split("/")[2] == chatId ? "text-gray-200" : ""
            } `}
          >
            Recent chat message
          </p>
        </div>
      </div>
      <div className="flex flex-col  gap-[2px]">
        <p
          className={`text-[12px] font-normal text-gray-600 ${
            location.pathname.split("/")[2] == chatId ? "text-gray-200" : ""
          }`}
        >
          00:30 AM
        </p>
        <p className="p-1 px-3 rounded-full self-end bg-[#717579] text-[14px] font-bold text-gray-100 ">
          {msg_count}
        </p>
      </div>
    </Link>
  );
};
