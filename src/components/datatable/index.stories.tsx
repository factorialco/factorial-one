import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./";

const meta: Meta = {
    component: DataTable,
    title: "Components / DataTable",
    parameters: {
        tags: ["autodocs"],
    },
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
