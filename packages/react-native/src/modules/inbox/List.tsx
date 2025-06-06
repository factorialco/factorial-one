import { memo, ReactElement } from "react";
import { SectionList, SectionListData, View } from "react-native";
import { EmptyState, EmptyStateT } from "./EmptyState";
import { SectionHeader } from "./SectionHeader";
import { Separator } from "./Separator";

// Define the props interface with the generic type T
interface InboxListProps<T extends { id: string }> {
  sections: SectionListData<T>[];
  safeBottom: number;
  isEmptyState: boolean;
  renderItem: (item: T) => ReactElement | null;
  emptyState: EmptyStateT;
}

// Define the base component with the generic type T
const InboxListBase = <T extends { id: string }>({
  sections,
  safeBottom,
  isEmptyState,
  renderItem,
  emptyState,
}: InboxListProps<T>): ReactElement | null => {
  return (
    <SectionList<T> // Ensure SectionList also uses the generic T
      sections={sections}
      contentContainerStyle={{
        paddingBottom: safeBottom,
        flex: isEmptyState ? undefined : 1,
      }}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderItem(item)} // renderItem here correctly uses T from InboxListBase
      renderSectionHeader={({
        section: { title },
        section: currentSection,
      }) => {
        const isFirstSection = sections.indexOf(currentSection) === 0;
        return (
          <View>
            {!isFirstSection && <Separator />}
            <SectionHeader title={title} />
          </View>
        );
      }}
      ListEmptyComponent={
        <EmptyState
          emoji={emptyState.emoji} //🌿
          title={emptyState.title}
          description={emptyState.description}
          onMount={emptyState.onMount}
        />
      }
      stickySectionHeadersEnabled={false}
    />
  );
};

// Memoize the base component and explicitly type the memoized component
export const InboxList = memo(InboxListBase) as <T extends { id: string }>(
  props: InboxListProps<T>,
) => ReactElement | null;

(InboxList as React.FC).displayName = "InboxList";
