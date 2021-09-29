import React from "react";
import { palette } from "../theme/colors";
import { IconProps } from "./types";

export const IconBell = ({
  color = "inherit" ?? palette.colors.gray.darkest,
  badge = false,
}: IconProps): JSX.Element => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.067 28.5333L26.9777 25.748C25.9141 24.3232 25.3377 22.5939 25.3337 20.816V16C25.331 13.7575 24.5211 11.5909 23.0521 9.89666C21.5831 8.20238 19.5531 7.09364 17.3337 6.77329V6.66662C17.3337 6.313 17.1932 5.97386 16.9431 5.72381C16.6931 5.47377 16.3539 5.33329 16.0003 5.33329C15.6467 5.33329 15.3076 5.47377 15.0575 5.72381C14.8075 5.97386 14.667 6.313 14.667 6.66662V6.77329C12.4475 7.09364 10.4176 8.20238 8.94857 9.89666C7.47954 11.5909 6.66962 13.7575 6.66699 16V20.816C6.66318 22.5941 6.08724 24.3238 5.02433 25.7493L2.93366 28.5333C2.78509 28.7314 2.69462 28.9669 2.67238 29.2136C2.65014 29.4602 2.69702 29.7081 2.80776 29.9296C2.91849 30.1511 3.08872 30.3373 3.29935 30.4675C3.50999 30.5977 3.75271 30.6666 4.00033 30.6666H10.8563C11.1474 31.8101 11.8111 32.824 12.7426 33.5481C13.6742 34.2722 14.8204 34.6654 16.0003 34.6654C17.1802 34.6654 18.3265 34.2722 19.258 33.5481C20.1896 32.824 20.8533 31.8101 21.1443 30.6666H28.0003C28.2479 30.6666 28.4907 30.5977 28.7013 30.4675C28.9119 30.3373 29.0822 30.1511 29.1929 29.9296C29.3036 29.7081 29.3505 29.4602 29.3283 29.2136C29.306 28.9669 29.2156 28.7314 29.067 28.5333ZM16.0003 32C15.5343 31.9986 15.0769 31.8746 14.6739 31.6406C14.2709 31.4066 13.9365 31.0707 13.7043 30.6666H18.2963C18.0641 31.0707 17.7298 31.4066 17.3268 31.6406C16.9238 31.8746 16.4663 31.9986 16.0003 32ZM6.66699 28L7.15766 27.3466C8.56519 25.4597 9.32813 23.17 9.33366 20.816V16C9.33366 14.2318 10.036 12.5362 11.2863 11.2859C12.5365 10.0357 14.2322 9.33329 16.0003 9.33329C17.7684 9.33329 19.4641 10.0357 20.7144 11.2859C21.9646 12.5362 22.667 14.2318 22.667 16V20.816C22.6718 23.1711 23.4353 25.4621 24.8443 27.3493L25.3337 28H6.66699Z"
        fill={color}
      />
      {badge && <circle cx="32" cy="4" r="4" fill="#F04343" />}
    </svg>
  );
};
