import axios from "axios";
import { ChatReference } from "./ChatReference";
import { useEffect, useState } from "react";

export const SidebarChats = () => {
  const [fetchedChats, setFetchedChats] = useState([]);
  const fetchChats = async () => {
    const responce = await axios.get(
      "https://devapi.beyondchats.com/api/get_all_chats?page=1"
    );
    console.log(responce.data.data.data);
    setFetchedChats(responce.data.data.data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="flex flex-col w-full px-[8px] gap-[3px] pt-16 ">
      {fetchedChats &&
        fetchedChats.length > 0 &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fetchedChats.map((data: any) => (
          <ChatReference
            ImageUrl={"/profile.jpg"}
            msg_count={data.msg_count}
            creator={data.creator?.name || "Unknown"}
            chatId={data.id}
          />
        ))}
    </div>
  );
};
