import React from "react"
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

import { Button } from "@/foundations/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/foundations/popover"
import { ScrollArea } from "@/foundations/scrollarea"

const Title: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex h-14 items-center gap-2 text-secondary-foreground font-medium px-3">
    <Target size="20" />
    {title}
  </div>
)

const Layout: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState("dashboard")

  return (
    <div className="-m-4 bg-secondary/60 min-h-screen h-screen p-3 grid grid-cols-1 md:grid-cols-[264px_1fr]">
      <div className="block md:hidden pb-2">
        <Button size="icon-sm" variant="ghost">
          <Menu size="16" />
        </Button>
      </div>
      <ScrollArea className="hidden flex-col pr-3 md:flex">
        <Title title="A Cool Company 2" />
        <nav className="flex flex-col pt-3">
          <div className="h-9 flex gap-2 items-center rounded-lg text-sm text-secondary-foreground font-medium p-1.5 transition-colors hover:bg-secondary hover:cursor-pointer">
            <Home size="16" /> Dashboard
          </div>

          <div className="h-9 flex gap-2 items-center rounded-lg text-sm text-secondary-foreground font-medium p-1.5 transition-colors hover:bg-secondary hover:cursor-pointer">
            <Inbox size="16" /> Inbox
          </div>

          <div className="h-9 flex gap-2 items-center rounded-lg text-sm text-secondary-foreground font-medium p-1.5 transition-colors hover:bg-secondary hover:cursor-pointer">
            <Store size="16" /> Marketplace
          </div>

          <div className="pt-4 px-1.5 pb-1 my-2 uppercase text-xs text-secondary-foreground/70 font-medium">
            You
          </div>

          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Trigger className="group w-full h-9 flex items-center rounded-lg text-sm text-secondary-foreground font-medium p-1.5 transition-colors hover:bg-secondary hover:cursor-pointer">
                <div className="flex flex-1 gap-2 items-center">
                  <UserRound size="16" />
                  Me
                </div>
                <div className="flex-none pr-1">
                  <ChevronDown size="12" />
                </div>
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden mb-2 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="flex flex-col border-l-2 ml-3">
                  <div className="flex text-sm text-secondary-foreground font-normal h-8 items-center pl-5 hover:text-foreground hover:cursor-pointer">
                    Profile
                  </div>
                  <div className="flex text-sm text-secondary-foreground font-normal h-8 items-center pl-5 hover:text-foreground hover:cursor-pointer">
                    Personal
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>

          {activeSection == "dashboard" && (
            <>
              <div className="h-9 flex gap-2 items-center rounded-lg text-sm text-secondary-foreground font-medium p-1.5 transition-colors hover:bg-secondary hover:cursor-pointer">
                <Clock size="16" /> Clock in
              </div>

              <div className="h-9 flex gap-2 items-center rounded-lg text-sm text-secondary-foreground font-medium p-1.5 transition-colors hover:bg-secondary hover:cursor-pointer">
                <TreePalm size="16" /> Time off
              </div>

              <div className="bg-secondary h-9 flex gap-2 items-center rounded-lg text-sm text-foreground font-medium p-1.5 transition-colors hover:bg-secondary-intermediate/50 hover:cursor-pointer">
                <Folders size="16" /> My documents
              </div>

              <div className="h-9 flex gap-2 items-center rounded-lg text-sm text-secondary-foreground font-medium p-1.5 transition-colors hover:bg-secondary hover:cursor-pointer">
                <BookCheck size="16" /> Tasks
              </div>

              <div className="pt-4 px-1.5 pb-1 my-2 uppercase text-xs text-secondary-foreground/70 font-medium">
                Your company
              </div>

              <div className="h-9 flex gap-2 items-center rounded-lg text-sm text-secondary-foreground font-medium p-1.5 transition-colors hover:bg-secondary hover:cursor-pointer">
                <UsersRound size="16" /> Employees
              </div>

              <div className="h-9 flex gap-2 items-center rounded-lg text-sm text-secondary-foreground font-medium p-1.5 transition-colors hover:bg-secondary hover:cursor-pointer">
                <Calendar size="16" /> Calendar
              </div>
            </>
          )}
        </nav>
      </ScrollArea>
      <ScrollArea className="bg-background rounded-lg shadow">
        <div className="flex h-14 border-b items-center p-4 text-sm text-secondary-foreground font-medium">
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
          <div className="flex flex-col gap-2 mb-6">
            <Folders size="28" className="text-primary-foreground" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Personal folders</h1>
              <span className="text-secondary-foreground">
                Organize your personal documents into folders.
              </span>
            </div>
          </div>
          <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div className="flex flex-col rounded-lg border p-4 hover:bg-muted/50 hover:cursor-pointer font-medium transition-colors">
                <Folder size="16" className="text-secondary-foreground mb-1" />
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
