import { IconGift, IconMessage } from "@/assets/icons";
import logo from "@/assets/images/logo.svg";
import { UserInfo } from "@/components/navigation/user-info";
import Image from "next/image";
import { SidebarTrigger } from "../ui/sidebar";
import { NavigationButtons } from "./navigation-buttons";

export const Navigation = () => {
  return (
    <div className="h-[90px] w-full flex items-center justify-between border-b md:px-[60px] px-[30px]">
      <div className="flex items-center gap-[30px]">
        <SidebarTrigger className="md:hidden" />

        <Image
          src={logo}
          alt="logo"
          width={215}
          className="md:min-w-[215px] min-w-[125px]"
        />
      </div>

      <div className="hidden xl:block">
        <NavigationButtons />
      </div>

      <div className="flex items-center gap-4">
        <IconGift className="text-white" />
        <IconMessage className="text-white mr-2 ml-1" />

        <div className="hidden xl:block">
          <UserInfo />
        </div>
      </div>
    </div>
  );
};
