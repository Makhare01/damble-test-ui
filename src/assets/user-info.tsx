import userImage from "@/assets/images/user.png";
import Image from "next/image";
import { IconArrow, IconGift, IconMessage, IconUserBadge } from "./icons";

export const UserInfo = () => {
  return (
    <div className="flex items-center gap-4">
      <IconGift className="text-white" />
      <IconMessage className="text-white mr-2 ml-1" />
      <Image src={userImage} alt="user" width={50} height={50} />
      <div className="flex items-center gap-2">
        <IconUserBadge />
        <p className="text-base text-white font-extrabold">Username</p>
        <IconArrow className="h-4 text-white font-extrabold" />
      </div>
    </div>
  );
};
