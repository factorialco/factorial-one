import type { Meta, StoryObj } from "@storybook/react";
import {
  InboxView,
  type InboxSection,
} from "@factorialco/factorial-one-react-native";

function generateSampleSections(count: number): InboxSection[] {
  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    title: `Section ${i + 1}`,
    data: [
      {
        id: String.fromCharCode(97 + (i % 26)),
        title: `Item 1 in Section ${i + 1}`,
        description: `Description ${i + 1}`,
        date: `2021-01-${(i + 1).toString().padStart(2, "0")}`,
      },
      {
        id: String.fromCharCode(97 + ((i + 1) % 26)),
        title: `Item 2 in Section ${i + 1}`,
        description: `Description ${i + 1}b`,
        date: `2021-01-${(i + 2).toString().padStart(2, "0")}`,
      },
    ],
  }));
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
