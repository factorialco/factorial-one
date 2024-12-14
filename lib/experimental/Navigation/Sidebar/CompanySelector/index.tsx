import { Select } from "@/experimental/Forms/Fields/Select"
import { CompanyAvatar } from "@/experimental/Information/Avatars/CompanyAvatar"
import { AvatarVariant } from "@/experimental/Information/Avatars/utils"
import ChevronDown from "@/icons/app/ChevronDown"
import { cn, focusRing } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { motion } from "framer-motion"
import { ReactNode, useMemo, useState } from "react"

interface Company {
  id: string
  name: string
  logo?: string
}

export type CompanySelectorProps = {
  companies: Company[]
  selected?: string
  onChange: (value: string) => void
  isLoading?: boolean
}

export function CompanySelector({
  companies,
  selected,
  onChange,
  isLoading = false,
}: CompanySelectorProps) {
  const selectedCompany = useMemo(
    () => companies.find((company) => company.id === selected) || companies[0],
    [companies, selected]
  )

  if (isLoading) {
    return (
      <div className="flex w-fit items-center gap-2 p-1.5">
        <Skeleton className="size-6" />
        <Skeleton className="h-3 w-14" />
      </div>
    )
  }

  if (companies.length === 1) {
    return (
      <div className="w-fit p-1.5">
        <SelectedCompanyLabel company={selectedCompany} />
      </div>
    )
  }

  return (
    <Selector
      companies={companies}
      selected={selectedCompany}
      onChange={onChange}
    >
      <SelectedCompanyLabel company={selectedCompany} />
    </Selector>
  )
}

const Selector = ({
  companies,
  selected,
  onChange,
  children,
}: {
  companies: Company[]
  selected: Company
  onChange: (value: string) => void
  children: ReactNode
}) => {
  const [open, setOpen] = useState(false)
  const options = useMemo(
    () =>
      companies.map((company) => ({
        value: company.id,
        label: company.name,
        avatar: {
          type: "company",
          name: company.name,
          src: company.logo,
          "aria-label": `${company.name} logo`,
        } satisfies AvatarVariant,
      })),
    [companies]
  )

  return (
    <Select
      options={options}
      value={selected.id}
      onChange={onChange}
      placeholder="Select a company"
      open={open}
      onOpenChange={setOpen}
    >
      <div
        className={cn(
          "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 truncate rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
          focusRing()
        )}
        tabIndex={0}
        title={selected?.name}
      >
        {children}
        <div className="flex w-5 shrink-0 items-center justify-center">
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
    </Select>
  )
}

const SelectedCompanyLabel = ({
  company,
}: {
  company: CompanySelectorProps["companies"][number]
}) => {
  return (
    <div
      className={cn(
        "flex w-fit min-w-0 max-w-full items-center gap-2 rounded text-lg font-semibold text-f1-foreground transition-colors"
      )}
      title={company?.name}
    >
      <CompanyAvatar
        name={company?.name?.[0]}
        src={company?.logo}
        size="small"
      />
      <div className="min-w-0 flex-1">
        <span className="block truncate">{company?.name}</span>
      </div>
    </div>
  )
}
