import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const SetCodeInput = () => {
  return (
    <div className="w-full flex items-center h-[60px]">
      <Input
        className="flex-1 h-full bg-background-tertiary border-none rounded-r-none rounded-l-[1px] placeholder:font-manrope placeholder:text-[10px] placeholder:font-semibold placeholder:text-[#8E97A9] tracking-[0em]"
        placeholder="Set referral code..."
      />
      <Button className="w-[122px] h-full rounded-[1px] shadow-none">
        Set Code
      </Button>
    </div>
  );
};
