export function sortDropdownItems(items: DropdownItem[]): DropdownItem[] {
  const sortedItems: DropdownItem[] = []
  let currentGroup: DropdownItemObject[] = []

  for (const item of items) {
    if (item.type === "separator") {
      // Sort the current group and add to sortedItems
      currentGroup.sort((a, b) => a.label.localeCompare(b.label))
      sortedItems.push(...currentGroup)
      sortedItems.push(item) // Add the separator
      currentGroup = [] // Reset for the next group
    } else {
      currentGroup.push(item)
    }
  }

  // Add any remaining items in the last group
  if (currentGroup.length > 0) {
    currentGroup.sort((a, b) => a.label.localeCompare(b.label))
    sortedItems.push(...currentGroup)
  }

  return sortedItems
}
