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
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
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

const MainTabsContent = () => {
  const pathname = usePathname();
  const isMdOrLarger = useMediaQuery({ maxWidth: 1280 });

  const orientation: "horizontal" | "vertical" = isMdOrLarger
    ? "horizontal"
    : "vertical";

  const activeTab = tabs.find((tab) => tab.value === pathname);

  return (
    <Tabs
      key={orientation}
      defaultValue={activeTab?.value}
      className={
        orientation === "horizontal"
          ? "min-w-[240px] xl:w-auto w-full overflow-x-auto overflow-y-hidden"
          : "min-w-[240px] xl:w-auto w-full overflow-auto"
      }
      orientation={orientation}
    >
      <TabsList
        className={
          orientation === "horizontal"
            ? "w-full gap-2.5 flex-nowrap min-w-max"
            : "w-full gap-2.5"
        }
        orientation={orientation}
      >
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

export const MainTabs = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a default vertical layout during SSR
    return (
      <Tabs
        defaultValue="/main"
        className="min-w-[240px] xl:w-auto w-full overflow-auto"
        orientation="vertical"
      >
        <TabsList className="w-full gap-2.5" orientation="vertical">
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
  }

  return <MainTabsContent />;
};
