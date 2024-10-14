import { BaseLayout, BaseLayoutProps } from "./BaseLayout"

export function StandardLayout({ children }: BaseLayoutProps) {
  return (
    <BaseLayout className="flex flex-col gap-4 px-6 py-5">
      {children}
    </BaseLayout>
  )
}
