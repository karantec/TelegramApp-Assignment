import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
export const UserInput = () => {
  return (
    <div className="flex sticky bottom-5 items-center justify-center mt-5 ">
      <div className="flex items-center  w-full gap-3">
        <div className="bg-[#212121] rounded-xl p-2 flex-1 flex items-center">
          <SentimentSatisfiedAltIcon className="text-[#959595] hover:text-[#766AC8] cursor-pointer" />
          <input
            type="text"
            placeholder="Message"
            className="text-[#959595] mx-1 bg-transparent text-[16px] p-2 focus-within:outline-none w-full font-semibold "
          />
          <AttachFileIcon className="text-[#959595] hover:text-[#766AC8] cursor-pointer" />
        </div>
        <div className="cursor-pointer h-[54px] w-[54px] group hover:bg-[#766AC8] flex items-center justify-center bg-[#212121] rounded-full">
          <MicIcon className="text-[#959595] group-hover:text-gray-100 " />
        </div>
      </div>
    </div>
  );
};
