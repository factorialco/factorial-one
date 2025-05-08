import { categorizeItemsByDate } from "@/lib/date"
import { useI18n } from "@/lib/providers/i18n"
import { withSkeleton } from "@/lib/skeleton"
import React from "react"
import { Section, SectionProps } from "./Section"

export type ActivityItemListProps = Pick<SectionProps, "items" | "onClickItem">

const Separator = () => (
  <div className="h-px w-full bg-f1-background-secondary" />
)

export const BaseActivityItemList = ({
  items,
  onClickItem,
}: ActivityItemListProps) => {
  const translations = useI18n()

  const categorizedItems = categorizeItemsByDate(items, "createdAt")

  return (
    <div className="flex flex-col gap-2">
      {Object.entries(categorizedItems)
        .filter(([_, items]) => !!items.length)
        .map(([group, items]) => (
          <React.Fragment key={group}>
            <Section
              title={
                translations.date.groups[
                  group as keyof typeof translations.date.groups
                ]
              }
              items={items}
              onClickItem={onClickItem}
            />
            <Separator />
          </React.Fragment>
        ))}
    </div>
  )
}

export const ActivityItemListSkeleton = () => {
  const translations = useI18n()

  return (
    <div>
      <Section.Skeleton title={translations.date.groups.today} numItems={1} />
      <Separator />
      <Section.Skeleton
        title={translations.date.groups.yesterday}
        numItems={3}
      />
      <Separator />
      <Section.Skeleton
        title={translations.date.groups.lastMonth}
        numItems={5}
      />
    </div>
  )
}

export const ActivityItemList = withSkeleton(
  BaseActivityItemList,
  ActivityItemListSkeleton
)
