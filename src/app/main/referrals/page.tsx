import { IconCopy } from "@/assets/icons";
import { CustomTable } from "@/components/custom-table";
import { ReferralValuesToolbar } from "@/components/referrals/referral-values-toolbar";
import { SetCodeInput } from "@/components/referrals/set-code-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ReferralsPage = () => {
  return (
    <div className="w-full flex flex-col gap-[19px]">
      <h2 className="text-[15px] font-extrabold uppercase text-white">
        SET CUSTOM REFERRALS CODE
      </h2>

      <SetCodeInput />

      <ReferralValuesToolbar
        items={[
          {
            value: "$ 0.00",
            text: "COMISSION EARNED",
          },
          {
            value: "$ 0.00",
            text: "TOTAL CLAIMED",
          },
          {
            value: "$ 0.00",
            text: "TOTAL AVAILABLE",
          },
        ]}
      />

      <CustomTable
        header={["CODE", "CLAIMED", "REFS", "%", "WAGERED", "CLAIM", "LINK"]}
        body={[
          [
            "Example",
            "$0.00",
            "0",
            "10%",
            "$0.00",
            <Button key="claim" className="shadow-none w-[80px] h-[30px]">
              CLAIM
            </Button>,
            <Button
              key="copy"
              className="shadow-none w-[80px] h-[30px] bg-background-tertiary hover:bg-background-tertiary text-white"
            >
              <IconCopy />
              COPY
            </Button>,
          ],
        ]}
      />

      <p className="text-[13px] text-[#B2B6C5] font-manrope font-semibold tracking-[0em] mt-14">
        If you&apos;re a content creator or a KOL, make sure to check out our{" "}
        <Link href="#" className="text-[#5832E3]">
          Affiliate Program!
        </Link>
      </p>
    </div>
  );
};

export default ReferralsPage;
