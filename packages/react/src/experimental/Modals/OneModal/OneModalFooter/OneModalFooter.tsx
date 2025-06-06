export type OneModalFooterProps = {
  children: React.ReactNode
}

export const OneModalFooter = ({ children }: OneModalFooterProps) => {
  return (
    <div className="flex min-h-18 flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary bg-f1-background p-5">
      {children}
    </div>
  )
}
