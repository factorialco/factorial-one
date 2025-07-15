/**
 * Tag metadata renderer for displaying a tag with label and optional tag icon.
 */
import { RawTag } from "@/experimental/Information/Tags/RawTag"
import { TagMetadata as TagMetadataType } from "../../types"

export const TagMetadata = ({ metadata }: { metadata: TagMetadataType }) => (
  <RawTag text={metadata.label} icon={metadata.tagIcon} />
)
