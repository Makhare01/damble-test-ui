import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { SearchInput } from "../search-input";
import { SidebarButtons } from "./sidebar-buttons";
import { SidebarFooter } from "./sidebar-footer";
import { SidebarItems } from "./sidebar-items";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader className="flex flex-row items-center justify-between group-data-[collapsible=icon]:justify-center p-0 h-[42px]">
          <SidebarTrigger />
          <SidebarButtons />
        </SidebarHeader>
        <div className="mt-[15px]">
          <SearchInput />
        </div>
        <SidebarItems />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
