import { ScrollArea } from "@/experimental"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import React from "react"
import { Spinner } from "../Information/Spinner"
import { RecordType } from "../OneDataCollection/types"
import { useInfiniteScrollPagination } from "../OneDataCollection/useInfiniteScrollPagination"
import { LoadingSkeleton } from "./components/LoadingSkeleton"
import { OneLaneHeader } from "./components/OneLaneHeader"
import { OneLaneProps } from "./types"

const DEFAULT_MAX_LANE_HEIGHT = 700
const HEADER_HEIGHT = 40

export function OneLane<Record extends RecordType>({
  title,
  items,
  renderCard,
  getKey,
  emptyState,
  fetchMore,
  maxHeight = DEFAULT_MAX_LANE_HEIGHT,
  loading = false,
  hasMore = false,
  loadingMore = false,
}: OneLaneProps<Record>) {
  const scrollAreaHeight = maxHeight - HEADER_HEIGHT - 4 // 4px for ScrollArea mb-1

  // Create pagination info for infinite scroll
  const paginationInfo = {
    type: "infinite-scroll" as const,
    cursor: null,
    hasMore,
    total: items.length + (hasMore ? 1 : 0),
    perPage: 2,
  }

  // Use the infinite scroll hook
  const { loadingIndicatorRef } = useInfiniteScrollPagination(
    paginationInfo,
    loading,
    loadingMore,
    fetchMore ?? (() => {})
  )

  return (
    <div
      className={`shadow-sm flex min-w-80 max-w-72 flex-col rounded-xl border border-f1-border-secondary px-1`}
      style={{
        maxHeight: `${maxHeight}px`,
        backgroundColor: "hsla(210, 91%, 22%, 0.02)",
      }}
    >
      <OneLaneHeader
        label={title || "Lane"}
        variant="neutral"
        count={items.length}
      />

      <div className="flex min-h-0 flex-1 flex-col">
        {loading ? (
          <ScrollArea
            className={cn(
              "relative mb-1 flex-1 rounded-lg",
              loading && "select-none opacity-50 transition-opacity"
            )}
            style={{ maxHeight: `${scrollAreaHeight}px` }}
          >
            <LoadingSkeleton />
            <AnimatePresence>
              <motion.div
                className="absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Spinner />
              </motion.div>
            </AnimatePresence>
          </ScrollArea>
        ) : items.length === 0 ? (
          emptyState
        ) : (
          <div className="relative">
            <ScrollArea
              className="mb-1 flex-1 rounded-lg"
              style={{ maxHeight: `${scrollAreaHeight}px` }}
            >
              <div
                className={cn(
                  "space-y-1",
                  loadingMore && "select-none opacity-50 transition-opacity"
                )}
                aria-live={loadingMore ? "polite" : undefined}
                aria-busy={loadingMore ? "true" : undefined}
              >
                {items.map((record, index) => {
                  const key = getKey(record, index)
                  return (
                    <React.Fragment key={key}>
                      {renderCard(record, index)}
                    </React.Fragment>
                  )
                })}
                {(loadingMore || hasMore) && (
                  <LoadingSkeleton ref={loadingIndicatorRef} />
                )}
              </div>
            </ScrollArea>
            {loadingMore && (
              <AnimatePresence>
                <motion.div
                  className="absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Spinner />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
