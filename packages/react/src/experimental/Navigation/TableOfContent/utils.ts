import { TOCItem } from "./types"

/**
 * Finds all parent IDs in the path to the active item
 * @param items - Array of TOC items to search
 * @param activeItemId - ID of the active item
 * @returns Set of IDs that should be expanded
 */
export function findExpandedPath(
  items: TOCItem[],
  activeItemId?: string
): Set<string> {
  const expandedIds = new Set<string>()

  if (!activeItemId) return expandedIds

  function findPath(
    items: TOCItem[],
    targetId: string,
    currentPath: string[] = []
  ): boolean {
    for (const item of items) {
      const newPath = [...currentPath, item.id]

      if (item.id === targetId) {
        // Found the target, add all parents to expanded set
        currentPath.forEach((id) => expandedIds.add(id))
        return true
      }

      if (item.children && findPath(item.children, targetId, newPath)) {
        // Target found in children, add current item to expanded set
        expandedIds.add(item.id)
        return true
      }
    }
    return false
  }

  findPath(items, activeItemId)
  return expandedIds
}
