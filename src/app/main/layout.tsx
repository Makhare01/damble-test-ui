import { MainTabs } from "@/components/main-tabs";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex xl:flex-row flex-col items-start gap-[30px]">
      <MainTabs />
      <div className="overflow-x-hidden w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
