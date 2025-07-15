/**
 * Status metadata renderer for displaying status indicators with label and variant.
 */
import { StatusTag } from "@/experimental/Information/Tags/StatusTag"
import { StatusMetadata as StatusMetadataType } from "../../types"

export const StatusMetadata = ({
  metadata,
}: {
  metadata: StatusMetadataType
}) => <StatusTag text={metadata.label} variant={metadata.status} />
