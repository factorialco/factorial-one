import { GranularityDefinitionKey } from "@/experimental/OneCalendar"
import { useI18n } from "@/lib/providers/i18n"
import { Select, SelectContent, SelectItem } from "@/ui/Select"
import { CalendarMode } from "../../OneCalendar/types"

interface GranularitySelectorProps {
  granularities: GranularityDefinitionKey[]
  value?: GranularityDefinitionKey
  onChange: (granularity: GranularityDefinitionKey, mode: CalendarMode) => void
  mode: CalendarMode
}

export function GranularitySelector({
  granularities,
  value,
  mode,
  onChange,
}: GranularitySelectorProps) {
  const i18n = useI18n()

  const handleChange = (granularity: GranularityDefinitionKey) => {
    onChange(granularity, granularity === "range" ? "range" : mode || "single")
  }

  return (
    <div className="flex flex-col gap-2">
      <h6 className="text-sm font-medium">{i18n.date.selectedBy}</h6>
      <Select value={value} onValueChange={handleChange} asList>
        <SelectContent>
          {granularities.map((granularity) => (
            <SelectItem key={granularity} value={granularity}>
              {(
                i18n.date.granularities as Record<
                  GranularityDefinitionKey,
                  { label: string }
                >
              )[granularity]?.label || granularity}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
