import React, { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  light: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  containerClassName,
  light,
  ...rest
}) => {
  return (
    <div
      className={`relative mr-[15px] h-10 ${
        containerClassName ? containerClassName : ""
      }`}
    >
      <input
        placeholder="Search"
        {...rest}
        className={`h-full w-full border border-${
          light ? "white" : "black"
        } bg-transparent pt-3 pb-2 pl-4 pr-4 font-neutral placeholder-gray-400 focus:outline-none ${
          rest.className
        }`}
      />
      <div className="absolute inset-y-5 right-0 flex items-center pr-3">
        <img
          src={light ? "/images/search.svg" : "/images/search black.svg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default SearchInput;
