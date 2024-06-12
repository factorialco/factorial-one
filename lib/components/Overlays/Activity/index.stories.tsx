import { Button } from "@/components/Actions/Button"
import type { Meta, StoryObj } from "@storybook/react"
import { useEffect, useState } from "react"
import { Activity, ActivityDefinition, useActivity } from "."

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

const RegularActivity: ActivityDefinition<{ body: string }> = {
  component: ({ data }) => (
    <Activity title={data.body}>Data fetched: {data.body}</Activity>
  ),
}

const AsyncActivity: ActivityDefinition<{ body: string }> = {
  component: ({ data }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => setLoading(false), 1000)
    }, [setLoading])

    return (
      <Activity title={data.body} loading={loading}>
        asdasd Data fetched: {data.body}
      </Activity>
    )
  },
}

const ErrorActivity: ActivityDefinition<{ body: string }> = {
  component: ({ data }) => {
    return (
      <Activity error={"Error!"} title={data.body}>
        {data.body}
      </Activity>
    )
  },
}

export const Regular: Story = {
  render: () => {
    const { openActivity } = useActivity()

    return (
      <Button
        label="Open Activity"
        onClick={() => openActivity(RegularActivity, { body: "Hello, World!" })}
      />
    )
  },
}

export const Async: Story = {
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
