interface PageProps {
  children?: React.ReactNode
  header?: React.ReactNode
}

export function Page({ children, header }: PageProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl bg-f1-background shadow">
      {header && <div className="flex flex-col">{header}</div>}
      <div className="isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1">
        {children}
      </div>
    </div>
  )
}
