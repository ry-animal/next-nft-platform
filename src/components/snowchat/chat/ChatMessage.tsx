import {
  AIChatMessage,
  HumanChatMessage,
  SystemChatMessage,
  MessageType,
} from "langchain/schema";
import { ChatCompletionRequestMessage } from "openai";
import { FC } from "react";
import { Results, SCChatMessage } from "../../../server/snowgpt/types";
import NftCard from "./OpenSeaNFTCard";
import Link from "next/link";

interface Props {
  message: SCChatMessage;
}

export const ChatMessage: FC<Props> = ({ message }) => {
  if (message.result != undefined && message.query) {
    //getting results
    return (
      <div className="w-full">
        <div className="grid flex-1 grid-cols-1 md:grid-cols-3">
          {message.result &&
            message.result.map((nft) => {
              return (
                <div key={nft.id} className="m-2  p-4">
                  <NftCard nft={nft}></NftCard>
                  <Link href={nft.permalink} target="_blank">
                    <div className="mt-[15px] flex cursor-pointer items-center justify-center border border-white py-[10px] px-[20px] font-neutral text-[14px] text-white">
                      <span>Check it out</span>{" "}
                      <img
                        src="/images/arrow white.svg"
                        className="ml-2"
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
        {message.result && message.result.length === 0 && (
          <div className="p-5 font-bungee text-white">No results found</div>
        )}
      </div>
    );
  } else {
    return (
      <div
        className={`flex flex-col ${
          message.responder !== "USER" ? "items-start" : "items-end"
        }`}
      >
        <div
          className={`flex w-full items-start ${
            message.responder !== "USER" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <img
            src={
              message.responder !== "USER"
                ? "/images/snowGptAvatar.svg"
                : "/images/humanAvatar.svg"
            }
            className={message.responder !== "USER" ? "mr-[10px]" : "ml-[10px]"}
            alt=""
          />
          <div
            className={`flex items-center ${
              message.responder !== "USER"
                ? "bg-[#EFEFD0] text-black"
                : "bg-[#4361EE] text-white"
            } max-w-[67%] whitespace-pre-wrap  px-3 py-2 font-poppins`}
            style={{ overflowWrap: "anywhere" }}
          >
            {message.response}
          </div>
          {message.responder !== "USER" && (
            <div className="ml-[10px] flex flex-col items-start justify-start">
              <img src="/images/like.svg" alt="" className="cursor-pointer" />
              <img
                src="/images/dislike.svg"
                className="mt-[12px] cursor-pointer"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    );
  }
};
