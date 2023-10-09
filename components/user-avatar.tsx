import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  src?: string;
  clasName?: string;
}

const UserAvatar = ({ src, clasName }: UserAvatarProps) => {
  return (
    <Avatar className={cn("h-7 w-7 md:h-10 md:w-10", clasName)}>
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default UserAvatar;
