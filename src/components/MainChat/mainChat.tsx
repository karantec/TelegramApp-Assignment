import axios from "axios";
import { TopBar } from "./TopBar";
import { UserInput } from "./UserInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Messages } from "./Messages";
// import { useLocation } from "react-router-dom";

type ChatMessage = {
  id: string;
  sender: {
    id: string;
    name: string;
  };
  message: string;
  timestamp: string;
};

export const MainChat = () => {
  const params = useParams();
  console.log(params.chatId);
  const [chatDetail, setChatDetail] = useState<ChatMessage[]>([]);
  // const location = useLocation();
  const [loading, setLoading] = useState(false);

  const fetchChatDetail = async () => {
    if (params.chatId) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${params.chatId}`
        );
        console.log(response.data.data);
        setChatDetail(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching chat details:", error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchChatDetail();
  }, [params.chatId]);

  if (loading) {
    return (
      <div className="flex flex-col w-full items-center justify-center h-screen">
        <img src="/loading2.svg" className="h-[50px] w-[50px]" />
      </div>
    );
  }

  return (
    <div
      className={`h-screen flex flex-col w-full `}
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
      }}
    >
      {chatDetail.length > 0 && (
        <TopBar creator={chatDetail[0]?.sender?.name || "Unknown"} />
      )}
      <div className="flex flex-col w-[100%] h-screen justify-between">
        <div className="flex flex-col lg:w-[60%] w-[90%] pb-[20px] self-center justify-between h-full">
          <div className="w-full h-[90%]">
            <Messages
              otherUserId={chatDetail[0]?.sender?.id}
              chatDetail={chatDetail}
            />
          </div>
          <UserInput />
        </div>
      </div>
    </div>
  );
};
