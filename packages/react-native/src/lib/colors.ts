// Import core tokens to dynamically generate icon colors
import { f1Colors } from "@factorialco/factorial-one-core/src/tokens/colors";

// Type utilities to create flattened icon color types
type ExtractKeys<T> = {
  [K in keyof T]: K extends string ? K : never;
}[keyof T];

type NestedPaths<T, Prefix extends string = ""> = {
  [K in ExtractKeys<T>]: K extends "DEFAULT"
    ? `${Prefix}`
    : T[K] extends Record<string, unknown>
      ? `${Prefix}${K}` | `${NestedPaths<T[K], `${Prefix}${K}-`>}`
      : `${Prefix}${K}`;
}[ExtractKeys<T>];

// Generate the icon color name type
export type IconColorName = `text-f1-icon${
  | ""
  | `-${NestedPaths<typeof f1Colors.icon>}`}`;
