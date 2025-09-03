import { ComponentProps, ReactNode } from "react"
import { F0AvatarCompany } from "../F0AvatarCompany"
import { F0AvatarFile } from "../F0AvatarFile"
import { F0AvatarPerson } from "../F0AvatarPerson"
import { F0AvatarTeam } from "../F0AvatarTeam"
import { AvatarVariant, AvatarVariantWithSize } from "./types"

export const F0Avatar = ({
  avatar,
  size = "small",
}: {
  avatar: AvatarVariant
  size?: AvatarVariantWithSize["size"]
}): ReactNode => {
  switch (avatar.type) {
    case "person":
      return (
        <F0AvatarPerson
          firstName={avatar.firstName}
          lastName={avatar.lastName}
          badge={avatar.badge}
          src={avatar.src}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "team":
      return (
        <F0AvatarTeam
          name={avatar.name}
          src={avatar.src}
          badge={avatar.badge}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "company":
      return (
        <F0AvatarCompany
          name={avatar.name}
          src={avatar.src}
          badge={avatar.badge}
          size={size}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
    case "file":
      return (
        <F0AvatarFile
          file={avatar.file}
          size={size as ComponentProps<typeof F0AvatarFile>["size"]}
          badge={avatar.badge}
          aria-label={avatar["aria-label"]}
          aria-labelledby={avatar["aria-labelledby"]}
        />
      )
  }
}
