export const Sidebar: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <div className="flex flex-col gap-2 px-3">{children}</div>
}
