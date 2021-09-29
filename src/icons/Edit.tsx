import React from 'react';
import { palette } from '../theme/colors';
import { IconProps } from './types';

export const IconEdit = ({
  color = 'inherit' ?? palette.colors.gray.darkest,
}: IconProps): JSX.Element => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="0.473633"
        y="0.259033"
        width="23.393"
        height="22.1285"
        transform="rotate(0.871677 0.473633 0.259033)"
        fill={color}
        fillOpacity="0.5"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0"
            transform="translate(0.027026) scale(0.0315316 0.0333333)"
          />
        </pattern>
        <image
          id="image0"
          width="30"
          height="30"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAuklEQVRIie3VoQrCQAAG4A+x+xJisxnMghisRl9iyahN38Jq8Wl8AItVMVk16GAOhxN2N4T9cOF2cN/9HOxo8udJcMEBg1joCvfMuGIYG83ib81boU/ySgfb0EhR63MIaFUCT6pG0403ubVFZm0ZCk3Hp+b5b5WjRc2joMHwMmiUO23QBv05E8/39Bta6c8hzbwOFMZ1oNCLifZzG3cxwgy3UCisFbeahkLhKNI9tnPz0wvdYR8SbhItDwJbnBVPxJOqAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};
