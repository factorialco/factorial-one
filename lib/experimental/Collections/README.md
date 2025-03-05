# Collections Component Library

The Collections library provides a flexible and powerful way to display, filter,
sort, and manage collections of data. It follows a modular design that separates
data management from visualization concerns.

## Core Components

- `useDataSource`: Hook for creating and managing a data source
- `DataCollection`: Component for rendering a collection with filters and
  visualizations
- `useData`: Hook for fetching and managing data from a data source

## Data Sources

A data source is created using the `useDataSource` hook and provides:

- Filter definitions and state management
- Sorting capabilities
- Data adapter for fetching and manipulating data
- Optional action definitions for item operations

### Sorting API

Collections supports type-safe sorting with the `sortable` helper function:

```tsx
import { sortable } from "@/experimental/Collections/sortings"

// Create a type-safe sortings definition
const sortings = sortable("name", "email", "department")

const dataSource = useDataSource({
  filters,
  // Pass the sortings to useDataSource
  sortings,
  dataAdapter: {
    fetchData: createPromiseDataFetch(),
  },
})
```

This approach provides proper TypeScript inference without needing to use
`as const`:

```tsx
// ❌ Old approach (avoid)
const sortings = ["name", "email"] as const

// ✅ New approach (preferred)
const sortings = sortable("name", "email")
```

## Visualizations

The Collections library supports multiple visualization types:

- Table: For displaying data in a tabular format
- Card: For displaying data in a card-based grid layout
- Custom: For implementing custom visualizations

Each visualization can access and use the sortings defined in the data source:

```tsx
<DataCollection
  source={dataSource}
  visualizations={[
    {
      type: "table",
      options: {
        columns: [
          {
            label: "Name",
            render: (item) => item.name,
            // Type-safe sorting field from your defined sortings
            sorting: "name",
          },
          // ... other columns
        ],
      },
    },
  ]}
/>
```

## Filtering

Collections provides a flexible filtering system that supports:

- Text search
- Multi-select filters
- Range filters
- Custom filter types
- Filter presets

## Data Adapters

Data adapters handle the communication between your data source and the
collection component:

- Promise-based adapters for asynchronous data fetching
- Observable-based adapters for reactive data streams
- Paginated adapters for handling paginated data
- Custom adapters for special data requirements
