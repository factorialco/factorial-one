import { InboxList } from "./List";
import { memo, useCallback } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { InboxCard } from "./Card";
import { ActionT, PageHeader } from "../../components/Navigation/PageHeader";
import { EmptyStateT } from "./EmptyState";

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
  }: Props) => {
    const renderSampleItem = useCallback(
      (item: SampleListItem) => (
        <InboxCard
          id={item.id}
          title={item.title}
          description={item.description}
          date={item.date}
          firstName={item.firstName}
          lastName={item.lastName}
          src={item.src}
          onPress={onPress}
        />
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

    return (
      <SafeAreaProvider>
        <SafeAreaView edges={["top"]} className="flex-1 bg-f1-background">
          <PageHeader title={title} actions={actions} />
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
