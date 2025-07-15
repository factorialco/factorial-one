/**
 * Text metadata renderer for displaying simple text information.
 */
import { SimpleMetadata } from "../../types"

export const TextMetadata = ({ metadata }: { metadata: SimpleMetadata }) => (
  <div className="text-f1-foreground">{metadata.title}</div>
)
