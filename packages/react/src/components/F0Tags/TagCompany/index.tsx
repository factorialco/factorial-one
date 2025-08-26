import { forwardRef } from "react"
import { F0TagAvatar } from "../TagAvatar"

type Props = {
  companyName: string
  companyImageUrl: string
  onClick?: () => void
}

export const F0TagCompany = forwardRef<HTMLDivElement, Props>(
  ({ companyName, companyImageUrl, onClick }, ref) => {
    return (
      <F0TagAvatar
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

F0TagCompany.displayName = "TagCompany"
