import { formatMonth, getDayOfMonth } from "@/lib/date"

type Props = {
  date: Date
}

export const DateAvatar = ({ date }: Props) => {
  const dateDay = getDayOfMonth(date)
  const dateMonth = formatMonth(date)
  const monthName = dateMonth.slice(0, 3)

  return (
    <div className="flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary">
      <div className="pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-foreground-critical dark:text-f1-foreground-inverse-secondary">
        {monthName}
      </div>
      <div className="flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground">
        {dateDay}
      </div>
    </div>
  )
}
