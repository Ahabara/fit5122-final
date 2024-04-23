import React, { useEffect, useState } from "react";
import ChatBotBubble from "./ChatBotBubble.tsx";
import { RiRobot2Line } from "react-icons/ri";

interface MessageProps {
  message: string;
  typeWrite: boolean;
}
const ChatMessage: React.FC<MessageProps> = ({ message, typeWrite }) => {
  const [isLast, setIsLast] = useState(false);

  useEffect(() => {
    setIsLast(true);
  }, []);
  let style = "";
  // todo if isLast and from AI
  if (isLast && typeWrite) {
    style =
      "relative before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white";
  }
  return (
    <div className="my-4 flex flex-1 gap-3 text-sm text-gray-600">
      <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <div className="rounded-full border bg-gray-100 p-1">
          {typeWrite ? (
            <BotIcon />
          ) : (
            <svg
              stroke="none"
              fill="black"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
            </svg>
          )}
        </div>
      </span>
      <p className="leading-relaxed">
        <span className="block font-bold text-gray-700">You </span>
        <p className={style}>{message}</p>
      </p>
    </div>
  );
};

const MinimiseIcon = () => {
  return (
    <>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4"
      >
        <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
      </svg>
    </>
  );
};

function BotIcon() {
  return (
    <svg
      stroke="none"
      fill="black"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      ></path>
    </svg>
  );
}

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(false);
  async function fetchResponse(message: string) {
    const url = "https://fourtitude.xyz/festival/chatBot";
    const body = {
      query: message,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        setLoading(false);
        setMessages((prevState) => [
          ...prevState,
          "Whoops something went wrong :(",
        ]);

        console.log(response);

        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
      setLoading(false);
      setMessages((prevState) => [...prevState, responseData.data]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setLoading(false);
      setMessages((prevState) => [
        ...prevState,
        "Whoops something went wrong :(",
      ]);
    }
  }
  return (
    // todo fixed bottom-0 right-0
    <>
      <ChatBotBubble sendData={(e) => setView(e)} />
      {view && (
        <div className="">
          <div
            style={{
              boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
            }}
            className="fixed bottom-1 right-0 mx-4 flex items-center justify-center overflow-scroll rounded-lg border border-[#e5e7eb] bg-white p-6 md:w-96"
          >
            <div className="w-full">
              <div className="flex flex-col space-y-1.5 pb-6">
                <div className="flex justify-between align-middle">
                  <div className="flex items-center gap-2">
                    <RiRobot2Line className="h-6 w-6" />
                    <h2 className="text-lg font-semibold tracking-tight">
                      <span className="text-myDarkPurple">Festive</span>Bot
                    </h2>
                  </div>
                  <button
                    onClick={() => setView(false)}
                    className="flex rounded-sm border-4 border-gray-100 bg-gray-100 align-middle hover:border-gray-400 hover:bg-gray-400"
                  >
                    <MinimiseIcon />
                  </button>
                </div>
                <p className="text-sm leading-3 text-[#6b7280]">
                  Ask Me Anything About Festivals..
                </p>
              </div>

              <div
                className="h-96 overflow-auto pr-4"
                // style={{ minWidth: "100%", display: "table" }}
              >
                <div className="my-4 flex  flex-1 gap-3 text-sm text-gray-600">
                  <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                    <div className="rounded-full border bg-gray-100 p-1">
                      <BotIcon />
                    </div>
                  </span>
                  <p className="leading-relaxed">
                    <span className="block font-bold text-gray-700">AI </span>
                    Hi, how can I help you today?
                  </p>
                </div>

                {messages.map((message, index) => (
                  <ChatMessage
                    message={message}
                    key={index}
                    typeWrite={!(index % 2 == 0)}
                  />
                ))}
                {loading && (
                  <>
                    <div className="my-4 flex  flex-1 gap-3 text-sm text-gray-600">
                      <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                        <div className="rounded-full border bg-gray-100 p-1">
                          <svg
                            stroke="none"
                            fill="black"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                            ></path>
                          </svg>
                        </div>
                      </span>
                      <p className="leading-relaxed">
                        <span className="block font-bold text-gray-700">
                          AI{" "}
                        </span>
                        <span className="loading loading-dots loading-sm " />
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center pt-0">
                <form className="flex w-full items-center justify-center space-x-2">
                  <input
                    disabled={loading}
                    className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm text-[#030712] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  <button
                    disabled={loading}
                    onClick={(e) => {
                      setMessages((prevState) => [...prevState, message]);
                      e.preventDefault();
                      setLoading(true);
                      fetchResponse(message).catch((e) => console.log(e));
                      setMessage("");
                    }}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-black bg-myDarkPurple px-4 py-2 text-sm font-medium text-myBlack hover:bg-[#111827E6] disabled:pointer-events-none disabled:opacity-50"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
