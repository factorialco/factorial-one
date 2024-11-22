import { Select } from "@/experimental/Forms/Fields/Select"
import { CompanyAvatar } from "@/experimental/Information/Avatars/CompanyAvatar"
import { AvatarVariant } from "@/experimental/Information/Avatars/utils"
import ChevronDown from "@/icons/app/ChevronDown"
import { cn, focusRing } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"

interface Company {
  id: string
  name: string
  logo?: string
}

export type CompanySelectorProps = {
  companies: Company[]
  selected: string
  onChange: (value: string) => void
}

export function CompanySelector({
  companies,
  selected,
  onChange,
}: CompanySelectorProps) {
  const [open, setOpen] = useState(false)

  const options = companies.map((company) => ({
    value: company.id,
    label: company.name,
    avatar: {
      type: "company",
      name: company.name,
      src: company.logo,
      "aria-label": `${company.name} logo`,
    } satisfies AvatarVariant,
  }))

  const selectedCompany =
    companies.find((company) => company.id === selected) || companies[0]

  return (
    <Select
      options={options}
      value={selected}
      onChange={onChange}
      placeholder="Select a company"
      open={open}
      onOpenChange={setOpen}
    >
      <div
        className={cn(
          "group flex w-fit flex-nowrap items-center justify-center gap-2 truncate rounded p-1.5 text-lg font-semibold text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
          focusRing()
        )}
        tabIndex={0}
        title={selectedCompany?.name}
      >
        <CompanyAvatar
          name={selectedCompany?.name?.[0]}
          src={selectedCompany?.logo}
          size="xsmall"
        />
        <div className="flex flex-row items-center gap-1">
          <span className="truncate">{selectedCompany?.name}</span>
          <div className="flex h-5 w-5 shrink-0 items-center justify-center">
            <div className="flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all">
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex h-3 w-3 items-center justify-center"
              >
                <ChevronDown className="h-3 w-3 shrink-0 text-f1-icon-bold" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Select>
  )
}
