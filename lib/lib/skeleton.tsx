export function withSkeleton<T extends object, U>(
  Component: T,
  Skeleton: U
): T & { Skeleton: U } {
  return Object.assign(Component, { Skeleton })
}
