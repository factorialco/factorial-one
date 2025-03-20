import * as Icon from "@/icons/app/"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { SectionHeader } from "."
const meta: Meta<typeof SectionHeader> = {
  component: SectionHeader,
  title: "Section header",
  tags: ["experimental"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    separator: {
      control: {
        type: "select",
        options: ["top", "bottom"],
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof SectionHeader>

export const Default: Story = {
  args: {
    title: "What is a template?",
    description:
      "Create document templates to automate the generation of documents with employee information. You can upload PDFs with fillable capabilities containing variables, DOCx files with variables, or any other types of documents that you need to send to employees.",
    action: {
      label: "Add template",
      icon: Icon.Add,
      onClick: fn(),
    },
    supportButton: {
      label: "Help Center link",
      href: "https://help.factorialhr.com/",
    },
    separator: "bottom",
  },
}

export const NoAction: Story = {
  args: {
    title: "Course catalog",
    description: "Select any course you would like to request.",
    supportButton: {
      label: "Help Center link",
      href: "https://help.factorialhr.com/",
    },
  },
}

export const PrimaryAction: Story = {
  args: {
    ...Default.args,
    action: {
      label: "Add template",
      icon: Icon.Add,
      variant: "default",
    },
  },
}
