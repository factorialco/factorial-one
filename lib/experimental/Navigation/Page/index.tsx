import { cva, type VariantProps } from "cva"

interface PageProps {
  children?: React.ReactNode
  header?: React.ReactNode
  embedded?: boolean
}

export function Page({ children, header, embedded = false }: PageProps) {
  return (
    <div
      className={`flex w-full flex-col overflow-hidden ${
        embedded ? "" : "rounded-xl"
      } bg-f1-page ring-1 ring-inset ring-f1-border-secondary`}
    >
      {header && <div className="flex flex-col">{header}</div>}
      <div className="isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1">
        {children}
      </div>
    </div>
  )
}

Page.displayName = "Page"

const daytimePageVariants = cva({
  base: "pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]",
  variants: {
    period: {
      morning:
        "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
      afternoon:
        "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
      evening:
        "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%",
    },
  },
  defaultVariants: {
    period: "morning",
  },
})

export interface DaytimePageProps
  extends VariantProps<typeof daytimePageVariants> {
  children?: React.ReactNode
  header?: React.ReactNode
  embedded?: boolean
}

export function DaytimePage({
  children,
  header,
  period,
  embedded = false,
}: DaytimePageProps) {
  return (
    <div
      className={`relative flex w-full flex-col overflow-hidden ${
        embedded ? "" : "rounded-xl"
      } bg-f1-page shadow`}
    >
      <div className={daytimePageVariants({ period })} />
      {header && <div className="flex flex-col">{header}</div>}
      <div className="isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1">
        {children}
      </div>
    </div>
  )
}

DaytimePage.displayName = "DaytimePage"
