import React from "react"
// Assuming DatePickerValue and DatePickerMode are defined in ./types
// import { DatePickerValue, DatePickerMode } from './types';

// Placeholder types until actual types are available
type DatePickerValue = Date | [Date, Date] | null
type DatePickerMode = "single" | "range"

interface DatePickerTriggerProps {
  value: DatePickerValue
  mode: DatePickerMode
  isOpen: boolean
  onClick: () => void
  placeholder?: string
  locale?: string
  disabled?: boolean
  invalid?: boolean
  // It's good practice to allow className for styling overrides
  className?: string
}

// Helper function to format dates (simplified, replace with project standard if available)
const formatDate = (date: Date, locale?: string): string => {
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

const formatRange = (
  startDate: Date,
  endDate: Date,
  locale?: string
): string => {
  const startStr = formatDate(startDate, locale)
  const endStr = formatDate(endDate, locale)

  if (startDate.getFullYear() === endDate.getFullYear()) {
    if (startDate.getMonth() === endDate.getMonth()) {
      // "May 1 – 15, 2025"
      return `${new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" }).format(startDate)} – ${new Intl.DateTimeFormat(locale, { day: "numeric" }).format(endDate)}, ${startDate.getFullYear()}`
    }
    // "May 1 – Jun 15, 2025"
    return `${new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" }).format(startDate)} – ${new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" }).format(endDate)}, ${startDate.getFullYear()}`
  }
  // "May 1, 2025 – May 15, 2026"
  return `${startStr} – ${endStr}`
}

export const DatePickerTrigger: React.FC<DatePickerTriggerProps> = ({
  value,
  mode,
  isOpen,
  onClick,
  placeholder = "Select Date",
  locale,
  disabled,
  invalid,
  className,
}) => {
  let displayText = placeholder

  if (value) {
    if (mode === "single" && value instanceof Date) {
      displayText = formatDate(value, locale)
    } else if (mode === "range" && Array.isArray(value) && value.length === 2) {
      const [startDate, endDate] = value
      if (startDate && endDate) {
        displayText = formatRange(startDate, endDate, locale)
      }
    }
  }

  // Basic styling - replace with actual design system classes/components
  const baseClasses =
    "flex items-center justify-between w-full p-2 border rounded text-left"
  const disabledClasses = disabled
    ? "bg-gray-100 cursor-not-allowed opacity-50"
    : "hover:bg-gray-50"
  const invalidClasses = invalid
    ? "border-red-500 text-red-700"
    : "border-gray-300"
  const combinedClassName = `${baseClasses} ${disabledClasses} ${invalidClasses} ${className || ""}`

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-invalid={invalid}
      className={combinedClassName}
    >
      <span>{displayText}</span>
      {/* Placeholder for Calendar Icon - replace with actual Icon component */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-gray-400 ml-2 h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zM4.5 8.25A.75.75 0 015.25 9h9.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75V8.25zM5.5 12a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  )
}

DatePickerTrigger.displayName = "DatePickerTrigger"
