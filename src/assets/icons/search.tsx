import { ComponentProps } from "react";

export const IconSearch = (props: ComponentProps<"svg">) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M22 22H20V20H22V22ZM20 20H18V18H20V20ZM14 18H6V16H14V18ZM18 18H16V16H18V18ZM6 16H4V14H6V16ZM16 16H14V14H16V16ZM4 14H2V6H4V14ZM18 14H16V6H18V14ZM6 6H4V4H6V6ZM16 6H14V4H16V6ZM14 4H6V2H14V4Z"
        fill="currentColor"
      />
    </svg>
  );
};
