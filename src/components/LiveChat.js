import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, deleteMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import randomSentence from "random-sentence";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveChatMsg, setLiveChatMsg] = useState(""); //* for tracking the input message we want to add in live chat
  useEffect(() => {
    //*Api Polling example
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomSentence(),
        })
      );
    }, 1000); //*(here we have not used real data we just added randomly generated object but in real life application we would have to fetch the data)

    //* garbage collection (clearing the effect)
    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="overflow-y-scroll h-[400px] px-4  flex flex-col-reverse">
        {chatMessages.map((message, index) => (
          <LiveChatMessage
            key={index}
            name={message.name}
            message={message.message}
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
          className="text-black w-3/4 h-10 px-4 bg-slate-300"
          value={liveChatMsg}
          onChange={(e) => setLiveChatMsg(e.target.value)}
        />
        <button className="bg-green-400 text-black h-10 w-1/4 p-1 hover:bg-green-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
