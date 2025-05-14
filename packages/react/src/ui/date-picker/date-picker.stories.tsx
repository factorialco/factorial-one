import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { DatePicker } from "./date-picker"
import { DatePickerProps } from "./types"

const meta: Meta<typeof DatePicker> = {
  title: "UI/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "radio",
      options: ["single", "range"],
    },
    value: {
      control: "date",
    },
    defaultValue: {
      control: "date",
    },
    onChange: { action: "changed" },
    minDate: {
      control: "date",
    },
    maxDate: {
      control: "date",
    },
    placeholder: {
      control: "text",
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    showTodayButton: { control: "boolean" },
    closeOnSelect: { control: "boolean" },
    locale: { control: "text" },
    presets: {
      control: "object",
    },
  },
}

export default meta

type Story = StoryObj<DatePickerProps>

export const DefaultSingle: Story = {
  args: {
    mode: "single",
    placeholder: "Select a date",
  },
}

export const DefaultRange: Story = {
  args: {
    mode: "range",
    placeholder: "Select a date range",
  },
}

export const Disabled: Story = {
  args: {
    mode: "single",
    placeholder: "Cannot select (disabled)",
    disabled: true,
    defaultValue: new Date(),
  },
}

export const WithLocale_FR: Story = {
  args: {
    mode: "single",
    placeholder: "Sélectionnez une date",
    locale: "fr-FR",
    defaultValue: new Date(),
  },
}

export const WithPresets: Story = {
  args: {
    mode: "range",
    presets: [
      {
        id: "today",
        label: "Today",
        getRange: () => {
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          return [today, today]
        },
      },
      {
        id: "this_week",
        label: "This week",
        getRange: () => {
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          const dayOfWeek = today.getDay() // 0 (Sun) - 6 (Sat)
          const startDate = new Date(today)
          startDate.setDate(today.getDate() - dayOfWeek) // Assuming week starts on Sunday
          const endDate = new Date(startDate)
          endDate.setDate(startDate.getDate() + 6)
          return [startDate, endDate]
        },
      },
      {
        id: "this_month",
        label: "This month",
        getRange: () => {
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          const startDate = new Date(today.getFullYear(), today.getMonth(), 1)
          const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0) // 0 day of next month gives last day of current month
          return [startDate, endDate]
        },
      },
      {
        id: "last_3_months",
        label: "Last 3 months",
        getRange: () => {
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          const endDate = new Date(today)
          const startDate = new Date(today)
          startDate.setDate(today.getDate() - 90)
          return [startDate, endDate]
        },
      },
      {
        id: "last_6_months",
        label: "Last 6 months",
        getRange: () => {
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          const endDate = new Date(today)
          const startDate = new Date(today)
          startDate.setDate(today.getDate() - 180)
          return [startDate, endDate]
        },
      },
      {
        id: "last_year",
        label: "Last year",
        getRange: () => {
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          const endDate = new Date(today)
          const startDate = new Date(today)
          startDate.setDate(today.getDate() - 365)
          return [startDate, endDate]
        },
      },
      {
        id: "year_to_date",
        label: "Year to date",
        getRange: () => {
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          const startDate = new Date(today.getFullYear(), 0, 1) // January 1st of current year
          const endDate = new Date(today)
          return [startDate, endDate]
        },
      },
    ],
  },
}

export const ControlledSingle: Story = {
  args: {
    mode: "single",
    value: new Date(2024, 0, 15), // Jan 15, 2024
  },
  render: (args) => {
    const [date, setDate] = React.useState<DatePickerProps["value"]>(args.value)
    return (
      <DatePicker
        {...args}
        value={date}
        onChange={(newDate) => {
          args.onChange?.(newDate)
          setDate(newDate)
        }}
      />
    )
  },
}
