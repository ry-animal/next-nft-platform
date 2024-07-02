import { EyeIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import { IconSnowcrash } from "../../../assets/IconSnowcrash";

interface Props {
  loading: string | undefined;
}

export const ChatLoader: FC<Props> = (props: Props) => {
  console.log("ChatLoader.tsx: ChatLoader: props: ", props);
  return (
    <div className="flex-start flex flex-col">
      <div
        className={`flex w-fit items-center  px-4 py-2 text-white`}
        style={{ overflowWrap: "anywhere" }}
      >
        <div className="animate-ping">
          <IconSnowcrash width={16} height={16} />
        </div>
        <div className="pl-6 font-bungee text-white">{props.loading}</div>
      </div>
    </div>
  );
};
