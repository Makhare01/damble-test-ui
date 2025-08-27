import logo from "@/assets/images/logo.svg";
import Image from "next/image";

export const Navigation = () => {
  return (
    <div className="h-[90px] w-full flex items-center justify-between border-b px-[60px]">
      <Image src={logo} alt="logo" />
      <p>Navigation items</p>
    </div>
  );
};
