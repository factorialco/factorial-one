import type { Meta, StoryObj } from "@storybook/react";
import {
  InboxView,
  type InboxSection,
} from "@factorialco/factorial-one-react-native";

function generateSampleSections(count: number): InboxSection[] {
  return Array.from({ length: count }, (_, i) => {
    const itemsCount = Math.floor(Math.random() * 5) + 1; // 1 to 5 items
    const data = Array.from({ length: itemsCount }, (__, j) => ({
      id: String.fromCharCode(97 + ((i + j) % 26)),
      title: `Item ${j + 1} in Section ${i + 1}`,
      description: `Description ${i + 1}${j > 0 ? String.fromCharCode(97 + j) : ""}`,
      date: `2021-01-${(i + j + 1).toString().padStart(2, "0")}`,
      firstName: j % 2 === 0 ? "John" : "Jane",
      lastName: "Doe",
      src: "https://i.pravatar.cc/150",
    }));
    return {
      id: (i + 1).toString(),
      title: `Section ${i + 1}`,
      data,
    };
  });
}

const sampleSections: InboxSection[] = generateSampleSections(22);

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
    sections: sampleSections,
    emptyState: emptyStateData,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    title: "Inbox (Empty)",
    sections: [],
    emptyState: emptyStateData,
  },
};
