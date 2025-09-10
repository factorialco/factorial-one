import { forwardRef } from "react"
import { F0TagAvatar } from "../internal/TagAvatar"
import type { F0TagCompanyProps } from "./types"

export const F0TagCompany = forwardRef<HTMLDivElement, F0TagCompanyProps>(
  ({ name, src }, ref) => {
    return (
      <F0TagAvatar
        ref={ref}
        avatar={{
          type: "company",
          name: name,
          src: src,
        }}
        text={name}
      />
    )
  }
)

F0TagCompany.displayName = "F0TagCompany"
