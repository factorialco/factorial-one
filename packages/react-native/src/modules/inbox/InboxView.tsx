import { View } from "react-native";
import { InboxList } from "./List";
import { memo } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { InboxCard } from "./Card";
import { PageHeader } from "../../components/Navigation/PageHeader";

// Sample data type for the list items
// It seems 'data' inside an item might not be what SectionList expects for items.
// SectionList expects an array of items within each section's 'data' array.
// If 'SampleListItem' represents an item, it typically wouldn't have its own 'data' array of strings.
// Let's assume for now 'title' is the main displayable string for an item.
type SampleListItem = {
  id: string;
  title: string;
  description: string;
  date: string;
};

export type InboxSection = {
  id: string;
  title: string;
  data: SampleListItem[];
};

const emptyStateData = {
  title: "All caught up!",
  description: "You have no new notifications.",
};

type Props = {
  title: string;
  sections: InboxSection[];
};

const renderSampleItem = (item: SampleListItem) => (
  <View className="px-4 py-2">
    <InboxCard
      title={item.title}
      description={item.description}
      date={item.date}
    />
  </View>
);

export const InboxView = memo(({ title, sections }: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top"]} className="bg-background flex-1">
        <PageHeader
          title={title}
          actions={[
            {
              type: "notifications",
              label: "Notifications",
              onPress: () => {},
              showBadge: true,
            },
          ]}
        />
        <InboxList
          sections={sections}
          safeBottom={0} // You might want to adjust this based on your layout
          isEmptyState={sections.length === 0}
          renderItem={renderSampleItem}
          emptyState={emptyStateData}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
});

InboxView.displayName = "InboxView";
