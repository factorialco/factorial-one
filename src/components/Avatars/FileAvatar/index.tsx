import { getFileTypeInfo } from "./utils";
import { Avatar, AvatarFallback } from "../../../ui/avatar";
import { cn } from "../../../lib/utils";

type Props = {
  file: File;
  className?: string;
};

export const FileAvatar = ({ file, className, ...props }: Props) => {
  const { type: fileType, color: fileColor } = getFileTypeInfo(file);

  return (
    <Avatar
      className={cn(
        "border border-solid border-f1-border-secondary bg-f1-background",
        className,
      )}
      {...props}
    >
      <AvatarFallback className={cn("text-xs font-semibold", fileColor)}>
        {fileType}
      </AvatarFallback>
    </Avatar>
  );
};

FileAvatar.displayName = "FileAvatar";
