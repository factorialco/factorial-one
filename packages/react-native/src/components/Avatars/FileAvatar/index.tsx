import { ComponentProps, useMemo } from "react";
import { getFileTypeInfo } from "./utils";
import { Avatar, AvatarFallback } from "../../../ui/avatar";
import { cn } from "../../../lib/utils";
import { BaseAvatar } from "../BaseAvatar";
import { AvatarBadge } from "../types";
import { ModuleAvatar, ModuleAvatarProps } from "../ModuleAvatar";
import { Badge, BadgeProps } from "../../Badge";

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;

type Props = {
  file: File;
  className?: string;
  size?: BaseAvatarProps["size"];
  badge?: AvatarBadge;
};

const getAvatarSize = (
  size: BaseAvatarProps["size"],
): ModuleAvatarProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<
      Exclude<BaseAvatarProps["size"], undefined>,
      ModuleAvatarProps["size"]
    >
  > = {
    xlarge: "lg",
    large: "md",
    small: "sm",
  } as const;

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small;
};

const getBadgeSize = (
  size: BaseAvatarProps["size"],
): BadgeProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<Exclude<BaseAvatarProps["size"], undefined>, BadgeProps["size"]>
  > = {
    xlarge: "lg",
    large: "md",
    small: "sm",
  } as const;

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small;
};
export const FileAvatar = ({
  file,
  className,
  size,
  badge,
  ...props
}: Props) => {
  const { type: fileType, color: fileColor } = getFileTypeInfo(file);
  const badgeSize = getBadgeSize(size);
  const moduleAvatarSize = getAvatarSize(size);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const badgeContent = useMemo(
    () =>
      badge ? (
        <>
          {badge.type === "module" && (
            <ModuleAvatar module={badge.module} size={moduleAvatarSize} />
          )}
          {badge.type !== "module" && (
            <Badge type={badge.type} icon={badge.icon} size={badgeSize} />
          )}
        </>
      ) : null,
    [badge, badgeSize, moduleAvatarSize],
  );

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
