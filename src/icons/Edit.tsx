import React from "react";
import { palette } from "../theme/colors";
import { IconProps } from "./types";

export const IconEdit = ({
  color = "inherit" ?? palette.colors.gray.darkest,
}: IconProps): JSX.Element => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.473633"
        y="0.259033"
        width="23.393"
        height="22.1285"
        transform="rotate(0.871677 0.473633 0.259033)"
        fill={color}
        fill-opacity="0.5"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="translate(0.027026) scale(0.0315316 0.0333333)" />
        </pattern>
        <image id="image0" width="30" height="30" />
      </defs>
    </svg>
  );
};
