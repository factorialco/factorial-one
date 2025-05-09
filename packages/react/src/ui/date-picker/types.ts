export type DatePickerMode = "single" | "range"
export type DatePickerValue = Date | [Date, Date] | null

// As per section 4. Data Flow
export interface DatePickerState {
  value: DatePickerValue
  tempValue: DatePickerValue

  isOpen: boolean
  currentView: "month" | "year" | "decade"
  viewDate: Date

  selectionMode:
    | "day"
    | "week"
    | "biweekly"
    | "month"
    | "quarter"
    | "halfyear"
    | "year"
    | "range"
  selectionState: "idle" | "selecting-start" | "selecting-end"

  activePanel: "presets" | "custom"
}

// As per section 4. Data Flow - Component Interfaces - DatePickerProps
export interface DatePickerProps {
  mode: DatePickerMode
  value?: DatePickerValue
  defaultValue?: DatePickerValue
  onChange?: (value: DatePickerValue) => void

  minDate?: Date
  maxDate?: Date
  disabledDates?: Date[] | ((date: Date) => boolean)

  // Presets will be defined in more detail later
  presets?: Preset[] // eslint-disable-line @typescript-eslint/no-explicit-any
  defaultPreset?: string

  locale?: string
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 // 0 = Sunday
  showTodayButton?: boolean
  closeOnSelect?: boolean
  placeholder?: string

  name?: string
  disabled?: boolean
  required?: boolean
}

// As per section 3.4 Presets Panel and 4. Data Flow - Component Interfaces - Preset
export interface Preset {
  id: string
  label: string
  getRange: () => [Date, Date]
}

// As per section 4. Data Flow - Component Interfaces - SelectionModeHandler
// This will be fleshed out as we implement selection modes
export interface SelectionModeHandler {
  mode: string
  getSelectableDates: (baseDate: Date) => Date[]
  getHighlightedDates: (date: Date) => Date[]
  handleDateClick: (
    date: Date,
    currentSelection: DatePickerValue
  ) => DatePickerValue
  formatSelection: (selection: DatePickerValue, locale?: string) => string
}

export interface DatePickerContentProps {
  presets?: Preset[]
  onSelectPreset: (range: [Date, Date]) => void
  onApply: () => void
  onCancel: () => void

  // Props for CalendarGrid integration
  viewDate: Date
  selectedDate: DatePickerState["tempValue"] // Reflects the temporary/staging selection
  onDateSelect: (date: Date) => void
  minDate?: Date
  maxDate?: Date
  locale?: string
  selectionMode: "day" | "week" | "range" // CalendarGrid's expected modes
  // onNavigate?: (newViewDate: Date) => void; // For month/year navigation, to be added later
}
