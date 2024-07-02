import { HumanChatMessage } from "langchain/schema";
import { SCChatMessage } from "../../server/snowgpt/types";

interface Props {
  loggedIn: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  input: string;
  handleSend: (message: SCChatMessage) => Promise<any>;
}

export const GetStarted = ({
  loggedIn,
  input,
  setInput,
  handleSend,
}: Props) => {
  return (
    <div className="flex h-full w-full flex-col font-poppins text-black ">
      <div className="flex items-center pb-[25px] pt-[50px] pl-[40px] font-neutral text-[30px] font-semibold text-white">
        <img src="/images/AI.svg" className="mr-3" alt="" /> GET STARTED
      </div>

      <div className="mb-[20px] flex h-[92%] w-full flex-col overflow-y-scroll pr-4">
        <div className="mb-[25px] flex items-center justify-between">
          <div className="w-fit p-10 text-white ">Request NFTs you wish:</div>
          <div className="flex w-[70%]">
            <button
              onClick={(e: any) => {
                handleSend({
                  response: "Show me the latest nft Collections",
                  responder: "USER",
                });
              }}
              className="mr-7 h-full w-[230px] bg-[#7209B7] px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-white shadow-[3px_3px_0__white]"
            >
              Show me the latest nft Collections here.
            </button>

            <button
              onClick={(e: any) => {
                handleSend({
                  response: "Show me the latest nft Collections",
                  responder: "USER",
                });
              }}
              className="mr-7 h-full w-[230px] bg-[#7209B7] px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-white shadow-[3px_3px_0__white]"
            >
              Show me the latest nft Collections here.
            </button>

            <button
              onClick={(e: any) => {
                handleSend({
                  response: "Show me the latest nft Collections",
                  responder: "USER",
                });
              }}
              className="mr-7 h-full w-[230px] bg-[#7209B7] px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-white shadow-[3px_3px_0__white]"
            >
              Show me the latest nft Collections here.
            </button>
          </div>
        </div>

        <div className="mb-[25px] flex items-center justify-between">
          <div className=" w-fit p-10 text-white ">Collection Information:</div>
          <div className="flex w-[70%]">
            <button
              onClick={(e: any) => {
                handleSend({
                  response:
                    "What is the total value of the alien ape invasion club?",
                  responder: "USER",
                });
              }}
              className="mr-7 h-full w-[230px] bg-[#F72585] p-2 px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-white shadow-[3px_3px_0__white]"
            >
              What is the total value of the alien ape invasion club?
            </button>

            <button
              onClick={(e: any) => {
                handleSend({
                  response:
                    "What is the total value of the alien ape invasion club?",
                  responder: "USER",
                });
              }}
              className="mr-7 h-full w-[230px] bg-[#F72585] p-2 px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-white shadow-[3px_3px_0__white]"
            >
              What is the total value of the alien ape invasion club?
            </button>

            <button
              onClick={(e: any) => {
                handleSend({
                  response:
                    "What is the total value of the alien ape invasion club?",
                  responder: "USER",
                });
              }}
              className="mr-7 h-full w-[230px] bg-[#F72585] p-2 px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-white shadow-[3px_3px_0__white]"
            >
              What is the total value of the alien ape invasion club?
            </button>
          </div>
        </div>
        <div className="mb-[25px] flex items-center justify-between">
          <div className=" w-fit p-10 text-white ">Access your assets:</div>
          <div className="flex w-[70%]">
            <button
              onClick={(e: any) => {
                handleSend({
                  response: "Show my NFTs that are currently listed for sale.?",
                  responder: "USER",
                });
              }}
              className="mr-7 h-full w-[230px] bg-[#FFB400] p-2 px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-black  shadow-[3px_3px_0__white]"
            >
              Show my NFTs that are currently listed for sale.
            </button>

            <button
              onClick={(e: any) => {
                handleSend({
                  response: "Show my NFTs that are currently listed for sale.?",
                  responder: "USER",
                });
              }}
              className="mr-7 h-full w-[230px] bg-[#FFB400] p-2 px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-black  shadow-[3px_3px_0__white]"
            >
              Show my NFTs that are currently listed for sale.
            </button>

            <button
              onClick={(e: any) => {
                handleSend({
                  response: "Show my NFTs that are currently listed for sale.?",
                  responder: "USER",
                });
              }}
              className="mr-7 h-full w-[230px] bg-[#FFB400] p-2 px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-black  shadow-[3px_3px_0__white]"
            >
              Show my NFTs that are currently listed for sale.
            </button>
          </div>
        </div>
        {false && (
          <div className="flex items-center justify-between">
            <button className="w-fit p-10 text-white ">
              Get answer about all NFTs:
            </button>
            <div className="flex w-[70%]">
              <button className="mr-7 h-full w-[230px] bg-[#4361EE] p-2 px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-white shadow-[3px_3px_0__white]">
                Who has created the beanz collection?
              </button>

              <button className="mr-7 h-full w-[230px] bg-[#4361EE] p-2 px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-white shadow-[3px_3px_0__white]">
                Who has created the beanz collection?
              </button>

              <button className="mr-7 h-full w-[230px] bg-[#4361EE] p-2 px-[16px] pt-[15px] pb-[22px] font-bungee text-[16px] text-white shadow-[3px_3px_0__white]">
                Who has created the beanz collection?
              </button>
            </div>
          </div>
        )}
      </div>
      {loggedIn ? (
        <div className=" h-[11%] px-10">
          {" "}
          <input
            className="text-md flex h-12 w-full items-center  bg-white px-3 font-poppins text-black shadow-xl"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Send a message…"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSend({ response: input, responder: "USER" });
              }
            }}
          />
        </div>
      ) : (
        <div className="h-[11%] w-full bg-white p-5 font-poppins font-semibold text-black">
          Log in with your wallet to chat
        </div>
      )}
    </div>
  );
};
