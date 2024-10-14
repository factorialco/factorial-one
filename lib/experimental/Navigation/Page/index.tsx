interface PageProps {
  children?: React.ReactNode
  header?: React.ReactNode
}

export function Page({ children, header }: PageProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl bg-f1-background shadow">
      {header && <div className="flex flex-col">{header}</div>}
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-5">
        {children}
      </div>
    </div>
  )
}
