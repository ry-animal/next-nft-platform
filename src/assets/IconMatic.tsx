import * as React from "react";
import { SVGProps } from "react";

export const IconMatic = (
  { width = 666, height = 666, size = 52 },
  props: SVGProps<SVGSVGElement>
) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${width} ${height}`}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#FFFFFF"
      d="M399.8,45.4L399.8,45.4C540.2,45.4,654,159.2,654,299.6l0,0c0,140.4-113.8,254.1-254.1,254.1l0,0
	c-140.4,0-254.1-113.8-254.1-254.1l0,0C145.7,159.2,259.5,45.4,399.8,45.4z"
    />
    <path
      fill="#000000"
      d="M483.1,244.2c-6.1-3.5-13.9-3.5-20.8,0L413.7,273l-33,18.3L333,320c-6.1,3.5-13.9,3.5-20.8,0l-37.3-22.7
			c-6.1-3.5-10.4-10.5-10.4-18.3v-43.6c0-7,3.5-13.9,10.4-18.3l37.3-21.8c6.1-3.5,13.9-3.5,20.8,0l37.3,22.7
			c6.1,3.5,10.4,10.5,10.4,18.3v28.8l33-19.2v-29.6c0-7-3.5-13.9-10.4-18.3l-69.4-41c-6.1-3.5-13.9-3.5-20.8,0L242,198.9
			c-6.9,3.5-10.4,10.5-10.4,17.4v81.9c0,7,3.5,13.9,10.4,18.3l70.3,41c6.1,3.5,13.9,3.5,20.8,0l47.7-27.9l33-19.2l47.7-27.9
			c6.1-3.5,13.9-3.5,20.8,0l37.3,21.8c6.1,3.5,10.4,10.5,10.4,18.3v43.6c0,7-3.5,13.9-10.4,18.3l-36.4,21.8
			c-6.1,3.5-13.9,3.5-20.8,0L425,384.5c-6.1-3.5-10.4-10.5-10.4-18.3v-27.9l-33,19.2v28.8c0,7,3.5,13.9,10.4,18.3l70.3,41
			c6.1,3.5,13.9,3.5,20.8,0l70.3-41c6.1-3.5,10.4-10.5,10.4-18.3v-82.8c0-7-3.5-13.9-10.4-18.3L483.1,244.2z"
    />
  </svg>
);
