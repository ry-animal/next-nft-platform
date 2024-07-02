// System
import React, { FunctionComponent, SVGProps } from "react";

interface IProps extends SVGProps<any> {
  color?: string;
}
// Asset
export const IconCard: FunctionComponent<IProps> = ({ color, ...rest }) => {
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
      <path
        d="M20 13H13V20H20V13Z"
        stroke={`${fill ?? "white"}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31 13H24V20H31V13Z"
        stroke={`${fill ?? "white"}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31 24H24V31H31V24Z"
        stroke={`${fill ?? "white"}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 24H13V31H20V24Z"
        stroke={`${fill ?? "white"}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="0.5"
        y="0.5"
        width="43"
        height="43"
        rx="7.5"
        stroke={`${fill ?? "white"}`}
      />
    </svg>
  );
};

// Make it clear
export default IconCard;
