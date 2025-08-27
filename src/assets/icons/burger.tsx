import { ComponentProps } from "react";

export const IconBurger = (props: ComponentProps<"svg">) => {
  return (
    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" {...props}>
      <path
        d="M0 1H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M0 8.5H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M0 16H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};
