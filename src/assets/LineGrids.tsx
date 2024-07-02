// System
import React, { FunctionComponent, SVGProps } from "react";

interface IProps extends SVGProps<any> {
  color?: string;
}
// Asset
export const LineGrid: FunctionComponent<IProps> = (props: IProps) => {
  // Fill color

  // Render
  return (
    <svg
      className="hover:fill-neutral-100"
      width={props.width}
      height={props.height}
      viewBox={`0 0 660 516`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="-4.37114e-08"
        y1="77.5"
        x2="660"
        y2="77.4999"
        stroke="url(#paint0_linear_54_1203)"
      />
      <line
        opacity="0.4"
        x1="-4.37114e-08"
        y1="197.5"
        x2="660"
        y2="197.5"
        stroke="url(#paint1_linear_54_1203)"
      />
      <line
        opacity="0.4"
        x1="-4.37114e-08"
        y1="317.5"
        x2="660"
        y2="317.5"
        stroke="url(#paint2_linear_54_1203)"
      />
      <line
        x1="-4.37114e-08"
        y1="437.5"
        x2="660"
        y2="437.5"
        stroke="url(#paint3_linear_54_1203)"
      />
      <line
        x1="540.5"
        y1="-2.18557e-08"
        x2="540.5"
        y2="516"
        stroke="url(#paint4_linear_54_1203)"
      />
      <line
        opacity="0.4"
        x1="400.5"
        y1="-2.18557e-08"
        x2="400.5"
        y2="516"
        stroke="url(#paint5_linear_54_1203)"
      />
      <line
        opacity="0.4"
        x1="260.5"
        y1="-2.18557e-08"
        x2="260.5"
        y2="516"
        stroke="url(#paint6_linear_54_1203)"
      />
      <line
        x1="120.5"
        y1="-2.18557e-08"
        x2="120.5"
        y2="516"
        stroke="url(#paint7_linear_54_1203)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_54_1203"
          x1="660"
          y1="77.4937"
          x2="5.7537e-10"
          y2="77.4937"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_54_1203"
          x1="660"
          y1="197.494"
          x2="5.7537e-10"
          y2="197.494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_54_1203"
          x1="660"
          y1="317.494"
          x2="5.7537e-10"
          y2="317.494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_54_1203"
          x1="660"
          y1="437.494"
          x2="5.7537e-10"
          y2="437.494"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_54_1203"
          x1="540.506"
          y1="516"
          x2="540.506"
          y2="1.29229e-08"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_54_1203"
          x1="400.506"
          y1="516"
          x2="400.506"
          y2="1.29229e-08"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_54_1203"
          x1="260.506"
          y1="516"
          x2="260.506"
          y2="1.29229e-08"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_54_1203"
          x1="120.506"
          y1="516"
          x2="120.506"
          y2="1.29229e-08"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="0.5" stopOpacity="0.5" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Make it clear
export default LineGrid;
