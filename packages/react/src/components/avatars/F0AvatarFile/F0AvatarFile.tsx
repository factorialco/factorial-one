import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, InternalAvatarProps } from "@/ui/Avatar"
import { ElementRef, forwardRef, useMemo } from "react"
import { BaseAvatarProps, sizesMapping } from "../BaseAvatar"
import { AvatarFileSize, FileDef } from "./types"
import { getFileTypeInfo } from "./utils"

export type F0AvatarFileProps = Omit<
  React.ComponentPropsWithoutRef<typeof Avatar>,
  "type" | "size"
> & {
  file: FileDef
  size?: AvatarFileSize
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">

const F0AvatarFile = forwardRef<ElementRef<typeof Avatar>, F0AvatarFileProps>(
  ({ file, ...props }, ref) => {
    const { type: fileType, color: fileColor } = getFileTypeInfo(file)

    const reversedSizesMapping = useMemo(
      () =>
        Object.fromEntries(
          Object.entries(sizesMapping).map(([key, value]) => [value, key])
        ),
      [sizesMapping]
    )

    const mappedSize: InternalAvatarProps["size"] = (reversedSizesMapping[
      props.size as string
    ] ?? "small") as InternalAvatarProps["size"]

    return (
      <Avatar
        ref={ref}
        className={cn("bg-f1-background")}
        {...props}
        size={mappedSize}
      >
        <AvatarFallback className={cn("text-xs font-semibold", fileColor)}>
          {fileType}
        </AvatarFallback>
      </Avatar>
    )
  }
)
F0AvatarFile.displayName = "F0AvatarFile"

export { F0AvatarFile, type FileDef }
