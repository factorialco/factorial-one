import { Layout } from "./Layouts/"
import { LayoutType } from "./Layouts/types"

interface PageProps {
  children?: React.ReactNode
  header?: React.ReactNode
  layout?: LayoutType
}

export function Page({ children, header, layout = "standard" }: PageProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl bg-f1-background shadow">
      {header && <div className="flex flex-col">{header}</div>}
      <Layout layout={layout}>{children}</Layout>
    </div>
  )
}
