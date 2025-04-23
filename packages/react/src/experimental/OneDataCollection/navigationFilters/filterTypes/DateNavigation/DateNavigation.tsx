import { Button } from "@/components/Actions/exports"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { DateGranularity, setDateGranularity } from "@/lib/date"
import { addDays, isAfter, isBefore, isEqual } from "date-fns"
import {
  NavigationFilterComponentProps,
  NavigationFilterDefinitionBase,
} from "../../types"

export interface DateNavigatorFilterDefinition
  extends NavigationFilterDefinitionBase<Date> {
  type: "date-navigator"
  options?: {
    granularity?: DateGranularity
    min?: Date
    max?: Date
  }
}

type DateNavigationProps = NavigationFilterComponentProps<Date>

// type DateValue = {
//   dateValue: [Date, Date]
//   granularity: DateGranularity
// } & (
//   | {
//       value: [`W${number}`, `W${number}`]
//       granularity: "week"
//     }
//   | {
//       value: [Date, Date]
//       granularity: "day"
//     }
//   | {
//       value: [Date, Date]
//       granularity: "month"
//     }
//   | {
//       value: [Date, Date]
//       granularity: "year"
//     }
// )
export function DateNavigation({
  filter,
  value,
  onChange,
}: DateNavigationProps) {
  const options = {
    granularity: "day" as const,
    ...filter.options,
  }

  const valueWithGranularity = setDateGranularity(value, options.granularity)
  const minWithGranularity =
    options.min && setDateGranularity(options.min, options.granularity)
  const maxWithGranularity =
    options.max && setDateGranularity(options.max, options.granularity)

  const handleChange = (date: Date, step: 1 | -1) => {
    const newDate = addDays(date, step)
    onChange(newDate)
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        icon={ChevronLeft}
        label="Previous"
        disabled={
          minWithGranularity &&
          (isBefore(valueWithGranularity, minWithGranularity) ||
            isEqual(valueWithGranularity, minWithGranularity))
        }
        onClick={() => handleChange(valueWithGranularity, -1)}
      />
      <Button
        size="sm"
        icon={ChevronRight}
        label="Next"
        disabled={
          maxWithGranularity &&
          (isAfter(valueWithGranularity, maxWithGranularity) ||
            isEqual(valueWithGranularity, maxWithGranularity))
        }
        onClick={() => handleChange(valueWithGranularity, 1)}
      />
    </div>
  )
}
