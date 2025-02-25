import { Page } from "@/core/components/experimental/navigation/Page"
import * as PageStories from "@/core/components/experimental/navigation/Page/index.stories"

export const PageDecorator = (Story: React.ComponentType) => (
  <div className="flex h-[600px] w-full flex-row">
    <Page {...PageStories.Default.args}>
      <Story />
    </Page>
  </div>
)
