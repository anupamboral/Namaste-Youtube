import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, emptyMessages } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import randomSentence from "random-sentence";
import { API_KEY, LIVE_CHAT_API } from "../utils/config";

const LiveChat = ({ liveChatId }) => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveChatMsg, setLiveChatMsg] = useState(""); //* for tracking the input message we want to add in live chat
  // console.log(liveChatId);
  useEffect(() => {
    const liveChatLoader = async () => {
      const data = await fetch(
        LIVE_CHAT_API +
          liveChatId +
          "&part=snippet%2CauthorDetails&key=" +
          API_KEY
      );
      const json = await data.json();
      // console.log(json);
      json.items.map((item) => {
        dispatch(
          addMessage({
            name: item.authorDetails.displayName,
            message: item.snippet.displayMessage,
            imgUrl: item.authorDetails.profileImageUrl,
          })
        );
      });
    }; //* function to load live chat data

    //*Api Polling in every 2 sec
    const i = setInterval(() => {
      liveChatId && liveChatLoader(); //* if liveChatId is present in the videoData then we show the real live chats bu calling the liveChatLoader function. but if it is not present because video was live few hours ago then for demonstration purpose we show randomly generated data in live chat section using below code.
      !liveChatId &&
        dispatch(
          addMessage({
            name: generateRandomName(),
            message: randomSentence(),
          })
        );
    }, 3000);

    //* garbage collection (clearing the effect and making the chat box empty)
    return () => clearInterval(i) && emptyMessages();
  }, []);

  return (
    <div>
      <div className="overflow-y-scroll  w-full overflow-x-hidden h-[400px] px-4  flex flex-col-reverse">
        {chatMessages.map((message, index) => (
          <LiveChatMessage
            key={index}
            name={message.name}
            message={message.message}
            imgUrl={message.imgUrl}
          />
        ))}
      </div>
      <form
        className="w-full border-2 border-white overflow-hidden rounded-b-lg"
        onSubmit={(e) => {
          e.preventDefault(); //* to stop refreshing page when submit event is triggered
          dispatch(addMessage({ name: "Anupam", message: liveChatMsg })) &&
            setLiveChatMsg("");
        }}
      >
        <input
          className="text-black w-3/4 h-10 px-4 bg-green-100"
          value={liveChatMsg}
          onChange={(e) => setLiveChatMsg(e.target.value)}
        />
        <button className="bg-green-400 text-black font-bold h-10 w-1/4 p-1 hover:bg-green-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
