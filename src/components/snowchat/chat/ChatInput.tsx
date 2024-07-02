import { FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { HumanChatMessage } from "langchain/schema";

interface Props {
  onSend: (message: HumanChatMessage) => void;
}

export const ChatInput: FC<Props> = ({ onSend }) => {
  const [content, setContent] = useState<string>();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > 4000) {
      alert("Message limit is 4000 characters");
      return;
    }

    setContent(value);
  };

  const handleSend = () => {
    if (!content) {
      alert("Please enter a message");
      return;
    }
    onSend(new HumanChatMessage(content));
    setContent("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        className="min-h-[44px] w-full rounded-lg border-2 border-neutral-200 py-2 pl-4 pr-12 focus:outline-none focus:ring-1 focus:ring-neutral-300"
        style={{ resize: "none" }}
        placeholder="Type a message..."
        value={content}
        rows={1}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button onClick={() => handleSend()}>
        <ArrowUpIcon className="absolute bottom-3 right-2 h-8 w-8 rounded-full bg-blue-500 p-1 text-white hover:cursor-pointer hover:opacity-80" />
      </button>
    </div>
  );
};
