import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { UpsellingButton } from "../UpsellingButton"
import { UpsellRequestResponseDialog } from "./index"

const meta = {
  title: "UpsellingKit/UpsellRequestResponseDialog",
  component: UpsellRequestResponseDialog,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "400px" },
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof UpsellRequestResponseDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleRequest = async () => {
      setIsLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsOpen(true)
      } finally {
        setIsLoading(false)
      }
    }

    return (
      <div className="flex h-full w-full items-center justify-center">
        <UpsellingButton
          label="Request Information"
          onClick={handleRequest}
          loading={isLoading}
        />
        <UpsellRequestResponseDialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    )
  },
}

export const SuccessExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(true)

    const handleRequest = async () => {
      setIsLoading(true)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsSuccess(true)
        setIsOpen(true)
      } finally {
        setIsLoading(false)
      }
    }

    return (
      <div className="flex h-full w-full items-center justify-center">
        <UpsellingButton
          label="Request Information"
          onClick={handleRequest}
          loading={isLoading}
        />
        <UpsellRequestResponseDialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          success={isSuccess}
        />
      </div>
    )
  },
}

export const ErrorExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleRequest = async () => {
      setIsLoading(true)
      try {
        await new Promise((_, reject) =>
          setTimeout(() => reject(new Error("fail")), 1000)
        )
      } catch (error) {
        setIsSuccess(false)
        setIsOpen(true)
      } finally {
        setIsLoading(false)
      }
    }

    return (
      <div className="flex h-full w-full items-center justify-center">
        <UpsellingButton
          label="Request Information"
          onClick={handleRequest}
          loading={isLoading}
        />
        <UpsellRequestResponseDialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          success={isSuccess}
        />
      </div>
    )
  },
}
