import { Meta, StoryObj } from "@storybook/react"
import { PropertyDefinition, renderProperty } from "../property-render"

function Cell({
  item,
  property,
}: {
  item: typeof mockItem
  property: PropertyDefinition<typeof mockItem>
}) {
  return renderProperty(item, property, "table")
}
const meta = {
  title: "Data Collection/Cell Types",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Cell types are a way to render data in a data collection. They are defined in the `render` function of the data collection. The type is the cell type to render and the value depends on that type.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const mockItem = {
  id: "1",
  lastName: "Doe",
  firstName: "John",
  salary: 100000,
  date: new Date(2025, 1, 1),
  role: "Engineer",
  amount: 100000,
  status: "Active",
  avatar: "https://github.com/nlopin.png",
  avatarList: [
    {
      type: "person" as const,
      firstName: "John",
      lastName: "Doe",
      src: "https://github.com/nlopin.png",
    },
    {
      type: "person" as const,
      firstName: "Josep",
      lastName: "Rey",
      src: "https://github.com/josepjaume.png",
    },
  ],
  companyName: "Factorial",
  companyLogo: "https://github.com/factorialco.png",
  teamName: "Engineering",
  teamLogo: "https://github.com/factorialco.png",
}

// Basic story showing all action types
export const TextType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Name",
      render: (item) => item.firstName + " " + item.lastName,
    },
  },
}

export const NumberType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Employee ID",
      render: (item) => ({
        type: "number",
        value: Number(item.id),
      }),
    },
  },
}

export const DateType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Date",
      render: (item) => ({
        type: "date",
        value: item.date,
      }),
    },
  },
}

export const AmountType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Amount",
      render: (item) => ({
        type: "amount",
        value: item.amount,
      }),
    },
  },
}

export const AvatarListType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Avatar List",
      render: (item) => ({
        type: "avatarList",
        value: {
          avatarList: item.avatarList,
          max: 2,
        },
      }),
    },
  },
}

export const StatusType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Status",
      render: (item) => ({
        type: "status",
        value: {
          status: "critical",
          label: item.status,
        },
      }),
    },
  },
}

export const PersonType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Person",
      render: (item) => ({
        type: "person",
        value: {
          firstName: item.firstName,
          lastName: item.lastName,
          src: item.avatar,
        },
      }),
    },
  },
}

export const CompanyType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Company",
      render: (item) => ({
        type: "company",
        value: {
          name: item.companyName,
          src: item.companyLogo,
        },
      }),
    },
  },
}

export const TeamType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Team",
      render: (item) => ({
        type: "team",
        value: {
          name: item.teamName,
          src: item.teamLogo,
        },
      }),
    },
  },
}

export const TagType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Tag",
      render: (item) => ({
        type: "tag",
        value: {
          label: item.status,
          color: item.status === "active" ? "green" : "red",
        },
      }),
    },
  },
}

export const DotTagType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Dot Tag",
      render: (item) => ({
        type: "dotTag",
        value: {
          label: item.role,
          color: "viridian",
        },
      }),
    },
  },
}

export const MultipleDotTagType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "multiple dotTag",
      render: (item) => ({
        type: "dotTag",
        value: [
          {
            label: item.role,
            color: "camel",
          },
          {
            label: item.status,
            color: "viridian",
          },
        ],
      }),
    },
  },
}
