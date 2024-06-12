import { Button } from "@/components/Actions/Button"
import type { Meta, StoryObj } from "@storybook/react"
import { Activity, ActivityDefinitionType, useActivity } from "."

const meta: Meta = {
  parameters: {
    tags: ["autodocs"],
    layout: "centered",
    a11y: {
      skipCi: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const AsyncActivity: ActivityDefinitionType<
  { body: string },
  { body: string }
> = {
  loader: async ({ body }) =>
    new Promise((resolve) => setTimeout(() => resolve({ body }), 1000)),
  component: (data) => (
    <Activity title={data.body}>Data fetched: {data.body}</Activity>
  ),
}

const ErrorActivity: ActivityDefinitionType<
  { body: string },
  { body: string }
> = {
  loader: async () =>
    new Promise((_resolve, reject) => setTimeout(() => reject(), 1000)),
  component: (data) => <Activity title={data.body}>{data.body}</Activity>,
}

export const Primary: Story = {
  render: () => {
    const { openActivity } = useActivity()

    return (
      <Button
        label="Open Activity"
        onClick={() => openActivity(AsyncActivity, { body: "Hello, World!" })}
      />
    )
  },
}

export const Error: Story = {
  render: () => {
    const { openActivity } = useActivity()

    return (
      <Button
        label="Open Activity"
        onClick={() =>
          openActivity(ErrorActivity, {
            body: "Hello, World!",
          })
        }
      />
    )
  },
}
