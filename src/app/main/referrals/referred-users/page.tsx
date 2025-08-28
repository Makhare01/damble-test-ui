import { CustomTable } from "@/components/custom-table";
import { ReferralValuesToolbar } from "@/components/referrals/referral-values-toolbar";

const ReferredUsersPage = () => {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <ReferralValuesToolbar
        items={[
          {
            value: "100",
            text: "total users",
          },
          {
            value: "$ 0.00",
            text: "TOTAL depositors",
          },
          {
            value: "$ 0.00",
            text: "total wagered",
          },
        ]}
      />

      <CustomTable
        header={["username", "joined", "wagered", "comission earned"]}
        body={[
          ["User1234", "05/05/2015", "100", "$100"],
          ["User1234", "05/05/2015", "100", "$100"],
          ["User1234", "05/05/2015", "100", "$100"],
          ["User1234", "05/05/2015", "100", "$100"],
          ["User1234", "05/05/2015", "100", "$100"],
          ["User1234", "05/05/2015", "100", "$100"],
          ["User1234", "05/05/2015", "100", "$100"],
        ]}
        tableRowClassName="h-[45px]"
      />

      <p className="text-[13px] text-[#B2B6C5] font-manrope font-semibold tracking-[0em] mt-[30px]">
        If you&apos;re a content creator or a KOL, make sure to check out our
        <span className="text-[#5832E3]">Affiliate Program!</span>
      </p>
    </div>
  );
};

export default ReferredUsersPage;
