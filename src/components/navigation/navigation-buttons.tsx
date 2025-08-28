import { IconArrow, IconCashier } from "@/assets/icons";
import ethereumImage from "@/assets/images/ethereum.svg";
import Image from "next/image";
import { Button } from "../ui/button";

export const NavigationButtons = () => {
  return (
    <div className="flex items-center h-[50px] w-full">
      <Button
        variant="outline"
        className="flex items-center gap-[11px] h-full rounded-l-[1px] py-0 w-1/2"
      >
        <Image src={ethereumImage} alt="ethereum" />
        <p className="xl:text-[13px] text-[11px] font-extrabold font-manrope">
          $ 0.00
        </p>
        <IconArrow />
      </Button>

      <Button className="h-full rounded-r-[1px] border-b-3 border-[#6BB311] w-1/2">
        <IconCashier className="text-text-primary" />
        <p className="xl:text-xs text-[11px] font-black">Cashier</p>
      </Button>
    </div>
  );
};
