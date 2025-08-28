"use client";

import { Button } from "../ui/button";
import { useSidebar } from "../ui/sidebar";

export const SidebarButtons = () => {
  const { state } = useSidebar();

  if (state === "collapsed") {
    return null;
  }

  return (
    <>
      <Button variant="outline" className="z-50 tracking-[0em]">
        Casino
      </Button>
      <Button variant="outline" className="tracking-[0em]">
        Sports
      </Button>
    </>
  );
};
