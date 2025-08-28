import { memo, ReactElement } from "react";
import { SectionList, SectionListData, View } from "react-native";
import { EmptyState, EmptyStateT } from "./EmptyState";
import { SectionHeader } from "./SectionHeader";

// Define the props interface with the generic type T
interface InboxListProps<T extends { id: string }> {
  sections: SectionListData<T>[];
  safeBottom: number;
  renderItem: (item: T) => ReactElement | null;
  emptyState: EmptyStateT;
}

// Define the base component with the generic type T
const InboxListBase = <T extends { id: string }>({
  sections,
  safeBottom,
  renderItem,
  emptyState,
}: InboxListProps<T>): ReactElement | null => {
  const isEmpty = sections.length === 0;
  if (isEmpty) {
    return (
      <View className="flex-1 p-5">
        <EmptyState
          emoji={emptyState.emoji}
          title={emptyState.title}
          description={emptyState.description}
          onMount={emptyState.onMount}
        />
      </View>
    );
  }

  return (
    <SectionList<T>
      sections={sections}
      contentContainerStyle={{
        paddingBottom: safeBottom,
      }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderItem(item)}
      renderSectionHeader={({
        section: { title },
        section: currentSection,
      }) => {
        return (
          <SectionHeader title={title} count={currentSection.data.length} />
        );
      }}
      stickySectionHeadersEnabled={false}
    />
  );
};

// Memoize the base component and explicitly type the memoized component
export const InboxList = memo(InboxListBase) as <T extends { id: string }>(
  props: InboxListProps<T>,
) => ReactElement | null;

(InboxList as React.FC).displayName = "InboxList";
