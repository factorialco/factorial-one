import ContainerStory from "../Widget/index.stories"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { children, ...containerStoryArgs } = ContainerStory.args

export const WidgetDecorator = (Story: React.ComponentType) => (
  <div className="w-96">
    <Story />
  </div>
)

export { containerStoryArgs }
