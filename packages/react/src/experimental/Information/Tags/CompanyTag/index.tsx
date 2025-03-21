import { forwardRef } from "react"
import { ImageTag } from "../ImageTag"

type Props = {
  companyName: string
  companyImageUrl: string
  onClick?: () => void
}

export const CompanyTag = forwardRef<HTMLDivElement, Props>(
  ({ companyName, companyImageUrl, onClick }, ref) => {
    return (
      <ImageTag
        ref={ref}
        imageUrl={companyImageUrl}
        text={companyName}
        onClick={onClick}
      />
    )
  }
)

CompanyTag.displayName = "CompanyTag"
