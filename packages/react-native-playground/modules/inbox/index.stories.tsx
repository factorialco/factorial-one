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
        date: "01/01/2025",
        firstName: "John",
        lastName: "Doe",
        src: "https://i.pravatar.cc/150",
        category: "Time Off",
        due: "Due in 2 days",
      },
      {
        id: "b",
        title: "Sick Leave",
        description: "Jane Doe reported sick leave.",
        date: "02/01/2025",
        firstName: "Jane",
        lastName: "Doe",
        src: "https://i.pravatar.cc/150",
        category: "Time Off",
        due: "Due in 2 days",
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
        date: "03/01/2025",
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
        date: "04/01/2025",
        firstName: "Jane",
        lastName: "Doe",
        src: "https://i.pravatar.cc/150",
        category: "Spending",
      },
      {
        id: "e",
        title: "Purchase Request",
        description: "John Doe requested a purchase.",
        date: "05/01/2025",
        firstName: "John",
        lastName: "Doe",
        src: "https://i.pravatar.cc/150",
        category: "Spending",
      },
      {
        id: "f",
        title: "Card Payment",
        description: "Jane Doe made a card payment.",
        date: "06/01/2025",
        firstName: "Jane",
        lastName: "Doe",
        src: "https://i.pravatar.cc/150",
        category: "Spending",
      },
    ],
  },
];

const getAvailableCategories = (sections: InboxSection[]): string[] => {
  const set = new Set<string>();
  sections.forEach((section) => {
    section.data.forEach((item) => {
      if (item.category) set.add(item.category);
    });
  });
  return Array.from(set);
};

const getCategoryCount = (category: string, sections: InboxSection[]) =>
  sections.reduce(
    (sum, section) =>
      sum + section.data.filter((item) => item.category === category).length,
    0,
  );

const buildFilters = (
  selectedCategory: string | undefined,
  availableCategories: string[],
  sections: InboxSection[],
): FilterOption[] =>
  availableCategories.map((cat) => ({
    label: cat,
    number: getCategoryCount(cat, sections),
    selected: cat === selectedCategory,
  }));

const Template = (args: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );

  // Use args.sections if provided, otherwise use categorizedSections
  const baseSections =
    args.sections !== undefined ? args.sections : categorizedSections;

  const availableCategories = getAvailableCategories(baseSections);

  const sectionsToShow = selectedCategory
    ? baseSections.filter((section: InboxSection) =>
        section.data.some(
          (item) => (item as any).category === selectedCategory,
        ),
      )
    : baseSections;

  // Always show filters if there are available categories
  const filters =
    availableCategories.length > 0
      ? buildFilters(selectedCategory, availableCategories, baseSections)
      : [];

  const handleFilterChange = (idx: number) => {
    const cat = availableCategories[idx];
    setSelectedCategory((prev) => (prev === cat ? undefined : cat));
  };

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
  args: {
    title: "Inbox (Mixed Indicators)",
    sections: [
      {
        id: "1",
        title: "Today",
        data: [
          {
            id: "a",
            title: "Vacation Request",
            description: "John Doe requested vacation.",
            date: "01/01/2025",
            firstName: "John",
            lastName: "Doe",
            src: "https://i.pravatar.cc/150",
            category: "Time Off",
            due: "Due in 2 days",
            indicatorType: "navigate",
          },
          {
            id: "b",
            title: "Sick Leave",
            description: "Jane Doe reported sick leave.",
            date: "02/01/2025",
            firstName: "Jane",
            lastName: "Doe",
            src: "https://i.pravatar.cc/150",
            category: "Time Off",
            due: "Due in 2 days",
            indicatorType: "open_detail",
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
            date: "03/01/2025",
            firstName: "John",
            lastName: "Doe",
            src: "https://i.pravatar.cc/150",
            category: "Time Tracking",
            indicatorType: "not_actionable",
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
            date: "04/01/2025",
            firstName: "Jane",
            lastName: "Doe",
            src: "https://i.pravatar.cc/150",
            category: "Spending",
            indicatorType: "open_browser",
          },
          {
            id: "e",
            title: "Purchase Request",
            description: "John Doe requested a purchase.",
            date: "05/01/2025",
            firstName: "John",
            lastName: "Doe",
            src: "https://i.pravatar.cc/150",
            category: "Spending",
            indicatorType: "navigate",
          },
        ],
      },
    ],
    emptyState: emptyStateData,
  },
  render: Template,
};

export const DefaultWithFilters: Story = {
  args: {
    sections: categorizedSections,
  },
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

export const WithNavigateIndicator: Story = {
  args: {
    title: "Inbox (Navigate Indicator)",
    sections: [
      {
        id: "1",
        title: "Today",
        data: [
          {
            id: "a",
            title: "Vacation Request",
            description: "John Doe requested vacation.",
            date: "01/01/2025",
            firstName: "John",
            lastName: "Doe",
            src: "https://i.pravatar.cc/150",
            indicatorType: "navigate",
          },
        ],
      },
    ],
    emptyState: emptyStateData,
  },
  render: Template,
};

export const WithOpenBrowserIndicator: Story = {
  args: {
    title: "Inbox (Open Browser Indicator)",
    sections: [
      {
        id: "1",
        title: "Today",
        data: [
          {
            id: "b",
            title: "Expense Report",
            description: "Jane Doe submitted an expense report.",
            date: "04/01/2025",
            firstName: "Jane",
            lastName: "Doe",
            src: "https://i.pravatar.cc/150",
            indicatorType: "open_browser",
          },
        ],
      },
    ],
    emptyState: emptyStateData,
  },
  render: Template,
};
