import React, { useEffect } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, deleteMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import randomSentence from "random-sentence";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    //*Api Polling example
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomSentence(),
        })
      );
    }, 1000);

    //* garbage collection (clearing the effect)
    return () => clearInterval(i);
  }, []);

  return (
    <div className="overflow-y-scroll h-[400px]  flex flex-col-reverse">
      {chatMessages.map((message, index) => (
        <LiveChatMessage
          key={index}
          name={message.name}
          message={message.message}
        />
      ))}
    </div>
  );
};

export default LiveChat;
