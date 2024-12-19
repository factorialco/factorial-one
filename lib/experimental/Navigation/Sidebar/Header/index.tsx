import { CompanySelector, type CompanySelectorProps } from "../CompanySelector"
import { SidebarIcon, type SidebarIconProps } from "../Icon"

export type SidebarHeaderProps = CompanySelectorProps & SidebarIconProps

export function SidebarHeader({
  companies,
  selected,
  onChange,
  notification = false,
}: SidebarHeaderProps) {
  return (
    <div className="flex h-[72px] items-center justify-between gap-3 px-3">
      <CompanySelector
        companies={companies}
        selected={selected}
        onChange={onChange}
        notification={notification}
      />
      <SidebarIcon />
    </div>
  )
}
