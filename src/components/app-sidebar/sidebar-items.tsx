import {
  IconArrow,
  IconBag,
  IconBullseyeArrow,
  IconCasinoGames,
  IconCoin,
  IconHuman,
  IconUserPlus,
  IconUsers,
} from "@/assets/icons";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Separator } from "../ui/separator";

const items = [
  {
    title: "Casino Games",
    url: "#",
    icon: IconCasinoGames,
    subItems: [
      {
        title: "All Games",
        url: "#",
        icon: IconCasinoGames,
      },
      {
        title: "Recent",
        url: "#",
        icon: IconCasinoGames,
      },
      {
        title: "Favorites",
        url: "#",
        icon: IconCasinoGames,
      },
    ],
  },
  {
    title: "Sports",
    url: "#",
    icon: IconBullseyeArrow,
  },
  {
    title: "Providers",
    url: "#",
    icon: IconBag,
  },
  {
    title: "Promotions",
    url: "#",
    icon: IconHuman,
  },
  {
    title: "Refer a Friend",
    url: "#",
    icon: IconUserPlus,
  },
  {
    title: "VIP Club",
    url: "#",
    icon: IconCoin,
  },
  {
    title: "Sponsorships",
    url: "#",
    icon: IconUsers,
  },
];

export function SidebarItems() {
  return (
    <SidebarMenu className="gap-2.5">
      {items.map((item) => (
        <Collapsible key={item.title} className="group/collapsible">
          <SidebarMenuItem className="bg-background border border-transparent h-[60px] rounded-none px-[19px] py-[22px] hover:border-[#5832E3] group-data-[state=open]/collapsible:border-[#5832E3] transition-colors group-data-[collapsible=icon]:size-9 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:py-0">
            <CollapsibleTrigger
              asChild
              disabled={!item.subItems}
              className="hover:bg-transparent active:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=closed]:bg-transparent data-[state=open]:hover:bg-transparent rounded-none px-0"
            >
              <SidebarMenuButton
                asChild
                className="h-full hover:bg-transparent active:bg-transparent focus:bg-transparent group-data-[state=open]/collapsible:bg-transparent"
                tooltip={item.title}
              >
                <a href={item.url}>
                  <div className="w-5 h-5 flex items-center justify-center group-data-[collapsible=icon]:w-4 group-data-[collapsible=icon]:h-4">
                    <item.icon className="text-white" />
                  </div>
                  <span className="text-white uppercase text-[10px] font-extrabold ml-[23px] group-data-[collapsible=icon]:hidden">
                    {item.title}
                  </span>
                  {item.subItems && (
                    <IconArrow className="w-4 h-4 text-white ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 group-data-[collapsible=icon]:hidden" />
                  )}
                </a>
              </SidebarMenuButton>
            </CollapsibleTrigger>
          </SidebarMenuItem>
          {item.subItems && item.subItems.length > 0 && (
            <CollapsibleContent className="p-0 [&>div]:p-0 [&>div>div]:p-0 mt-2 group-data-[collapsible=icon]:hidden border border-gray-600">
              {item.subItems.map((subItem, index) => (
                <div key={subItem.title}>
                  <SidebarMenuItem className="bg-background h-[60px] rounded-none px-[19px] py-[22px] border border-transparent hover:border-[#5832E3]">
                    <SidebarMenuButton
                      asChild
                      className="h-full hover:bg-transparent active:bg-transparent focus:bg-transparent group-data-[state=open]/collapsible:bg-transparent px-0"
                    >
                      <a href={subItem.url}>
                        <div className="w-5 h-5 flex items-center justify-center">
                          <subItem.icon className="text-white" />
                        </div>
                        <span className="text-white uppercase text-[10px] font-extrabold ml-[23px]">
                          {subItem.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {index < item.subItems.length - 1 && (
                    <Separator className="bg-gray-600" />
                  )}
                </div>
              ))}
            </CollapsibleContent>
          )}
        </Collapsible>
      ))}
    </SidebarMenu>
  );
}
