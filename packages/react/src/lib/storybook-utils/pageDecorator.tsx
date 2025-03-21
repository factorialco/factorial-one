import { Page } from "../../experimental/Navigation/Page"
import * as PageStories from "../../experimental/Navigation/Page/index.stories"

export const PageDecorator = (Story: React.ComponentType) => (
  <div className="flex h-[600px] w-full flex-row">
    <Page {...PageStories.Default.args}>
      <Story />
    </Page>
  </div>
)
