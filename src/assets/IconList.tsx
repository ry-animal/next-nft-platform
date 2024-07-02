// System
import React, { FunctionComponent, SVGProps } from "react";

interface IProps extends SVGProps<any> {
  color?: string;
}
// Asset
export const IconList: FunctionComponent<IProps> = ({ color, ...rest }) => {
  // Fill color
  const fill = color;

  // Render
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        x="0.5"
        y="0.5"
        width="43"
        height="43"
        rx="7.5"
        fill={`${fill ?? "#2A2A2A"}`}
      />
      <path
        d="M18 16H31"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 22H31"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18 28H31"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 16H13.01"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 22H13.01"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 28H13.01"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect x="0.5" y="0.5" width="43" height="43" rx="7.5" stroke="#2A2A2A" />
    </svg>
  );
};

// Make it clear
export default IconList;
