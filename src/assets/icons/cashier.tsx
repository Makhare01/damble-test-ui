import { ComponentProps } from "react";

export const IconCashier = (props: ComponentProps<"svg">) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" {...props}>
      <rect x="2" width="8" height="2" fill="currentColor" />
      <rect x="2" y="10" width="8" height="2" fill="currentColor" />
      <rect width="2" height="12" fill="currentColor" />
      <rect x="10" width="2" height="12" fill="currentColor" />
      <rect x="3" y="13" width="10" height="2" fill="currentColor" />
      <rect x="13" y="3" width="2" height="12" fill="currentColor" />
      <rect x="3.33398" y="5" width="5" height="1.66667" fill="currentColor" />
      <rect x="5" y="3.33398" width="1.66667" height="5" fill="currentColor" />
    </svg>
  );
};
