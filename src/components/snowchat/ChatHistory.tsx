import Link from "next/link";
import Image from "next/image";
import { Conversation } from "../../types";
import SearchInput from "../SearchInput";
import { SCChatMessage } from "../../server/snowgpt/types";

interface Props {
  history: Conversation[];
  currentChat: number;
  setChatHistory: (history: Conversation[]) => void;
  setCurrentChat: (chat: number) => void;
}

export const ChatHistory = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col border-r border-white bg-transparent text-white">
      <div className=" flex w-full items-center justify-center py-[30px]">
        <button
          onClick={() => {
            const newChat: Conversation = {
              timeStamp: new Date().getTime(),
              messages: [] as SCChatMessage[],
              name: "Conversation " + (props.history.length + 1),
            };
            props.setChatHistory([...props.history, newChat]);
            props.setCurrentChat(props.history.length);
          }}
          className="flex w-[150px] items-center justify-center border border-black bg-white py-1.5 font-poppins text-black shadow-[3px_3px_0__white]"
        >
          <img src="/images/new chat.svg" alt="" className="mr-2" />
          <span>New Chat</span>
        </button>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full items-start justify-between px-5 pt-[20px] pb-[25px]">
          <span className="font-neutral font-bold text-white ">
            Chat History
          </span>
          <img
            src="/images/trash white.svg"
            alt=""
            className="cursor-pointer"
          />
        </div>
        {props.history.map((message, index) => {
          return (
            <button
              onClick={() => {
                props.setCurrentChat(index);
              }}
              className={
                " mb-[10px] flex w-full flex-row items-center justify-between  py-[12px] px-[20px] " +
                (props.currentChat !== index ? "bg-[#353535]" : "bg-[#FFB400]")
              }
            >
              <div className=" font-poppins text-[14px] font-semibold">
                {message.name}
              </div>
              <div className=" font-poppins text-[12px] font-medium">
                <span className="mr-[2px]">
                  {new Date(message.timeStamp).getDate()}
                </span>
                {new Date(message.timeStamp).toLocaleString("default", {
                  month: "long",
                })}
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-auto mb-[20px] w-full">
        <SearchInput
          light={true}
          style={{ background: "#383838", padding: ".5rem 1rem" }}
          className="border-0 font-poppins"
          containerClassName="mx-auto w-[90%]"
        />
      </div>
    </div>
  );
};
