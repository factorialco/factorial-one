/**
 * Avatar list metadata renderer for displaying multiple avatars with optional max limit.
 */
import { AvatarList } from "@/experimental/Information/Avatars/AvatarList"
import { AvatarListMetadata as AvatarListMetadataType } from "../../types"

export const AvatarListMetadata = ({
  metadata,
}: {
  metadata: AvatarListMetadataType
}) => <AvatarList avatars={metadata.avatars} max={metadata.max} size="xsmall" />
