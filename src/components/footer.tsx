import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { CustomSelect } from "./ui/custom-select";

import anjuanFlagImage from "@/assets/images/anjuan-flag.png";
import restrictImage from "@/assets/images/restrict.png";

const FooterItem = ({
  title,
  links,
}: {
  title: string;
  links: Array<string>;
}) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-white mb-[22px]">{title}</h2>

      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            href={link}
            key={link}
            className="text-base font-manrope font-semibold text-[#B2B6C5]"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t p-[60px] pb-[40px]">
      <div className="flex items-start justify-between pb-[67px] mb-[85px] border-b">
        <Image src={logo} alt="logo" />
        <div className="flex-1 ml-[93px] mr-[113px] grid grid-cols-4 gap-10">
          <FooterItem
            title="Support"
            links={["Live Support", "Help center", "Game Responsibly"]}
          />
          <FooterItem
            title="Platform"
            links={["Affiliate Program", "FAQ", "Download App", "Live Support"]}
          />
          <FooterItem
            title="Legal"
            links={[
              "Responsible Gambling",
              "AML Policy",
              "Sports Policy",
              "Terms & Condition",
            ]}
          />
          <FooterItem
            title="Community"
            links={["X", "Instagram", "Telegram", "Discord", "Facebook"]}
          />
        </div>
        <CustomSelect
          placeholder="Language"
          options={[
            { label: "English", value: "en" },
            { label: "Spanish", value: "es" },
          ]}
        />
      </div>

      <div>
        <p className="text-base font-medium text-[#B2B6C5] font-manrope">
          Damble is owned and operated by 88bit Limited, Belize company
          registration Number 48974 with its registered address at Sea Urchin
          Street, San Pedro Town, Ambergris Caye, Belize. Damble is licensed and
          regulated by the Government of the Autonomous Island of Anjouan, Union
          of Comoros and operates under License No. 000 Damble has passed all
          regulatory compliance and is legally authorised to conduct gaming
          operations for any and all games of chance and wagering.
        </p>

        <div className="flex items-center justify-between mt-[100px]">
          <p className="text-[13px] text-[#B2B6C5] font-manrope font-medium">
            1 BTC =$118,764.84
          </p>

          <div className="flex items-center gap-[15px]">
            <p className="mr-[45px] text-[13px] text-[#B2B6C5] font-manrope font-medium">
              © 2025 damble.io | All rights reserved.
            </p>

            <Image src={anjuanFlagImage} alt="anjuan-flag" />
            <Image src={restrictImage} alt="restrict" />
          </div>
        </div>
      </div>
    </footer>
  );
};
