import CheckIcon from "@mui/icons-material/Check";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Messages = ({ otherUserId, chatDetail }: any) => {
  return (
    <div className={`flex flex-col-reverse w-full h-full overflow-y-auto `}>
      {chatDetail.length > 0 &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        chatDetail.map((message: any) => (
          <>
            <div
              className={`flex  ${
                message.sender.id === otherUserId
                  ? "bg-[#2F2F2F] self-start"
                  : "bg-[#766AC8] self-end"
              } max-w-[70%] rounded-xl p-1 my-[5px] `}
            >
              <p className="text-[16px] text-gray-100 ">{message.message}</p>
              <p
                className={`text-[10px]  ${
                  !message.sender.id === otherUserId
                    ? "text-[#959595]"
                    : "text-gray-300"
                } self-end min-w-[50px] lg:ml-4 ml-1`}
              >
                11:40 PM
              </p>
              {message.sender.id !== otherUserId ? (
                <CheckIcon
                  className="text-gray-300 self-end"
                  fontSize="small"
                />
              ) : null}
            </div>
            <div></div>
          </>
        ))}
    </div>
  );
};
