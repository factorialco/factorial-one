import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { useState } from "react"
import { AvatarNameSelector } from "."
import avatar from "../../../../storybook-assets/avatar.jpeg"
import { AvatarNamedEntity } from "./types"

// --------------------------------------
// EXAMPLE GRAPHQL COMMENT BLOCK
// --------------------------------------
/**
 * Example of graphql request:
 *   query AvatarNameSelector($active: Boolean, $companyId: Int!, $ids: [Int!], $legalEntityIds: [Int!], $search: String) {
 *     employees {
 *       employeeNames(
 *         companyId: $companyId
 *         ids: $ids
 *         legalEntityIds: $legalEntityIds
 *         onlyActive: $active
 *         search: $search
 *       ) {
 *         ...AvatarNameForSelect
 *         __typename
 *       }
 *       __typename
 *     }
 *   }
 *
 *   fragment AvatarNameForSelect on EmployeesEmployeeName {
 *     id
 *     avatar {
 *       id
 *       url
 *       __typename
 *     }
 *     firstName
 *     fullName
 *     lastName
 *     preferredName
 *     __typename
 *   }
 */

// --------------------------------------
// INTERFACE FOR THE EMPLOYEE FETCH RESULT
// --------------------------------------
interface FetchEmployee {
  id: number
  firstName: string
  fullName: string
  lastName: string
  preferredName: string | null
  __typename: "EmployeesEmployeeName"
  avatar: {
    id: number
    url: string
    __typename: "ApiCoreAttachment"
  } | null
}

// --------------------------------------
// MOCK DATA
// --------------------------------------
const response: {
  employees: { __typename: "employees"; employeeNames: FetchEmployee[] }
} = {
  employees: {
    __typename: "employees",
    employeeNames: [
      {
        id: 5,
        firstName: "Hellen",
        fullName: "Hellen the HR",
        lastName: "the HR",
        preferredName: null,
        __typename: "EmployeesEmployeeName",
        avatar: {
          id: 3,
          url: avatar,
          __typename: "ApiCoreAttachment",
        },
      },
      {
        id: 6,
        firstName: "Phebe",
        fullName: "Phebe Jacobson",
        lastName: "Jacobson",
        preferredName: null,
        __typename: "EmployeesEmployeeName",
        avatar: null,
      },
      {
        id: 7,
        firstName: "Arnulfo",
        fullName: "Arnulfo Maggio",
        lastName: "Maggio",
        preferredName: null,
        __typename: "EmployeesEmployeeName",
        avatar: null,
      },
    ],
  },
}

// --------------------------------------
// NEW PROPS INTERFACE FOR OUR STORY
// --------------------------------------
// We only expose two configurable props:
//   - singleSelector (true/false)
//   - onSelect (callback)
export interface EmployeeSelectorProps {
  singleSelector?: boolean
  onSelect?: (selection: FetchEmployee) => void
}

// --------------------------------------
// STORYBOOK METADATA
// --------------------------------------
const meta: Meta<EmployeeSelectorProps> = {
  title: "AvatarNameSelector/EmployeeSelector",
  // No direct 'component' reference is strictly required if you're just
  // rendering an example inside your own "render" function, but you can
  // optionally assign it if you like:
  // component: AvatarNameSelector,

  // Only show these props in the Storybook 'Controls' panel:
  argTypes: {
    singleSelector: {
      control: "boolean",
      defaultValue: false,
      description: "Toggle between single and multiple employee selection.",
    },
    onSelect: fn(),
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**Request GraphQL:**

\`\`\`graphql
query EmployeeSelector($active: Boolean, $companyId: Int!, $ids: [Int!], $legalEntityIds: [Int!], $search: String) {
  employees {
    employeeNames(
      companyId: $companyId
      ids: $ids
      legalEntityIds: $legalEntityIds
      onlyActive: $active
      search: $search
    ) {
      ...AvatarNameForSelect
      __typename
    }
    __typename
  }
}

fragment AvatarNameForSelect on EmployeesEmployeeName {
  id
  avatar {
    id
    url
    __typename
  }
  firstName
  fullName
  lastName
  preferredName
  __typename
}

\`\`\`

**Response:**

\`\`\`ts
interface FetchEmployee {
  id: number
  firstName: string
  fullName: string
  lastName: string
  preferredName: string | null
  __typename: "EmployeesEmployeeName"
  avatar: {
    id: number
    url: string
    __typename: "ApiCoreAttachment"
  } | null
}
\`\`\`
      `,
      },
    },
  },
}

export default meta

// --------------------------------------
// SINGLE STORY EXAMPLE
// --------------------------------------
type Story = StoryObj<EmployeeSelectorProps>

export const Default: Story = {
  render: (props) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [fetchEmployees, setFetchEmployees] = useState<FetchEmployee[]>([])
    const [selectedGroup, setSelectedGroup] = useState<string>("all")
    const [selectedEmployees, setSelectedEmployees] = useState<
      AvatarNamedEntity[]
    >([])

    const onOpenChange = (open: boolean) => {
      if (open) {
        setTimeout(() => {
          setFetchEmployees([...response.employees.employeeNames])
          setLoading(false)
        }, 500)
      } else {
        setLoading(true)
      }
    }

    const onSelect = (el: AvatarNamedEntity[] | AvatarNamedEntity | null) => {
      setSelectedEmployees(Array.isArray(el) ? el : el ? [el] : [])
    }

    return (
      <div className="w-60">
        <AvatarNameSelector
          // Groups (hard-coded as an example)
          groups={[{ label: "None", value: "all", type: "avatar" }]}
          selectedGroup={selectedGroup}
          onGroupChange={(value) => setSelectedGroup(value ?? "all")}
          // Convert our fetched employees to the shape needed by AvatarNameSelector
          entities={fetchEmployees.map((emp) => ({
            id: emp.id,
            name: emp.fullName,
            avatar: emp.avatar?.url || undefined,
          }))}
          // Loading animation
          loading={loading}
          onOpenChange={onOpenChange}
          // Basic placeholders and labels
          triggerPlaceholder="Select employees..."
          triggerSelected="employees selected"
          searchPlaceholder="Search..."
          selectAllLabel="Select all"
          clearLabel="Clear"
          selectedLabel="selected"
          notFoundTitle="No results found"
          notFoundSubtitle="Try searching with a different term."
          // Exposed props from EmployeeSelectorProps
          singleSelector={props.singleSelector}
          onSelect={onSelect}
          selectedAvatarName={selectedEmployees}
        />
      </div>
    )
  },
  args: {
    singleSelector: false,
  },
}
