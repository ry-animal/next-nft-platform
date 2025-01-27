// System
import React, { SVGProps } from "react";

interface IProps extends SVGProps<any> {
  color?: string;
}

// Asset
export const IconYoutube = ({ color, ...rest }: IProps) => {
  // Fill color
  const fill = color;

  // Render
  return (
    <svg
      className="hover:fill-neutral-100"
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M23.4985 2.50346C23.2225 1.51804 22.4092 0.741958 21.3766 0.478583C19.505 0 12 0 12 0C12 0 4.49503 0 2.62336 0.478583C1.59077 0.742 0.777523 1.51804 0.501503 2.50346C0 4.28958 0 8.01617 0 8.01617C0 8.01617 0 11.7428 0.501503 13.5289C0.777523 14.5143 1.59077 15.258 2.62336 15.5214C4.49503 16 12 16 12 16C12 16 19.505 16 21.3766 15.5214C22.4092 15.258 23.2225 14.5143 23.4985 13.5289C24 11.7428 24 8.01617 24 8.01617C24 8.01617 24 4.28958 23.4985 2.50346ZM9.54544 11.3996V4.63271L15.8181 8.01625L9.54544 11.3996Z"
        fill={fill}
      />
    </svg>
  );
};

// Make it clear
export default IconYoutube;
