import * as Accordion from "@radix-ui/react-accordion"
import {
  BookCheck,
  Calendar,
  ChevronDown,
  Clock,
  EllipsisVertical,
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
import { useXRay } from "../lib/lib/xray"

import { Button, Split, Stack, StackRow } from "@/main"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import { ScrollArea } from "@/ui/scrollarea"

const Title: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex h-14 items-center gap-2 px-3 font-medium text-secondary-foreground">
    <Target size="20" />
    {title}
  </div>
)

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    enabled: xRayEnabled,
    disable: disableXRay,
    enable: enableXRay,
  } = useXRay()

  return (
    <div className="grid h-full grow grid-cols-1 bg-secondary/60 p-4 md:grid-cols-[264px_1fr]">
      <Stack gap="4" overflow="hidden">
        <StackRow className="md:hidden">
          <Button
            size="sm"
            hideLabel
            label="Menu"
            icon={Menu}
            variant="ghost"
          />
        </StackRow>
        <ScrollArea className="hidden h-full flex-col overflow-hidden pr-3 md:flex">
          <Stack gap="4">
            <Title title="A Cool Company 2" />
            <Stack gap="4">
              <Stack>
                <div
                  onClick={() => (xRayEnabled ? disableXRay() : enableXRay())}
                  className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary"
                >
                  <Home size="16" /> Dashboard
                </div>

                <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
                  <Inbox size="16" /> Inbox
                </div>

                <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
                  <Store size="16" /> Marketplace
                </div>
              </Stack>

              <Stack>
                <div className="my-2 px-1.5 pb-1 text-xs font-medium uppercase text-secondary-foreground/70">
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
              </Stack>
              <Stack>
                <div className="my-2 px-1.5 pb-1 text-xs font-medium uppercase text-secondary-foreground/70">
                  Your company
                </div>

                <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
                  <UsersRound size="16" /> Employees
                </div>

                <div className="flex h-9 items-center gap-2 rounded-lg p-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:cursor-pointer hover:bg-secondary">
                  <Calendar size="16" /> Calendar
                </div>
              </Stack>
            </Stack>
          </Stack>
        </ScrollArea>
      </Stack>
      <Stack overflow="hidden" className="rounded-lg bg-background shadow">
        <Stack gap={null} className="h-full overflow-hidden">
          <Split paddingX="p-4" paddingY="p-4" verticalAlign="center" shrink>
            <Stack grow paddingX="p-2">
              <div className="text-sm font-medium text-secondary-foreground">
                My documents
              </div>
            </Stack>
            <Split gap="2">
              <Button label="Upload files" icon={Upload} size="sm" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="secondary"
                    size="sm"
                    hideLabel
                    label="Submenu"
                    icon={EllipsisVertical}
                  />
                </PopoverTrigger>
                <PopoverContent className="w-60">Menu!</PopoverContent>
              </Popover>
            </Split>
          </Split>
          <Stack grow className="overflow-hidden">
            {children}
          </Stack>
        </Stack>
      </Stack>
    </div>
  )
}
