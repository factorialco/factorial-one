import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { TrendingUp } from "lucide-react"
import {
  ComponentProps,
  FC,
  forwardRef,
  ReactNode,
  RefAttributes,
  RefObject,
} from "react"

export interface InsightsContainerProps {
  header: {
    title: string
    description: string
  }
  footer?: {
    trend: string
    time: string
  }
}

export const InsightsContainer = forwardRef<
  HTMLDivElement,
  InsightsContainerProps & { children: ReactNode }
>(({ header, footer, children }, ref) => (
  <Card ref={ref}>
    <CardHeader>
      <CardTitle>{header.title}</CardTitle>
      <CardDescription>{header.description}</CardDescription>
    </CardHeader>
    <CardContent>{children}</CardContent>
    {footer && (
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {footer.trend} <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {footer.time}
            </div>
          </div>
        </div>
      </CardFooter>
    )}
  </Card>
))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContainerWrapType<
  Component extends FC<RefAttributes<HTMLElement>>,
  ChartKey extends string,
> = React.FC<
  RefAttributes<HTMLElement> &
    Omit<InsightsContainerProps, "children"> & {
      [key in ChartKey]: ComponentProps<Component>
    }
>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function wrap<Component extends FC<any>, NestedKey extends string>(
  Component: Component,
  nestedKey: NestedKey
): ContainerWrapType<Component, NestedKey> {
  return ({ [nestedKey]: chart, ref, ...containerProps }) => (
    <InsightsContainer
      ref={ref as RefObject<HTMLDivElement>}
      {...(containerProps as InsightsContainerProps)}
    >
      <Component {...chart} />
    </InsightsContainer>
  )
}
