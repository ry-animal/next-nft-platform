import * as React from "react";
import { SVGProps } from "react";

export const IconWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 20}
    height={props.height || 16}
    viewBox="0 0 20 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 0H4C1.79 0 0 1.79 0 4V12C0 14.21 1.79 16 4 16H16C18.21 16 20 14.21 20 12V4C20 1.79 18.21 0 16 0ZM14.14 9.77C13.9 9.97 13.57 10.05 13.26 9.97L2.15 7.25C2.45 6.52 3.16 6 4 6H16C16.67 6 17.26 6.34 17.63 6.84L14.14 9.77ZM4 2H16C17.1 2 18 2.9 18 4V4.55C17.41 4.21 16.73 4 16 4H4C3.27 4 2.59 4.21 2 4.55V4C2 2.9 2.9 2 4 2Z"
      fill="currentColor"
    />
  </svg>
);
