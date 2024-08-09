import {
  ComponentClass,
  ComponentType,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react"

type AnyReactComponent<P> =
  | ComponentType<P>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ForwardRefExoticComponent<P & RefAttributes<any>>
  | ComponentClass<P>

export function withSkeleton<
  T extends object,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  U extends AnyReactComponent<any>,
>(Component: T, Skeleton: U): T & { Skeleton: U } {
  return Object.assign(Component, { Skeleton })
}
