import * as React from "react";
import { SVGProps } from "react";

interface IconSortProps extends SVGProps<SVGSVGElement> {
  color?: string;
}
export const IconSort = (props: IconSortProps) => (
  <svg
    className={`h-6 w-6 ${props.color ? props.color : "text-white"}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <rect x="2" y="3" width="16" height="2" rx="1" />
    <rect x="2" y="8" width="12" height="2" rx="1" />
    <rect x="2" y="13" width="8" height="2" rx="1" />
  </svg>
);
