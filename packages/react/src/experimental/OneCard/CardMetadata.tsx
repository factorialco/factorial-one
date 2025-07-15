import { Icon } from "@/components/Utilities/Icon"
import React from "react"
import { metadataRenderers } from "./metadata"
import { Metadata } from "./types"

interface CardMetadataProps {
  metadata: Metadata
}

export function CardMetadata({ metadata }: CardMetadataProps) {
  const MetadataRenderer = metadataRenderers[metadata.type] as (props: {
    metadata: Metadata
  }) => React.ReactNode

  return (
    <div className="flex h-8 items-center gap-1.5 font-medium">
      <Icon icon={metadata.icon} color="default" size="md" />
      <MetadataRenderer metadata={metadata} />
    </div>
  )
}
