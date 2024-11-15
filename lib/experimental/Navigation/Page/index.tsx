interface PageProps {
  children?: React.ReactNode
  header?: React.ReactNode
}

export function Page({ children, header }: PageProps) {
  return (
    <div className="bg-f1-page flex w-full flex-col overflow-hidden rounded-xl shadow">
      {header && <div className="flex flex-col">{header}</div>}
      <div className="isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1">
        {children}
      </div>
    </div>
  )
}
