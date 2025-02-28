# Collections Component

The Collections component provides a flexible way to display and interact with
data collections in various visualizations like tables and cards.

## Actions

Actions allow users to perform operations on individual items in a collection.
They appear in a dropdown menu for each item.

### Basic Usage

```tsx
import { Pencil, Delete } from "@/icons/app"
import { useDataSource, DataCollection } from "@/experimental/Collections"

const MyComponent = () => {
  const dataSource = useDataSource({
    dataAdapter: {
      fetchData: () => fetchMyData(),
    },
    actions: (item) => [
      {
        label: "Edit",
        icon: Pencil,
        onClick: () => handleEdit(item),
      },
      {
        label: "Delete",
        icon: Delete,
        critical: true,
        onClick: () => handleDelete(item),
      },
    ],
  })

  return (
    <DataCollection
      source={dataSource}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              { label: "Name", render: (item) => item.name },
              { label: "Email", render: (item) => item.email },
            ],
          },
        },
      ]}
    />
  )
}
```

### Action Properties

Actions support the following properties:

| Property      | Type       | Description                                                          |
| ------------- | ---------- | -------------------------------------------------------------------- |
| `label`       | string     | The text displayed in the dropdown                                   |
| `icon`        | IconType   | Optional icon to display next to the label                           |
| `onClick`     | () => void | Function to execute when the action is clicked                       |
| `description` | string     | Optional description text displayed below the label                  |
| `critical`    | boolean    | When true, displays the action in a critical/destructive style (red) |
| `enabled`     | boolean    | When false, the action will not be shown in the dropdown             |
| `href`        | string     | Optional URL to navigate to when clicked (alternative to onClick)    |

### Conditional Actions

You can conditionally show or hide actions based on the item's properties:

```tsx
actions: (item) => [
  {
    label: "Edit",
    icon: Pencil,
    onClick: () => handleEdit(item),
    enabled: item.permissions.canEdit,
  },
  {
    label: "Delete",
    icon: Delete,
    critical: true,
    onClick: () => handleDelete(item),
    enabled: item.permissions.canDelete,
  },
]
```

### Dynamic Action Labels

You can dynamically change the action label based on the item's state:

```tsx
{
  label: item.isStarred ? "Remove Star" : "Add Star",
  icon: Star,
  onClick: () => toggleStar(item),
}
```

### Separators

You can add separators between actions by including the string "separator" in
the actions array:

```tsx
actions: (item) => [
  {
    label: "Edit",
    icon: Pencil,
    onClick: () => handleEdit(item),
  },
  "separator",
  {
    label: "Delete",
    icon: Delete,
    critical: true,
    onClick: () => handleDelete(item),
  },
]
```

### Conditional Action Groups

You can conditionally include different actions based on the item's state:

```tsx
actions: (item) => [
  // Common actions
  {
    label: "View",
    icon: Ai,
    onClick: () => handleView(item),
  },
  // Conditional actions
  ...(item.status === "active"
    ? [
        {
          label: "Deactivate",
          icon: Delete,
          onClick: () => deactivate(item),
        },
      ]
    : [
        {
          label: "Activate",
          icon: ArrowRight,
          onClick: () => activate(item),
        },
      ]),
]
```

## Examples

For more examples, see:

- `actions.stories.tsx` - Comprehensive examples of different action types
- `index.stories.tsx` - Examples of actions in different collection
  visualizations
