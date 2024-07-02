import * as React from "react";
import { SVGProps } from "react";

export const IconMore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 20}
    height={props.height || 20}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.25 0V11.25H0V13.75H13.75V0H11.25ZM17.5 6.25V17.5H6.25V20H20V6.25H17.5Z"
      fill="currentcolor"
    />
  </svg>
);
