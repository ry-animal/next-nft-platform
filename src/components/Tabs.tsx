import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SelectBox from "./SelectBox";
import { IconDown } from "../assets/IconDown";
import { IconSort } from "../assets/IconSort";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type Props = {
  tabs: Tab[];
  filtering_tools?: {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    showONTabIndex: number;
  };
  onChange?: (tabIndex: number) => void;
};
const Tabs: React.FC<Props> = ({ tabs, filtering_tools, onChange }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="flex flex-col ">
      <div className="mb-6 flex flex-col items-center justify-between px-4 md:mb-12 md:flex-row md:px-8">
        <div className="flex w-full items-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${
                activeTabIndex === index
                  ? "border-b-2 border-black font-bungee text-black"
                  : "border-b border-transparent font-bungeeshade text-gray-500 hover:text-gray-700"
              } px-3 pb-2 text-[16px] md:py-4 md:px-6 md:text-[25px]`}
              onClick={() => {
                setActiveTabIndex(index);
                onChange && onChange(index);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {filtering_tools &&
          activeTabIndex === filtering_tools.showONTabIndex && (
            <div className="mt-4 flex w-full items-center justify-between md:mt-[0]">
              <SearchInput
                onChange={filtering_tools.handleSearch}
                light={false}
                containerClassName="w-full md:w-[170px]"
                className="pr-8 text-black"
              />

              {/* <SelectBox
                className="h-full w-full appearance-none border border-black bg-transparent pb-2 pl-4 pr-10 text-left font-neutral text-gray-400 placeholder-gray-400 focus:outline-none"
                containerClassName="mr-[15px] h-10 w-[275px]"
                Icon={
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <IconDown fill="#000000" />
                  </div>
                }
              >
                <option value="" disabled selected>
                  PHOTOGRAPHER
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </SelectBox> */}

              {/* <SelectBox
                containerClassName="mr-15 h-10 w-[185px] overflow-x-hidden border border-black"
                className="h-full  w-[120%] appearance-none  bg-transparent pl-10 pr-10 font-neutral text-gray-400 placeholder-gray-400 focus:outline-none"
                Icon={
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <IconSort fill="#000000" />
                  </div>
                }
              >
                <option value="" disabled selected>
                  Sort by
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </SelectBox> */}
            </div>
          )}
      </div>
      <div className="mt-4 w-full border-t border-black ">
        {tabs[activeTabIndex]?.content}
      </div>
    </div>
  );
};

export default Tabs;
