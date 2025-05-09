import { BreadcrumbItemType, BreadcrumbState } from "./types"

const COLLAPSED_ITEM_WIDTH = 50
const AVERAGE_ITEM_WIDTH = 120
const RIGHT_PADDING = 8

/**
 * Calculates how many breadcrumb items can be displayed based on container width.
 * All widths are in pixels.
 *
 * @param containerWidth - Width of the container
 * @param breadcrumbWidths - Widths of individual breadcrumb items
 * @param appendWidth - Width of an element added via the "append" slot
 * @returns Number of items that can be displayed (minimum 2)
 */
function calculateVisibleCount(
  containerWidth: number,
  breadcrumbWidths: number[],
  appendWidth: number
): number {
  const totalItems = breadcrumbWidths.length
  if (totalItems <= 2) return totalItems

  const firstItemWidth = breadcrumbWidths[0]
  let availableWidth =
    containerWidth - firstItemWidth - RIGHT_PADDING - appendWidth
  let lastItemAddedIndex = 0
  let count = 1 // the first item is always shown

  // Calculate how many items can fit from the end
  for (let i = totalItems - 1; i > 0; i--) {
    const itemWidth = breadcrumbWidths[i]
    if (availableWidth < itemWidth) {
      break
    }
    availableWidth -= itemWidth
    lastItemAddedIndex = i
    count++
  }

  // Adjust for the collapsed item if we can't show all items
  if (count < totalItems) {
    availableWidth -= COLLAPSED_ITEM_WIDTH
    while (availableWidth < 0 && count > 1) {
      availableWidth += breadcrumbWidths[lastItemAddedIndex]
      lastItemAddedIndex++
      count--
    }
  }

  // Ensure we show at least 2 items when possible
  return Math.max(2, count)
}

/**
 * Calculate minimal width of the breadcrumb items, when fully collapsed.
 * All widths are in pixels
 *
 * @param breadcrumbWidths widths of all individual breadcrumb items
 * @param appendedWidth - width of an extra element appended via the "append" slot
 * @returns minimal width or undefined if it cannot be determined
 */
function calcMinWidth(
  breadcrumbWidths: number[] = [],
  appendedWidth: number
): number | undefined {
  switch (breadcrumbWidths.length) {
    case 0:
      return undefined
    case 1:
      return breadcrumbWidths[0] + appendedWidth + RIGHT_PADDING
    default:
      return (
        breadcrumbWidths[0] +
        COLLAPSED_ITEM_WIDTH +
        breadcrumbWidths[breadcrumbWidths.length - 1] +
        appendedWidth +
        RIGHT_PADDING
      )
  }
}

function getElementWidths(
  breadcrumbElements: HTMLElement[] = [],
  hasAppend: boolean
): {
  breadcrumbWidths: number[]
  appendWidth: number
} {
  const widths = breadcrumbElements.map((el) => el.clientWidth)
  if (hasAppend) {
    return {
      breadcrumbWidths: widths.slice(0, widths.length - 1),
      appendWidth: widths[widths.length - 1],
    }
  }

  return { breadcrumbWidths: widths, appendWidth: 0 }
}

function estimateMinWidth(
  breadcrumbCount: number,
  hasCollapsedItem: boolean
): number {
  return (
    AVERAGE_ITEM_WIDTH * breadcrumbCount +
    (hasCollapsedItem ? COLLAPSED_ITEM_WIDTH : 0) +
    RIGHT_PADDING
  )
}

/**
 * Calculate the breadcrumb state
 * based on container width and breadcrumb items
 */
export function calculateBreadcrumbState(
  containerWidth: number | null,
  breadcrumbs: BreadcrumbItemType[],
  breadcrumbElements: HTMLElement[] = [],
  hasAppend: boolean = false
): BreadcrumbState {
  if (!containerWidth) {
    const minimalBreadcrumbCount = Math.min(breadcrumbs.length, 2)
    return {
      visibleCount: minimalBreadcrumbCount,
      headItem: breadcrumbs[0] ?? null,
      tailItems: breadcrumbs.slice(breadcrumbs.length - 1),
      collapsedItems: breadcrumbs.slice(1, breadcrumbs.length - 1),
      isOnly: breadcrumbs.length === 1,
      minWidth: estimateMinWidth(
        minimalBreadcrumbCount,
        breadcrumbs.length > 2
      ),
    }
  }

  const isSimpleLayout = breadcrumbs.length <= 2
  const { breadcrumbWidths, appendWidth } = getElementWidths(
    breadcrumbElements,
    hasAppend
  )

  if (isSimpleLayout) {
    return {
      visibleCount: breadcrumbs.length,
      headItem: breadcrumbs[0] ?? null,
      tailItems: breadcrumbs.slice(1),
      collapsedItems: [],
      isOnly: breadcrumbs.length === 1,
      minWidth: calcMinWidth(breadcrumbWidths, appendWidth),
    }
  }

  const visibleCount = calculateVisibleCount(
    containerWidth,
    breadcrumbWidths,
    appendWidth
  )

  return {
    visibleCount,
    headItem: breadcrumbs[0] || null,
    tailItems: breadcrumbs.slice(
      Math.max(1, breadcrumbs.length - (visibleCount - 1))
    ),
    collapsedItems: breadcrumbs.slice(
      1,
      breadcrumbs.length - (visibleCount - 1)
    ),
    isOnly: breadcrumbs.length === 1,
    minWidth: calcMinWidth(breadcrumbWidths, appendWidth),
  }
}
