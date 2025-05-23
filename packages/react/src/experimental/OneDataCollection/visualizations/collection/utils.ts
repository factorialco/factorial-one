export const statusToChecked = <
  T extends { checked: boolean; indeterminate: boolean },
>(
  status: T | undefined
): boolean | "indeterminate" => {
  if (!status) {
    return false
  }

  return status.checked
    ? status.indeterminate
      ? "indeterminate"
      : true
    : false
}
