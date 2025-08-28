"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const tabs = [
  {
    title: "Referrals",
    value: "/main/referrals",
  },
  {
    title: "Referred Users",
    value: "/main/referrals/referred-users",
  },
];

export const ReferralTabs = () => {
  const pathname = usePathname();

  const activeTab = tabs.find((tab) => tab.value === pathname);

  return (
    <Tabs defaultValue={activeTab?.value} className="w-full">
      <TabsList className="border border-[#262D3C]">
        {tabs.map(({ title, value }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="p-0 text-xs w-[190px]"
          >
            <Link
              href={value}
              className="flex items-center justify-center px-[26px] w-full h-[60px] flex-1"
            >
              {title}
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
