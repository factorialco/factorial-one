import { AutoGrid } from "@/factorial-one"
import { ComponentProps, forwardRef, ReactNode } from "react"

type DashboardProps = {
  header?: {
    title: string
    description?: string
  }
  tileSize?: ComponentProps<typeof AutoGrid>["tileSize"]
  children?: ReactNode
}

export const Dashboard = forwardRef<HTMLDivElement, DashboardProps>(
  ({ header, children, tileSize }, ref) => (
    <div>
      {header && (
        <div className="flex flex-col gap-1 pb-6 leading-normal">
          <h2 className="text-xl font-semibold">{header.title}</h2>
          {header.description && (
            <div className="max-w-screen-md text-muted-foreground">
              {header.description}
            </div>
          )}
        </div>
      )}
      <AutoGrid ref={ref} tileSize={tileSize}>
        {children}
      </AutoGrid>
    </div>
  )
)
