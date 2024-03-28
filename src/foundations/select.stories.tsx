import type { Meta, StoryObj } from "@storybook/react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/foundations/select"

const meta: Meta = {
  component: Select,
  title: "Foundations / select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    render: () => {
        return (
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        )
    }
};