/**
 * Company metadata renderer for displaying company avatar with company name.
 */
import { CompanyAvatar } from "@/experimental/Information/Avatars/exports"
import { CompanyMetadata as CompanyMetadataType } from "../../types"

export const CompanyMetadata = ({
  metadata,
}: {
  metadata: CompanyMetadataType
}) => (
  <div className="flex flex-row items-center gap-1">
    <CompanyAvatar name={metadata.name} src={metadata.src} size="xsmall" />
    <span className="text-f1-foreground">{metadata.name}</span>
  </div>
)
