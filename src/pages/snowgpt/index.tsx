import { type NextPage } from "next";
import { api } from "../../utils/api";
import { Scaffold } from "../../components/Scaffold";
import { useContext, useEffect, useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { Collection, Nft } from "@prisma/client";
import AuthContext from "../../contexts/AuthContext";
import { SCChatGPT } from "../../core/ai/chatPlugin";
import { IconSnowcrash } from "../../assets/IconSnowcrash";

import { compressAddress } from "../../core/web3/utils";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Header from "../../components/header";
import { ChatHistory } from "../../components/snowchat/ChatHistory";
import { GetStarted } from "../../components/snowchat/GetStarted";
import { Conversation } from "../../types";
import {
  AIChatMessage,
  HumanChatMessage,
  SystemChatMessage,
} from "langchain/schema";
import { Chat } from "../../components/snowchat/chat/Chat";
import { Results, SCChatMessage } from "../../server/snowgpt/types";
import { weiToMatic } from "../../core/web3/currency";

const Snow: NextPage = () => {
  const { signer, wallet } = useContext(AuthContext);

  const [chathistory, setChatHistory] = useState<Conversation[]>([
    {
      timeStamp: new Date().getTime(),
      messages: [] as SCChatMessage[],
      name: "Conversation 1",
    },
  ]);
  const [currentChat, setCurrentChat] = useState<number>(0);
  const messages =
    chathistory[currentChat] && chathistory[currentChat]!.messages
      ? chathistory[currentChat]!.messages
      : ([] as SCChatMessage[]);
  function setMessages(msgs: SCChatMessage[], title?: string) {
    console.log(
      "###old messages",
      JSON.stringify(chathistory[currentChat]!.messages)
    );
    console.log("setting messages", JSON.stringify(msgs));
    chathistory[currentChat]!.messages = msgs;
    if (title) chathistory[currentChat]!.name = title;
  }
  //const [messages, setMessages] = useState<SCChatMessage[]>([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [address, setAddress] = useState("");
  useEffect(() => {
    checkWallet();
  }, [wallet, signer]);

  async function checkWallet() {
    console.log("checking wallet");

    if (wallet != "none") {
      getUserAddress();
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }

  useEffect(() => {
    if (address.length == 0) return;
    setUser();
  }, [address, messages]);

  async function getUserAddress(): Promise<string> {
    let ad = await signer?.getAddress();
    if (ad) setAddress(ad);
    return ad!;
  }

  async function setUser() {
    if (messages.length > 0) return;

    const welcome = `Hi ${
      address ? compressAddress(address) : ""
    } ! I am Snowchat, your web3 AI assistant. How can I help you?`;
    setLoading(undefined);
    setMessages([{ response: welcome, responder: "ASSISTANT" }]);
  }

  const [ai, _] = useState<SCChatGPT>(new SCChatGPT());

  const [counter, setcounter] = useState(0);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState<string | undefined>(undefined);

  const aiMutation = api.ai.chat.useMutation();
  const handleReset = () => {
    setMessages([]);
  };

  function getMessagesString(): string {
    let output: string = "";
    for (let i = 0; i < messages.length; i++) {
      const type = messages[i]?.responder;
      output = output + `[${type}]: ${(messages[i] as any).response}` + "\n";
    }
    return output;
  }

  async function handleSend(
    message: SCChatMessage,
    extra?: SCChatMessage
  ): Promise<any> {
    setcounter(counter + 1);
    setMessages(extra ? [...messages, extra, message] : [...messages, message]);
    setInput("");
    console.log("handleSend" + message);
    setLoading(extra ? "Querying :" + message.queryString : "Thinking...");
    const userAddress = await getUserAddress();
    if (!userAddress) return;
    const balance = weiToMatic((await signer?.getBalance())?.toString()!);
    const response = await aiMutation.mutateAsync({
      address: userAddress!,
      balance: balance,
      prompt: getMessagesString() + "[USER]: " + message.response,
      query: message.queryString,
    });

    setLoading(undefined);
    if (response.response.queryString) {
      console.log("response.response.response>>>>", response.response.response);

      handleSend(
        {
          responder: "ASSISTANT",
          response:
            response.response.response == ""
              ? "Sure, let me look that up for you"
              : response.response.response,
          queryString: response.response.queryString,
        },
        message
      );
      return;
    }

    if (response.status !== "success") {
      setLoading(undefined);
      if (response && response.response)
        if (response.response.result != undefined) {
          setMessages(
            extra
              ? [...messages, extra, message, response.response]
              : [...messages, message, response.response]
          );
          return;
        }
    }
    if (response && response.response) {
      console.log("response.response", response.response);

      setMessages(
        extra
          ? [...messages, extra, message, response.response]
          : [...messages, message, response.response]
      );
    }
  }
  return (
    <Scaffold noise={0.2} dark={true} hideFooter>
      <div className="flex h-full w-screen flex-col items-center justify-center  text-gray-800 ">
        <div className=" w-full ">
          {" "}
          <Header dark></Header>
        </div>
        <div className="relative flex h-full w-full flex-1 flex-row overflow-y-auto">
          <div className="w-[18%]">
            <ChatHistory
              history={chathistory}
              currentChat={currentChat}
              setChatHistory={setChatHistory}
              setCurrentChat={setCurrentChat}
            ></ChatHistory>
          </div>
          <div className="flex h-full w-[82%] flex-col">
            <div className="h-full flex-1">
              {counter > 0 ? (
                <Chat
                  input={input}
                  setInput={setInput}
                  handleSend={handleSend}
                  loggedIn={loggedIn}
                  messages={messages}
                  loading={loading}
                  onSend={handleSend}
                  onReset={handleReset}
                />
              ) : (
                <GetStarted
                  input={input}
                  setInput={setInput}
                  handleSend={handleSend}
                  loggedIn={loggedIn}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Scaffold>
  );
};

export default Snow;
