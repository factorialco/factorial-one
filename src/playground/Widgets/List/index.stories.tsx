import type { Meta, StoryObj } from "@storybook/react"
import { List } from "."

const meta: Meta<typeof List> = {
  component: List,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-72">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof List>

export const Default: Story = {
  args: {
    items: [
      { name: "Project 1", value: "115" },
      { name: "Project 2", value: "112" },
      { name: "Project 3", value: "111" },
    ],
  },
}

export const LongNames: Story = {
  args: {
    title: "Course Progress",
    items: [
      { name: "Introduction to Computer Science", value: "Completed" },
      { name: "Data Structures and Algorithms", value: "In Progress" },
      { name: "Object-Oriented Programming Concepts", value: "Started" },
      { name: "Database Management Systems", value: "Planned" },
    ],
  },
}

export const Progress: Story = {
  args: {
    title: "Skill Progress",
    items: [
      { name: "JavaScript", value: 80 },
      { name: "React", value: 75 },
      { name: "TypeScript", value: 70 },
      { name: "Node.js", value: 65 },
      { name: "CSS", value: 85 },
    ],
  },
}
