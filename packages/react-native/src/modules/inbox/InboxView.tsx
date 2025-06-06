import { View } from "react-native";
import { InboxList } from "./List";
import { memo } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { InboxCard } from "./Card";
import { PageHeader } from "../../components/Navigation/PageHeader";
import { EmptyStateT } from "./EmptyState";

// Sample data type for the list items
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

type Props = {
  title: string;
  sections: InboxSection[];
  emptyState: EmptyStateT;
  safeBottom?: number;
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

export const InboxView = memo(
  ({ title, sections, emptyState, safeBottom = 0 }: Props) => {
    return (
      <SafeAreaProvider>
        <SafeAreaView edges={["top"]} className="flex-1 bg-f1-background">
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
