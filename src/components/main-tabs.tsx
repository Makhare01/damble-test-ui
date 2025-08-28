import {
  IconBagArrow,
  IconFilePlus,
  IconHistory,
  IconPlusRect,
  IconTurnArrow,
  IconUser,
  IconX,
} from "@/assets/icons";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const tabs = [
  {
    title: "Profile",
    value: "profile",
    icon: IconUser,
  },
  {
    title: "Referrals",
    value: "referrals",
    icon: IconX,
  },
  {
    title: "Settings",
    value: "settings",
    icon: IconPlusRect,
  },
  {
    title: "Verification",
    value: "verification",
    icon: IconPlusRect,
  },
  {
    title: "Transactions",
    value: "transactions",
    icon: IconFilePlus,
  },
  {
    title: "Bet History",
    value: "bet-history",
    icon: IconBagArrow,
  },
  {
    title: "Login History",
    value: "login-history",
    icon: IconHistory,
  },
  {
    title: "Responsible Gaming",
    value: "responsible-gaming",
    icon: IconTurnArrow,
  },
];

export const MainTabs = () => {
  return (
    <Tabs defaultValue="profile" className="w-[240px]">
      <TabsList className="w-full" orientation="vertical">
        {tabs.map(({ title, value, icon: Icon }) => (
          <TabsTrigger key={value} value={value}>
            <div className="min-w-[18px] mr-2.5">
              <Icon className="w-[18px]" />
            </div>
            {title}
          </TabsTrigger>
        ))}
      </TabsList>
      {/* <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent> */}
    </Tabs>
  );
};
