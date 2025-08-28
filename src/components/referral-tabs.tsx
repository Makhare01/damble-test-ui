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
    <div className="w-full overflow-x-auto">
      <Tabs defaultValue={activeTab?.value} className="w-full min-w-max">
        <TabsList className="border border-background-tertiary flex-nowrap">
          {tabs.map(({ title, value }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="p-0 md:text-xs text-[10px] md:w-[190px] w-[150px] flex-shrink-0"
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
    </div>
  );
};
