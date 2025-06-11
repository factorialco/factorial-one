import type { Meta, StoryObj } from "@storybook/react";
import {
  InboxView,
  type InboxSection,
  type FilterOption,
} from "@factorialco/factorial-one-react-native";
import { useState } from "react";

const emptyStateData = {
  title: "All caught up!",
  description: "You have no new notifications.",
  emoji: "🌿",
};

const meta: Meta<typeof InboxView> = {
  title: "Modules/Inbox/InboxView",
  component: InboxView,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Inbox",
    sections: [],
    emptyState: emptyStateData,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Define categories
const categories = ["Time Off", "Time Tracking", "Spending"];

// Generate sample data with categories
const categorizedSections: InboxSection[] = [
  {
    id: "1",
    title: "Today",
    data: [
      {
        id: "a",
        title: "Vacation Request",
        description: "John Doe requested vacation.",
        date: "2021-01-01",
        firstName: "John",
        lastName: "Doe",
        src: "https://i.pravatar.cc/150",
        category: "Time Off",
      },
      {
        id: "b",
        title: "Sick Leave",
        description: "Jane Doe reported sick leave.",
        date: "2021-01-02",
        firstName: "Jane",
        lastName: "Doe",
        src: "https://i.pravatar.cc/150",
        category: "Time Off",
      },
    ],
  },
  {
    id: "2",
    title: "Last week",
    data: [
      {
        id: "c",
        title: "Missing Entry",
        description: "John Doe missed a time entry.",
        date: "2021-01-03",
        firstName: "John",
        lastName: "Doe",
        src: "https://i.pravatar.cc/150",
        category: "Time Tracking",
      },
    ],
  },
  {
    id: "3",
    title: "Last month",
    data: [
      {
        id: "d",
        title: "Expense Report",
        description: "Jane Doe submitted an expense report.",
        date: "2021-01-04",
        firstName: "Jane",
        lastName: "Doe",
        src: "https://i.pravatar.cc/150",
        category: "Spending",
      },
      {
        id: "e",
        title: "Purchase Request",
        description: "John Doe requested a purchase.",
        date: "2021-01-05",
        firstName: "John",
        lastName: "Doe",
        src: "https://i.pravatar.cc/150",
        category: "Spending",
      },
      {
        id: "f",
        title: "Card Payment",
        description: "Jane Doe made a card payment.",
        date: "2021-01-06",
        firstName: "Jane",
        lastName: "Doe",
        src: "https://i.pravatar.cc/150",
        category: "Spending",
      },
    ],
  },
];

// Helper to count items by category
const getCategoryCount = (category: string) =>
  categorizedSections.reduce(
    (sum, section) =>
      sum + section.data.filter((item) => item.category === category).length,
    0,
  );

const buildFilters = (selectedCategory: string | undefined): FilterOption[] =>
  categories.map((cat) => ({
    label: cat,
    number: getCategoryCount(cat),
    selected: cat === selectedCategory,
  }));

const Template = (args: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );
  const filters = buildFilters(selectedCategory);
  const handleFilterChange = (idx: number) => {
    const cat = categories[idx];
    setSelectedCategory((prev) => (prev === cat ? undefined : cat));
  };
  // If no category is selected, show all sections
  const sectionsToShow = selectedCategory
    ? categorizedSections.filter((section) =>
        section.data.some((item) => item.category === selectedCategory),
      )
    : categorizedSections;
  return (
    <InboxView
      {...args}
      filters={filters}
      onFilterChange={handleFilterChange}
      category={selectedCategory}
      sections={sectionsToShow}
    />
  );
};

export const Default: Story = {
  render: Template,
};

export const DefaultWithFilters: Story = {
  render: Template,
};

export const DefaultNoFilters: Story = {
  render: (args: any) => <InboxView {...args} sections={categorizedSections} />,
};

export const Empty: Story = {
  args: {
    title: "Inbox (Empty)",
    sections: [],
    emptyState: emptyStateData,
  },
  render: Template,
};
