import { forwardRef } from "react"
import { AvatarTag } from "../AvatarTag"

type Props = {
  companyName: string
  companyImageUrl: string
  onClick?: () => void
}

export const CompanyTag = forwardRef<HTMLDivElement, Props>(
  ({ companyName, companyImageUrl, onClick }, ref) => {
    return (
      <AvatarTag
        ref={ref}
        avatar={{
          type: "company",
          name: companyName,
          src: companyImageUrl,
        }}
        text={companyName}
        onClick={onClick}
      />
    )
  }
)

CompanyTag.displayName = "CompanyTag"
