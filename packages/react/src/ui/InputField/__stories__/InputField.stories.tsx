import * as icons from "@/icons/app"
import { Search } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { InputField } from "../"

const meta = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    docs: {
      description: {
        component: [
          "The `InputField` component is a wrapper around any `input` that allows us to share code and behavior between different input types.",
        ]
          .map((text) => `<p>${text}.</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    label: {
      description:
        "Label text for the input field (required for accessibility)",
      control: "text",
    },
    hideLabel: {
      description:
        "Whether to hide the label visually while keeping it accessible",
      control: "boolean",
    },
    placeholder: {
      description: "Placeholder text for the input",
      control: "text",
    },
    value: {
      description: "Current value of the input field",
      control: "text",
    },
    onChange: {
      description: "Callback function called when the input value changes",
      action: "changed",
    },
    size: {
      description: "Size variant of the input field",
      control: "select",
      options: ["sm", "md"],
    },
    error: {
      description:
        "Error message(s) to display. Can be a string, array of strings, or boolean",
      control: "text",
    },
    disabled: {
      description: "Whether the input field is disabled",
      control: "boolean",
    },
    className: {
      description: "Additional CSS classes to apply to the wrapper",
      control: "text",
    },
    required: {
      description: "Whether the input field is required",
      control: "boolean",
    },
    clearable: {
      description: "Whether to show a clear button",
      control: "boolean",
    },
    onClear: {
      description: "Callback function called when the clear button is clicked",
      action: "cleared",
    },
    onFocus: {
      description: "Callback function called when the input receives focus",
      action: "focused",
    },
    onBlur: {
      description: "Callback function called when the input loses focus",
      action: "blurred",
    },
    children: {
      description: "Child elements to render inside the input field wrapper",
      control: false,
    },
    icon: {
      description: "Icon to display inside the input field",
      control: "select",
      mapping: icons,
      options: Object.keys(icons),
    },
  },
  tags: ["autodocs", "internal"],
} satisfies Meta<typeof InputField>

console.log(icons)
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label:
      "This is the label asd very long label asd asd asm,d khjdsf skjThis is the label This is the label This is the labelv This is the label This is the label This is the label This is the label This is the label This is the label This is the label This is the label This is the label This is the label",
    value: "This is the value",
    onChange: () => {},
    children: <input type="text" className="w-full rounded border px-3 py-2" />,
  },
}

export const WithIcon: Story = {
  args: {
    label: "This is the label",
    value: "This is the value",
    onChange: () => {},
    children: <input type="text" className="w-full rounded border px-3 py-2" />,
    icon: Search,
  },
}

export const Clearable: Story = {
  args: {
    label: "This is the label",
    value: "This is the value",
    onChange: () => {},
    children: <input type="text" className="w-full rounded border px-3 py-2" />,
    icon: Search,
    clearable: true,
  },
}

export const Disabled: Story = {
  args: {
    label: "This is the label",
    value: "This is the value",
    onChange: () => {},
    children: <input type="text" className="w-full rounded border px-3 py-2" />,
    icon: Search,
    clearable: true,
    disabled: true,
  },
}

export const Error: Story = {
  args: {
    label: "This is the label",
    value: "This is the value",
    onChange: () => {},
    children: <input type="text" className="w-full rounded border px-3 py-2" />,
    icon: Search,
    clearable: true,
    error: true,
  },
}

export const Required: Story = {
  args: {
    label: "This is the label",
    value: "This is the value",
    onChange: () => {},
    children: <input type="text" className="w-full rounded border px-3 py-2" />,
    icon: Search,
    clearable: true,
    required: true,
  },
}

export const HideLabel: Story = {
  args: {
    label: "This is the label",
    value: "This is the value",
    onChange: () => {},
    children: <input type="text" className="w-full rounded border px-3 py-2" />,
    icon: "search",
    clearable: true,
    hideLabel: true,
    required: true,
  },
}

export const WithTag: Story = {
  args: {
    label: "This is the label",
    value: "This is the value",
    onChange: () => {},
    children: <input type="text" className="w-full rounded border px-3 py-2" />,
    icon: "search",
    clearable: true,
    tag: "Tag",
  },
}

export const WithMaxLength: Story = {
  args: {
    label: "This is the label",
    value: "This is the value",
    onChange: () => {},
    children: <input type="text" className="w-full rounded border px-3 py-2" />,
    icon: "search",
    clearable: true,
    tag: "Tag",
    maxLength: 100,
  },
}
