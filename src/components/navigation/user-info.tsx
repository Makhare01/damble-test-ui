import userImage from "@/assets/images/user.png";
import Image from "next/image";
import { IconArrow, IconUserBadge } from "../../assets/icons";

export const UserInfo = () => {
  return (
    <div className="flex items-center gap-4">
      <Image src={userImage} alt="user" width={50} height={50} />
      <div className="flex items-center gap-2">
        <IconUserBadge />
        <p className="text-base text-white font-extrabold tracking-[0.09em]">
          Username
        </p>
        <IconArrow className="h-4 text-white font-extrabold" />
      </div>
    </div>
  );
};
