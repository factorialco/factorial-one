/**
 * User metadata renderer for displaying person avatar with full name.
 */
import { PersonAvatar } from "@/experimental/Information/Avatars/exports"
import { UserMetadata as UserMetadataType } from "../../types"

export const UserMetadata = ({ metadata }: { metadata: UserMetadataType }) => (
  <div className="flex flex-row items-center gap-1">
    <PersonAvatar
      size="xsmall"
      firstName={metadata.firstName}
      lastName={metadata.lastName}
      src={metadata.src}
    />
    <span className="text-f1-foreground">
      {metadata.firstName} {metadata.lastName}
    </span>
  </div>
)
