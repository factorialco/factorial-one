import { Meta, StoryObj } from "@storybook/react"
import { addDays } from "date-fns"
import { ExampleComponent } from "./mockData"

const meta = {
  title: "Data Collection/Navigation Filters",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "<p>Navigation filters are filters that are used to filter the data in the collection but they are not the same as the filters. They are displayed in the top left of the collection. For example, a date navigator is a filter that allows you to filter the data by date, and using the arrow keys you can navigate through the dates.</p>",
      },
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        initialValue: new Date(),
        granularity: "day",
        min: new Date(),
        max: addDays(new Date(), 1),
      },
    },
  },
}

export const WeekGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        initialValue: new Date(),
        granularity: "week",
        min: new Date(),
        max: addDays(new Date(), 1),
      },
    },
  },
}

export const FortnightGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        initialValue: new Date(),
        granularity: "fortnight",
        min: new Date(),
        max: addDays(new Date(), 1),
      },
    },
  },
}

export const MonthGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        initialValue: new Date(),
        granularity: "month",
        min: new Date(),
        max: addDays(new Date(), 1),
      },
    },
  },
}

export const YearGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        initialValue: new Date(),
        granularity: "year",
        min: new Date(),
        max: addDays(new Date(), 1),
      },
    },
  },
}

export const CustomGranularity: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        initialValue: [new Date(), addDays(new Date(), 3)],
        granularity: "custom",
        min: new Date(),
        max: addDays(new Date(), 100),
      },
    },
  },
}

export const MultipleGranularities: Story = {
  args: {
    navigationFilters: {
      date: {
        type: "date-navigator",
        initialValue: new Date(),
        defaultGranularity: "day",
        granularity: ["day", "week", "month", "year", "custom"],
        min: new Date(),
        max: addDays(new Date(), 100),
      },
    },
  },
}
