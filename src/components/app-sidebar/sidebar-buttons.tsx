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
      <Button variant="outline" className="z-50">
        Casino
      </Button>
      <Button variant="outline">Sports</Button>
    </>
  );
};
