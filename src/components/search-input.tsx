"use client";

import { IconSearch } from "@/assets/icons";
import { Input } from "./ui/input";
import { useSidebar } from "./ui/sidebar";

export const SearchInput = () => {
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  if (isCollapsed) {
    return (
      <div
        className="flex items-center justify-center h-9 w-9 border bg-background hover:border-[#5832E3] transition-colors cursor-pointer"
        onClick={toggleSidebar}
      >
        <IconSearch className="text-disabled-text" />
      </div>
    );
  }

  return (
    <div className="flex items-center h-[50px] border bg-background px-[18px] py-[13px] gap-1 focus-within:border-[#5832E3] transition-colors">
      <IconSearch className="text-disabled-text" />
      <Input
        className="border-none h-full w-full rounded-none ring-0"
        placeholder="SEARCH"
      />
    </div>
  );
};
