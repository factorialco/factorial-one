import { IconType } from "@/components/Utilities/Icon"
import { Kanban, List, Minus, Table } from "@/icons/app"
import {
  FiltersDefinition,
  ItemActionsDefinition,
  NavigationFiltersDefinition,
  SortingsDefinition,
} from "../../exports"
import { GroupingDefinition, RecordType } from "../../types"
import { CardCollection, CardCollectionProps } from "./Card"
import { ListCollection, ListCollectionProps } from "./List"
import { SimpleListCollection, SimpleListCollectionProps } from "./SimpleList"
import { TableCollection, TableCollectionProps } from "./Table"

export type VisualizacionTypeDefinition<Props> = {
  render: (props: Props) => JSX.Element
  name: string
  icon: IconType
}

type CollectionVisualizations<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  table: VisualizacionTypeDefinition<
    TableCollectionProps<
      Record,
      Filters,
      Sortings,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
  list: VisualizacionTypeDefinition<
    ListCollectionProps<
      Record,
      Filters,
      Sortings,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
  simpleList: VisualizacionTypeDefinition<
    SimpleListCollectionProps<
      Record,
      Filters,
      Sortings,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
  card: VisualizacionTypeDefinition<
    CardCollectionProps<
      Record,
      Filters,
      Sortings,
      ItemActions,
      NavigationFilters,
      Grouping
    >
  >
}

export const collectionVisualizations: CollectionVisualizations<
  RecordType,
  FiltersDefinition,
  SortingsDefinition,
  ItemActionsDefinition<RecordType>,
  NavigationFiltersDefinition,
  GroupingDefinition<RecordType>
> = {
  table: {
    name: "Table",
    icon: Table,
    render: <
      Record extends RecordType,
      Filters extends FiltersDefinition,
      Sortings extends SortingsDefinition,
      ItemActions extends ItemActionsDefinition<Record>,
      NavigationFilters extends NavigationFiltersDefinition,
      Grouping extends GroupingDefinition<Record>,
    >(
      props: TableCollectionProps<
        Record,
        Filters,
        Sortings,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    ) => {
      return (
        <TableCollection<
          Record,
          Filters,
          Sortings,
          ItemActions,
          NavigationFilters,
          Grouping
        >
          {...props}
        />
      )
    },
  },
  list: {
    name: "List",
    icon: List,
    render: <
      Record extends RecordType,
      Filters extends FiltersDefinition,
      Sortings extends SortingsDefinition,
      ItemActions extends ItemActionsDefinition<Record>,
      NavigationFilters extends NavigationFiltersDefinition,
      Grouping extends GroupingDefinition<Record>,
    >(
      props: ListCollectionProps<
        Record,
        Filters,
        Sortings,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    ) => {
      return (
        <ListCollection<
          Record,
          Filters,
          Sortings,
          ItemActions,
          NavigationFilters,
          Grouping
        >
          {...props}
        />
      )
    },
  },
  simpleList: {
    name: "Simple list",
    icon: Minus,
    render: <
      Record extends RecordType,
      Filters extends FiltersDefinition,
      Sortings extends SortingsDefinition,
      ItemActions extends ItemActionsDefinition<Record>,
      NavigationFilters extends NavigationFiltersDefinition,
      Grouping extends GroupingDefinition<Record>,
    >(
      props: SimpleListCollectionProps<
        Record,
        Filters,
        Sortings,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    ) => {
      return (
        <SimpleListCollection<
          Record,
          Filters,
          Sortings,
          ItemActions,
          NavigationFilters,
          Grouping
        >
          {...props}
        />
      )
    },
  },
  card: {
    name: "Card",
    icon: Kanban,
    render: <
      Record extends RecordType,
      Filters extends FiltersDefinition,
      Sortings extends SortingsDefinition,
      ItemActions extends ItemActionsDefinition<Record>,
      NavigationFilters extends NavigationFiltersDefinition,
      Grouping extends GroupingDefinition<Record>,
    >(
      props: CardCollectionProps<
        Record,
        Filters,
        Sortings,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    ) => {
      return (
        <CardCollection<
          Record,
          Filters,
          Sortings,
          ItemActions,
          NavigationFilters,
          Grouping
        >
          {...props}
        />
      )
    },
  },
}
