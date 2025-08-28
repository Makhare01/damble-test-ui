"use client";

import {
  IconBagArrow,
  IconFilePlus,
  IconHistory,
  IconPlusRect,
  IconTurnArrow,
  IconUser,
  IconX,
} from "@/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const tabs = [
  {
    title: "Profile",
    value: "/main",
    icon: IconUser,
  },
  {
    title: "Referrals",
    value: "/main/referrals",
    icon: IconX,
  },
  {
    title: "Settings",
    value: "/main/settings",
    icon: IconPlusRect,
  },
  {
    title: "Verification",
    value: "/main/verification",
    icon: IconPlusRect,
  },
  {
    title: "Transactions",
    value: "/main/transactions",
    icon: IconFilePlus,
  },
  {
    title: "Bet History",
    value: "/main/bet-history",
    icon: IconBagArrow,
  },
  {
    title: "Login History",
    value: "/main/login-history",
    icon: IconHistory,
  },
  {
    title: "Responsible Gaming",
    value: "/main/responsible-gaming",
    icon: IconTurnArrow,
  },
];

export const MainTabs = () => {
  const pathname = usePathname();

  const activeTab = tabs.find((tab) => tab.value === pathname);
  return (
    <Tabs defaultValue={activeTab?.value} className="min-w-[240px]">
      <TabsList className="w-full" orientation="vertical">
        {tabs.map(({ title, value, icon: Icon }) => (
          <TabsTrigger key={value} value={value} className="p-0">
            <Link
              href={value}
              className="flex items-center justify-start px-[26px] w-full h-[60px] flex-1"
            >
              <div className="min-w-[18px] mr-4">
                <Icon className="w-[18px]" />
              </div>
              {title}
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
