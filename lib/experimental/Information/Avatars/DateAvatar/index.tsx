type Props = {
  month: string
  day: number
}

export const DateAvatar = ({ month, day }: Props) => {
  const monthName = month.slice(0, 3)

  return (
    <div className="flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary">
      <div className="text-xs pt-0.5 font-semibold uppercase leading-3 text-f1-foreground-critical">
        {monthName}
      </div>
      <div className="flex items-center justify-center text-lg font-medium leading-tight">
        {day}
      </div>
    </div>
  )
}
