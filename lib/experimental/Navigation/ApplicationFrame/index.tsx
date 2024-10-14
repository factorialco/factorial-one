interface ApplicationFrameProps {
  sidebar: React.ReactNode
  children: React.ReactNode
}

export const ApplicationFrame: React.FC<ApplicationFrameProps> = ({
  children,
  sidebar,
}) => {
  return (
    <div className="flex h-full flex-row gap-3">
      <div className="w-64 pl-3">{sidebar}</div>
      <div className="flex flex-1">{children}</div>
    </div>
  )
}
