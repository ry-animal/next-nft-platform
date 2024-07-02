import React, { SelectHTMLAttributes } from "react";
import { IconDown } from "../assets/IconDown";

interface SelectBoxProps extends SelectHTMLAttributes<HTMLSelectElement> {
  containerClassName?: string;
  Icon?: React.ReactNode;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  containerClassName,
  Icon,
  children,
  ...rest
}) => {
  return (
    <div className={`relative ${containerClassName ? containerClassName : ""}`}>
      <select {...rest} className={rest.className}>
        {children}
      </select>
      {Icon && Icon}
    </div>
  );
};

export default SelectBox;
