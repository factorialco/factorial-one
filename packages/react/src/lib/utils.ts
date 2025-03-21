import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function focusRing(extraClasses?: string) {
  return cn(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
    extraClasses
  )
}

/**
 * A generic type guard that checks if a given string is in the provided array
 * of valid values (forming a string literal union).
 *
 * @param value - The string value to test
 * @param validValues - An array of valid string literals (forming a union type)
 * @returns true if the value is one of validValues, otherwise false
 */
export function isStringInUnion<T extends string>(
  value: string,
  validValues: readonly T[]
): value is T {
  return validValues.includes(value as T)
}

export function isStringInUnionWithDefault<T extends string>(
  value: string,
  validValues: readonly T[],
  defaultValue: T
) {
  if (isStringInUnion(value, validValues)) {
    return value
  }
  return defaultValue
}
