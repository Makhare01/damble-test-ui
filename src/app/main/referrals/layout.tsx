import { ReferralTabs } from "@/components/referral-tabs";

const ReferralsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background-secondary w-full h-full p-[30px] min-h-[300px]">
      <ReferralTabs />

      <div className="mt-[29px]">{children}</div>
    </div>
  );
};

export default ReferralsLayout;
