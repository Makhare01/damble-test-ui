"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "@/lib/utils";

// Base styles that don't depend on orientation
const baseStyles = {
  tabs: "flex gap-2",
  tabsList:
    "h-fit w-fit text-muted-foreground inline-flex items-center justify-center rounded-[1px]",
  tabsTrigger:
    "data-[state=active]:bg-background bg-background-secondary dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-white dark:text-muted-foreground inline-flex flex-1 items-center gap-1.5 border border-transparent whitespace-nowrap transition-[color,box-shadow,background-color] duration-200 ease-in-out focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 uppercase text-[11px] font-extrabold data-[state=active]:bg-success data-[state=active]:text-foreground cursor-pointer min-h-[60px] dark:data-[state=active]:text-foreground w-[calc(100%-1px)] justify-start rounded-[1px] px-3 py-2 tracking-[0.11em]",
  tabsContent: "flex-1 outline-none",
};

// Orientation-specific styles
const orientationStyles = {
  horizontal: {
    tabs: "flex-col",
    tabsList: "justify-center",
    tabsTrigger: "h-[calc(100%-1px)] justify-center rounded-md px-2 py-1",
  },
  vertical: {
    tabs: "flex-row gap-6",
    tabsList: "flex-col gap-2.5 items-start justify-center",
  },
};

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root> & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        baseStyles.tabs,
        orientationStyles[orientation].tabs,
        className
      )}
      orientation={orientation}
      {...props}
    />
  );
}

function TabsList({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        baseStyles.tabsList,
        orientationStyles[orientation].tabsList,
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(baseStyles.tabsTrigger, className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(baseStyles.tabsContent, className)}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
