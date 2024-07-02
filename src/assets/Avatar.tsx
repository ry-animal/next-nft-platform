import * as React from "react";
import { SVGProps } from "react";

export const Avatar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || "150"}
    height={props.height || "150"}
    viewBox="0 0 150 150"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="2.5"
      y="2.5"
      width="145"
      height="145"
      fill="white"
      stroke="black"
      strokeWidth="5"
    />
    <path d="M113.331 36.5234H38.1641V112.648H113.331V36.5234Z" fill="black" />
    <mask
      id="mask0_356_10688"
      maskUnits="userSpaceOnUse"
      x="38"
      y="36"
      width="76"
      height="77"
    >
      <path
        d="M113.331 36.5234H38.1641V112.648H113.331V36.5234Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_356_10688)">
      <path
        d="M122.002 32.9889L105.634 46.5765L75.9996 22L46.4496 46.5595L29.2931 32.3945C29.1422 34.5345 29.008 36.6746 28.8906 38.7976L46.4496 53.3024L75.9996 28.7938L105.634 53.3024L121.683 40.0035C121.767 37.6597 121.918 35.3158 122.002 32.9889Z"
        fill="white"
      />
      <path
        d="M121.263 52.267L105.633 65.2431L75.9993 40.6836L46.4492 65.2431L28.3536 50.2798C28.3536 52.4878 28.2027 54.6788 28.1523 56.8698L46.4492 71.986L75.9993 47.4774L105.633 71.986L121.113 59.1457L121.263 52.267Z"
        fill="white"
      />
      <path
        d="M120.893 71.2563L105.632 83.9097L75.9979 59.3672L46.4478 83.9097L28 68.6747V71.9357V75.4515L46.3136 90.7375L75.9979 66.161L105.632 90.6526L120.725 78.0841L120.893 71.2563Z"
        fill="white"
      />
      <path
        d="M120.592 91.006C120.592 90.7173 120.592 90.4455 120.592 90.1738L105.616 102.589L75.9984 78.0469L46.4483 102.589L28.3359 87.6261C28.3359 89.936 28.4869 92.2629 28.5875 94.5728L46.4483 109.332L75.9984 84.8407L105.632 109.332L120.458 97.0355C120.508 95.0313 120.558 93.0102 120.592 91.006Z"
        fill="white"
      />
      <path
        d="M120.072 109.282L105.633 121.171L75.9988 96.7305L46.4487 121.256L29.0742 106.921C29.1748 109.248 29.2587 111.558 29.3593 113.885L46.4487 127.999L75.9988 103.524L105.633 127.999L119.871 116.195L120.072 109.282Z"
        fill="white"
      />
    </g>
  </svg>
);
