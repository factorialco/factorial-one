import type { Meta, StoryObj } from "@storybook/react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "."

const meta = {
  component: Tabs,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <TabsList>
          <TabsTrigger value="one">One</TabsTrigger>
          <TabsTrigger value="two">Two</TabsTrigger>
        </TabsList>
        <TabsContent value="one">Content of section one</TabsContent>
        <TabsContent value="two">Content of section two</TabsContent>
      </>
    ),
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: "one",
  },
}
