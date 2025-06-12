import { InboxList } from "./List";
import { memo, useCallback } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { InboxCard } from "./Card";
import { ActionT, PageHeader } from "../../components/Navigation/PageHeader";
import { EmptyStateT } from "./EmptyState";
import { FilterOption, Filters } from "./Filters";
import { View } from "react-native";

export type { FilterOption };

// Sample data type for the list items
type SampleListItem = {
  id: string;
  title: string;
  description: string;
  firstName: string;
  lastName: string;
  src?: string;
  date: string;
  onPress?: (id: string) => void;
  category: string;
  due?: string;
};

export type InboxSection = {
  id: string;
  title: string;
  data: SampleListItem[];
};

type Props = {
  title: string;
  sections: InboxSection[];
  emptyState: EmptyStateT;
  safeBottom?: number;
  onPress?: (id: string) => void;
  onNotificationPress?: () => void;
  showNotificationBadge?: boolean;
  filters?: FilterOption[];
  onFilterChange?: (index: number) => void;
  category?: string;
};

export const InboxView = memo(
  ({
    title,
    sections = [],
    emptyState,
    safeBottom = 0,
    onPress = () => {},
    onNotificationPress = () => {},
    showNotificationBadge = false,
    filters = [],
    onFilterChange,
    category,
  }: Props) => {
    const renderSampleItem = useCallback(
      (item: SampleListItem) => (
        <View className="px-3">
          <InboxCard
            id={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            firstName={item.firstName}
            lastName={item.lastName}
            src={item.src}
            onPress={onPress}
            due={item.due}
          />
        </View>
      ),
      [onPress],
    );

    const actions: ActionT[] = [
      {
        type: "notifications",
        label: "Notifications",
        onPress: onNotificationPress,
        showBadge: showNotificationBadge,
      },
    ];

    let filteredSections = sections;
    if (category) {
      filteredSections = sections
        .map((section) => ({
          ...section,
          data: section.data.filter((item) => item.category === category),
        }))
        .filter((section) => section.data.length > 0);
    }

    return (
      <SafeAreaProvider>
        <SafeAreaView edges={["top"]} className="flex-1 bg-f1-background">
          <PageHeader title={title} actions={actions} />
          {filters && filters.length > 0 && (
            <Filters filters={filters} onFilterChange={onFilterChange} />
          )}
          <InboxList
            sections={filteredSections}
            safeBottom={safeBottom}
            renderItem={renderSampleItem}
            emptyState={emptyState}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  },
);

InboxView.displayName = "InboxView";
