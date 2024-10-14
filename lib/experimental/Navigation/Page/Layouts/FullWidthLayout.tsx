import { BaseLayout, BaseLayoutProps } from "./BaseLayout"

export function FullWidthLayout({ children }: BaseLayoutProps) {
  return <BaseLayout className="flex flex-col gap-4">{children}</BaseLayout>
}
