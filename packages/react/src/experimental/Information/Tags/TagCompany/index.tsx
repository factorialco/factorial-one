import { forwardRef } from "react"
import { TagAvatar } from "../TagAvatar"

type Props = {
  companyName: string
  companyImageUrl: string
  onClick?: () => void
}

export const TagCompany = forwardRef<HTMLDivElement, Props>(
  ({ companyName, companyImageUrl, onClick }, ref) => {
    return (
      <TagAvatar
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

TagCompany.displayName = "TagCompany"
