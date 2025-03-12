import React from "react"

export type InternalProp<T> = T & {
  __internal: true
}

/**
 * Transforms a prop type T into a type where all fields that extend InternalPropType are removed.
 * Only props that do not include `InternalPropType` remain.
 */
type OmitInternalProps<T> = {
  [K in keyof T as K extends `internal${string}` ? never : K]: T[K]
}

/**
 * Higher-order component to wrap a given component and exclude any props marked as `InternalPropType`.
 */
export function removeInternalProps<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  type PublicProps = OmitInternalProps<T>

  // Return a new component that only accepts PublicProps
  return function Wrapper(props: PublicProps) {
    // Cast the props back to T to pass them down to the wrapped component
    return <WrappedComponent {...(props as T)} />
  }
}
