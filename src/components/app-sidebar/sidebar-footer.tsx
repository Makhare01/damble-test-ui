import Image from "next/image";
import { SidebarFooter as ShadCNSidebarFooter } from "../ui/sidebar";

import sponsorsBottomImage from "@/assets/images/sponsors/sponsors-bottom.svg";
import sponsorsUpImage from "@/assets/images/sponsors/sponsors-up.svg";

export const SidebarFooter = () => {
  return (
    <ShadCNSidebarFooter className="group-data-[collapsible=icon]:hidden">
      <div className="flex items-center justify-center bg-background h-[50px] w-full border">
        <h2 className="text-[15px] text-white font-extrabold uppercase">
          Get Crypto
        </h2>
      </div>

      <Image
        key="Sponsors Up"
        src={sponsorsUpImage}
        alt="Sponsors Up"
        height={21}
        width={195}
        className="mt-5 mb-[13px] mx-auto"
      />

      <Image
        key="Sponsors Bottom"
        src={sponsorsBottomImage}
        alt="Sponsors Bottom"
        height={21}
        width={123}
        className="mx-auto"
      />
    </ShadCNSidebarFooter>
  );
};
