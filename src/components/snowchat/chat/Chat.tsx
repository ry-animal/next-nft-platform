import React, { FC, useEffect, useRef, useState } from "react";
import { ChatInput } from "./ChatInput";
import { ChatLoader } from "./ChatLoader";
import { ChatMessage } from "./ChatMessage";
import { ResetChat } from "./ResetChat";
import { ChatCompletionRequestMessage } from "openai";
import { Results, SCChatMessage } from "../../../server/snowgpt/types";
interface Props {
  messages: SCChatMessage[];
  loading: string | undefined;
  onSend: (message: SCChatMessage) => void;
  onReset: () => void;
  loggedIn: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  input: string;
  handleSend: (message: SCChatMessage) => Promise<void>;
}

export const Chat: FC<Props> = ({
  messages,
  loading,
  handleSend,
  loggedIn,
  setInput,
  input,
  onSend,
  onReset,
}) => {
  const messagesEndRef = useRef(null);
  const [showHelpCards, setShowHelpCards] = useState(true);
  useEffect(() => {
    (messagesEndRef.current as any).scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="flex h-full w-full px-2">
        <div className="flex h-full w-full flex-col justify-between px-2 sm:p-4">
          <div
            className="h-full overflow-y-scroll"
            style={{ scrollbarWidth: "none" }}
          >
            <style>
              {`
                ::-webkit-scrollbar {
                  display:none;
                }
                ::-webkit-scrollbar-track {
                  display:none;
                }
                ::-webkit-scrollbar-thumb {
                  display:none;
                }
              `}
            </style>
            {messages.map((message, index) => (
              <div key={index} className="my-3">
                <ChatMessage message={message} />
              </div>
            ))}
            {loading && (
              <div className="my-3">
                <ChatLoader loading={loading} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {loggedIn ? (
            <div className="relative h-fit pt-[2rem]">
              <img
                src="/images/input menu.svg"
                className="absolute left-[11px] bottom-[11px] h-6 w-6 cursor-pointer"
                alt=""
                onClick={() => setShowHelpCards(!showHelpCards)}
              />
              <input
                className="text-md flex h-12 w-full items-center  bg-white pl-10 pr-[45px] font-poppins text-black shadow-xl"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Send a message…"
                onKeyUp={(e) => {
                  if (e.key === "Enter" && input) {
                    handleSend({ response: input, responder: "USER" });
                  }
                }}
              />
              <div className="absolute right-[11px] bottom-[15px] border-l border-[#7d7d7d] pl-[15px]">
                <img
                  src="/images/send.svg"
                  className=" h-4 w-4 cursor-pointer"
                  alt=""
                  onClick={() => {
                    if (input)
                      handleSend({ response: input, responder: "USER" });
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="px-10 font-poppins text-white">
              Log in with your wallet to chat
            </div>
          )}
        </div>

        {showHelpCards && (
          <div className="h-full w-[30%] border-l border-white px-5">
            <div className="flex w-full items-start justify-between py-[30px]">
              <span className="font-neutral font-bold text-white ">
                Help cards
              </span>
              <img
                onClick={() => setShowHelpCards(false)}
                src="/images/close white.svg"
                alt=""
                className="cursor-pointer"
              />
            </div>
            <div
              className="flex h-[85%] w-full flex-col overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <style>
                {`
                ::-webkit-scrollbar {
                  display:none;
                }
                ::-webkit-scrollbar-track {
                  display:none;
                }
                ::-webkit-scrollbar-thumb {
                  display:none;
                }
              `}
              </style>
              <div
                className="mb-[30px] w-full cursor-pointer border-r-2 border-white bg-[#7209B7] px-4  pt-[15px] pb-[20px] font-bungee text-white shadow-[3px_3px_0__white]"
                onClick={(e: any) => {
                  const message = e.target.innerText;
                  handleSend({
                    response: "Show me the latest nft Collections here.",
                    responder: "USER",
                  });
                }}
              >
                Show me the latest nft Collections here.
              </div>

              <div
                className="mb-[30px] w-full cursor-pointer border-r-2 border-white bg-[#F72585] px-4  pt-[15px] pb-[20px] font-bungee text-white shadow-[3px_3px_0__white]"
                onClick={(e: any) => {
                  const message = e.target.innerText;
                  handleSend({
                    response:
                      "Show me the most expensive items in the polygon ape collection",
                    responder: "USER",
                  });
                }}
              >
                Show me the most expensive items in the polygon ape collection
              </div>

              <div
                className="mb-[30px] w-full cursor-pointer border-r-2 border-white bg-[#FFB400] px-4  pt-[15px] pb-[20px] font-bungee  text-black shadow-[3px_3px_0__white]"
                onClick={(e: any) => {
                  const message = e.target.innerText;
                  handleSend({
                    response:
                      "Show my NFTs that are currently listed for sale.",
                    responder: "USER",
                  });
                }}
              >
                Show my NFTs that are currently listed for sale.
              </div>

              <div
                className="mb-[30px] w-full cursor-pointer border-r-2 border-white bg-[#4361EE] px-4  pt-[15px] pb-[20px] font-bungee text-white shadow-[3px_3px_0__white]"
                onClick={(e: any) => {
                  const message = e.target.innerText;
                  handleSend({
                    response: "What's my wallet address?",
                    responder: "USER",
                  });
                }}
              >
                What's my wallet address?
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
