import { IconArrow, IconCashier, IconEthereum } from "@/assets/icons";
import logo from "@/assets/images/logo.svg";
import { UserInfo } from "@/assets/user-info";
import Image from "next/image";
import { Button } from "../ui/button";

export const Navigation = () => {
  return (
    <div className="h-[90px] w-full flex items-center justify-between border-b px-[60px]">
      <Image src={logo} alt="logo" />

      <div className="flex items-center h-[50px]">
        <Button
          variant="outline"
          className="flex items-center gap-[11px] h-full rounded-l-[1px]"
        >
          <IconEthereum />
          <p className="text-[13px] font-extrabold font-manrope">$ 0.00</p>
          <IconArrow />
        </Button>

        <Button className="h-full rounded-r-[1px] border-b-3 border-[#6BB311]">
          <IconCashier className="text-text-primary" />
          Cashier
        </Button>
      </div>
      <UserInfo />
    </div>
  );
};
