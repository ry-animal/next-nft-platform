// System
import React, { FunctionComponent, SVGProps } from "react";

interface IProps extends SVGProps<any> {
  color?: string;
}
// Asset
export const IconLinkedIn: FunctionComponent<IProps> = ({ color, ...rest }) => {
  // Fill color
  const fill = color;

  // Render
  return (
    <svg
      className="hover:fill-neutral-100"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M25.93 0C27.075 0 28 .899 28 2.006v23.989C28 27.102 27.074 28 25.93 28H2.07C.926 28 0 27.102 0 25.995V2.005C0 .9.927 0 2.07 0h23.86zM8.307 11.05H4.164v12.47h4.142V11.05zm10.166-.292c-2.144 0-3.134 1.152-3.692 1.997l-.041.061v-1.765H10.6c.013.293.02 1.218.022 2.442v.542l.001.282v1.193c-.002 3.185-.02 7.012-.023 7.845l-.001.165h4.141v-6.963c0-.372.027-.745.137-1.011.3-.745.98-1.516 2.125-1.516 1.498 0 2.098 1.143 2.098 2.82v6.67h4.141v-7.15c0-3.83-2.043-5.612-4.768-5.612zM6.263 5.04c-1.417 0-2.343.93-2.343 2.154 0 1.197.899 2.154 2.289 2.154h.026c1.445 0 2.344-.957 2.344-2.153-.027-1.224-.9-2.155-2.316-2.155z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

// Make it clear
export default IconLinkedIn;
