// Replace your-framework with the name of your framework
import { Button } from "@/core/components/actions/Button"
import { usePrivacyMode } from "@/lib/privacyMode.tsx"
import type { Meta, StoryObj } from "@storybook/react"
import { PrivateBox } from "./index.tsx"

const meta: Meta = {
  title: "PrivateBox",
  tags: ["autodocs", "experimental"],
}

type Story = StoryObj

export const PrivateBoxExample: Story = {
  render: () => {
    const { toggle, enabled } = usePrivacyMode()

    return (
      <div className="flex flex-col gap-4">
        <p>
          My salary is{" "}
          <PrivateBox>
            <span>60,000 €/year</span>
          </PrivateBox>
        </p>
        <div className="self-start">
          <Button
            label={`${enabled ? "Disable " : "Enable "} Privacy Mode`}
            onClick={toggle}
            variant="neutral"
          />
        </div>
      </div>
    )
  },
}

export default meta
