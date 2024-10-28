import { forwardRef } from "react"
import { ImageTag } from "../ImageTag"

type Props = {
  companyName: string
  companyImageUrl: string
}

export const CompanyTag = forwardRef<HTMLDivElement, Props>(
  ({ companyName, companyImageUrl }, ref) => {
    return <ImageTag ref={ref} imageUrl={companyImageUrl} text={companyName} />
  }
)

CompanyTag.displayName = "CompanyTag"
