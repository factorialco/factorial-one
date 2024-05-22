import type { Meta, StoryObj } from "@storybook/react"
import { Folder } from "lucide-react"

import { Button } from "@/shadcn/button"
import { Input } from "@/shadcn/input"
import { Label } from "@/shadcn/label"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogIcon,
  DialogTitle,
  DialogTrigger,
} from "."

const meta: Meta = {
  component: Dialog,
  parameters: {
    layout: "centered",
    a11y: {
      skipCi: true,
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render(props) {
    return (
      <Dialog {...props}>
        <DialogTrigger asChild>
          <Button variant="secondary">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogIcon>
            <Folder size="24" />
          </DialogIcon>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                defaultValue="Dani Moreno"
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                defaultValue="@dani-moreno"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}

export const WithCloseButton: Story = {
  render(props) {
    return (
      <Dialog {...props}>
        <DialogTrigger asChild>
          <Button variant="secondary">Share</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogIcon>
            <Folder size="24" />
          </DialogIcon>
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="link">Link</Label>
              <Input
                id="link"
                defaultValue="https://www.factorialhr.com/"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}
