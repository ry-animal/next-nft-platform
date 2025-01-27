import * as React from "react";
import { SVGProps } from "react";

export const IconCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 20V0H10L16 6V9.1L8 17.075V20H0ZM10 20V17.875L15.15 12.7L17.3 14.8L12.125 20H10ZM18.025 14.1L15.9 11.975L17.325 10.55L19.4 12.725L18.025 14.1ZM9 7H14L9 2V7Z"
      fill="black"
    />
  </svg>
);
