import { TOCItem } from "./types"

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
      if (item.id === targetId) {
        // Found the target, add all parents to expanded set
        currentPath.forEach((id) => expandedIds.add(id))
        return true
      }

      const newPath = [...currentPath, item.id]

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
