import { CategoryBar } from "@/components/Charts/CategoryBarChart"
import { ProgressBar } from "@/components/Charts/ProgressChart"
import {
  WidgetContainer,
  WidgetContainerProps,
} from "@/components/Widgets/WidgetContainer"

interface TimesheetProps extends WidgetContainerProps {
  workedHours: number
  plannedHours: number
  workedHoursLabel: string
  balance: number
  maxBalance: number
  balanceLabel: string
}

interface ProgressSectionProps {
  label: string
  value: number
  max: number
  showMax?: boolean
  unit?: string
}

const ProgressSection = ({
  label,
  value,
  max,
  showMax = false,
  unit = "h",
}: ProgressSectionProps) => {
  const isOvertime = value > max

  const renderChart = () => {
    if (isOvertime) {
      return (
        <CategoryBar
          data={[
            { name: "Planned", value: max },
            {
              name: "Overtime",
              value: value - max,
              color: "hsl(var(--primary-intermediate))",
            },
          ]}
          legend={true}
        />
      )
    } else {
      return <ProgressBar value={value} max={max} />
    }
  }

  return (
    <div className="space-y-2">
      <div className="space-y-0.5">
        <span className="text-base leading-none text-muted-foreground">
          {label}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">
            {value}
            {unit}
          </span>
          {showMax && (
            <span className="text-lg font-medium text-muted-foreground">{` / ${max}${unit}`}</span>
          )}
        </div>
      </div>
      {renderChart()}
    </div>
  )
}

export function Timesheet({
  workedHours,
  plannedHours,
  workedHoursLabel,
  balance,
  maxBalance,
  balanceLabel,
  ...widgetProps
}: TimesheetProps) {
  return (
    <WidgetContainer {...widgetProps}>
      <ProgressSection
        label={workedHoursLabel}
        value={workedHours}
        max={plannedHours}
        showMax={true}
      />
      <ProgressSection
        label={balanceLabel}
        value={balance}
        max={maxBalance}
        showMax={true}
      />
    </WidgetContainer>
  )
}
