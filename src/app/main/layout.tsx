import { MainTabs } from "@/components/main-tabs";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start gap-[30px]">
      <MainTabs />
      {children}
    </div>
  );
};

export default MainLayout;
