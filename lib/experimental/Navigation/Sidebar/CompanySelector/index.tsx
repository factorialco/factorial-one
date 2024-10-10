import { Select } from "@/experimental/Forms/Fields/Select"
import { Avatar } from "@/experimental/Information/Avatar"
import ChevronDown from "@/icons/ChevronDown"
import { cn, focusRing } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"

interface Company {
  id: string
  name: string
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
          "group flex w-fit flex-nowrap items-center gap-2 truncate rounded p-1.5 text-lg font-semibold text-f1-foreground transition-colors hover:bg-f1-background-secondary-hover data-[state=open]:bg-f1-background-secondary-hover",
          focusRing()
        )}
        tabIndex={0}
        title={selectedCompany?.name}
      >
        <Avatar alt={selectedCompany?.name?.[0]} size="xsmall" />
        <span className="truncate">{selectedCompany?.name}</span>
        <div className="h-6 w-6 shrink-0 p-1">
          <div className="flex h-4 w-4 items-center justify-center rounded-xs bg-f1-background-secondary-hover transition-all group-hover:brightness-90 group-data-[state=open]:brightness-90">
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex h-3 w-3 items-center justify-center"
            >
              <ChevronDown className="h-3 w-3 shrink-0 text-f1-icon" />
            </motion.div>
          </div>
        </div>
      </div>
    </Select>
  )
}
