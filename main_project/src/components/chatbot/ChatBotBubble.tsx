import React from "react";
import { RiRobot2Line } from "react-icons/ri";

interface ChatBotBubbleProps {
  sendData: (data: boolean) => void;
}
const ChatBotBubble: React.FC<ChatBotBubbleProps> = ({ sendData }) => {
  return (
    <button
      onClick={() => sendData(true)}
      className="fixed bottom-4 right-4 m-0 inline-flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-myDarkPurple bg-none p-0 text-sm font-medium normal-case leading-5 hover:bg-myPink hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50"
      type="button"
      aria-haspopup="dialog"
      aria-expanded="false"
      data-state="closed"
    >
      <RiRobot2Line className="block h-8 w-8 border-gray-800 align-middle text-myBlack"></RiRobot2Line>
    </button>
  );
};

export default ChatBotBubble;
