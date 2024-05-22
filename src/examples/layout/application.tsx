import * as Accordion from "@radix-ui/react-accordion"
import {
  BookCheck,
  Calendar,
  ChevronDown,
  Clock,
  EllipsisVertical,
  Folder,
  Folders,
  Home,
  Inbox,
  Menu,
  Store,
  Target,
  TreePalm,
  Upload,
  UserRound,
  UsersRound,
} from "lucide-react"
import React from "react"

import { Button } from "@/shadcn/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/shadcn/popover"
import { ScrollArea } from "@/shadcn/scrollarea"

const Title: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex h-14 items-center gap-2 px-3 font-medium text-secondary-foreground">
    <Target size="20" />
    {title}
  </div>
)

const Layout: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState("dashboard")

  return (
    <div className="-m-4 grid h-screen min-h-screen grid-cols-1 bg-secondary/60 p-3 md:grid-cols-[264px_1fr]">
      <div className="block pb-2 md:hidden">
        <Button size="icon-sm" variant="ghost">
          <Menu size="16" />
        </Button>
      </div>
      <ScrollArea className="hidden flex-col pr-3 md:flex">
        <Title title="A Cool Company 2" />
        <nav className="flex flex-col pt-3">
          <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
            <Home size="16" /> Dashboard
          </div>

          <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
            <Inbox size="16" /> Inbox
          </div>

          <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
            <Store size="16" /> Marketplace
          </div>

          <div className="my-2 px-1.5 pb-1 pt-4 text-xs font-medium uppercase text-secondary-foreground/70">
            You
          </div>

          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Trigger className="group flex h-9 w-full items-center rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
                <div className="flex flex-1 items-center gap-2">
                  <UserRound size="16" />
                  Me
                </div>
                <div className="flex-none pr-1">
                  <ChevronDown size="12" />
                </div>
              </Accordion.Trigger>
              <Accordion.Content className="mb-2 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="ml-3 flex flex-col border-l-2">
                  <div className="flex h-8 items-center pl-5 text-sm font-normal text-secondary-foreground hover:cursor-pointer hover:text-foreground">
                    Profile
                  </div>
                  <div className="flex h-8 items-center pl-5 text-sm font-normal text-secondary-foreground hover:cursor-pointer hover:text-foreground">
                    Personal
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          {activeSection == "dashboard" && (
            <>
              <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
                <Clock size="16" /> Clock in
              </div>

              <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
                <TreePalm size="16" /> Time off
              </div>

              <div className="flex h-9 items-center gap-2 rounded-lg bg-secondary p-1.5 text-sm font-medium text-foreground transition-colors hover:cursor-pointer hover:bg-secondary-intermediate/50">
                <Folders size="16" /> My documents
              </div>

              <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
                <BookCheck size="16" /> Tasks
              </div>

              <div className="my-2 px-1.5 pb-1 pt-4 text-xs font-medium uppercase text-secondary-foreground/70">
                Your company
              </div>

              <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
                <UsersRound size="16" /> Employees
              </div>

              <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
                <Calendar size="16" /> Calendar
              </div>
            </>
          )}
        </nav>
      </ScrollArea>
      <ScrollArea className="rounded-lg bg-background shadow">
        <div className="flex h-14 items-center border-b p-4 text-sm font-medium text-secondary-foreground">
          <div className="flex-1">My documents</div>
          <div className="flex flex-none gap-1.5">
            <Button
              size="icon-sm"
              className="flex gap-1.5 md:w-auto md:px-3"
              onClick={() => setActiveSection("whatever")}
            >
              <Upload size="16" />
              <span className="hidden md:block">Upload files</span>
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary" size="icon-sm">
                  <EllipsisVertical size="20" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-60">Menu!</PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="p-6 md:p-12">
          <div className="mb-6 flex flex-col gap-2">
            <Folders size="28" className="text-primary-foreground" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Personal folders</h1>
              <span className="text-secondary-foreground">
                Organize your personal documents into folders.
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div className="flex flex-col rounded-lg border p-4 font-medium transition-colors hover:cursor-pointer hover:bg-muted/50">
                <Folder size="16" className="mb-1 text-secondary-foreground" />
                Folder {++i}
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

export default Layout
