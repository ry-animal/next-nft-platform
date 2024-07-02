// System
import React, { FunctionComponent, SVGProps } from "react";

interface IProps extends SVGProps<any> {
  color?: string;
}
// Asset
export const IconTwitter: FunctionComponent<IProps> = ({ color, ...rest }) => {
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
        d="M7.907 26.6c11.286 0 17.815-8.762 17.815-17.078 0-.229 1.604-1.605 2.29-4.476a.687.687 0 0 0-.96-.797c-1.37.629-2.762.13-3.366-.586a6.034 6.034 0 0 0-8.681-.272c-1.594 1.537-2.27 3.826-1.776 6.011-5.219.373-8.803-2.1-11.75-5.491C1.1 3.47.394 3.702.315 4.285-.122 7.527-.26 15.41 7.554 19.939c-1.357 1.95-4.012 3.1-6.968 3.594-.655.11-.81 1.017-.212 1.31a17.012 17.012 0 0 0 7.533 1.752"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

// Make it clear
export default IconTwitter;
