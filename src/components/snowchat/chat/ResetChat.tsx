import { FC } from "react";

interface Props {
  onReset: () => void;
}

export const ResetChat: FC<Props> = ({ onReset }) => {
  return (
    <div className="flex flex-row items-center">
      <button
        className="rounded-lg bg-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-300 sm:text-base"
        onClick={() => onReset()}
      >
        Reset
      </button>
    </div>
  );
};
