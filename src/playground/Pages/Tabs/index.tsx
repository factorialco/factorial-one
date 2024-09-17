import { Breadcrumb } from "@/components/Navigation/Breadcrumb"
import {
  Tabs as TabsComponent,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/Navigation/Tabs"
import React, { ComponentProps, forwardRef } from "react"
import { Details } from "../../../../lib/components/Widgets/Details"
import { Header } from "../Header"

interface TabsProps {
  tabs: TabType[]
  title: ComponentProps<typeof Header>["title"]
  subtitle: ComponentProps<typeof Header>["subtitle"]
  src: ComponentProps<typeof Header>["src"]
  alt: ComponentProps<typeof Header>["alt"]
  defaultTab?: ComponentProps<typeof TabsComponent>["defaultValue"]
  breadcrumbTitle: ComponentProps<typeof Breadcrumb>["title"]
  routes: ComponentProps<typeof Breadcrumb>["routes"]
  icon: ComponentProps<typeof Breadcrumb>["icon"]
  details?: ComponentProps<typeof Details>["details"]
  activatedDays?: ComponentProps<typeof Details>["activatedDays"]
  manager?: ComponentProps<typeof Details>["manager"]
  teams?: ComponentProps<typeof Details>["teams"]
}

interface TabType {
  name: string
  key: string
  content: React.ReactNode
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      tabs,
      title,
      subtitle,
      src,
      alt,
      breadcrumbTitle,
      routes,
      icon,
      defaultTab = tabs[0].key,
      details = [],
      activatedDays = [],
      manager,
      teams,
    },
    ref
  ) => (
    <main ref={ref} className="h-full bg-f1-background">
      <Breadcrumb icon={icon} routes={routes} title={breadcrumbTitle} />
      <Header title={title} subtitle={subtitle} src={src} alt={alt}></Header>
      <TabsComponent defaultValue={defaultTab}>
        <TabsList className="h-auto w-full justify-start rounded-none border-b border-l-0 border-r-0 border-t-0 border-solid border-b-f1-border bg-transparent px-10 py-3">
          {tabs.map((tab: TabType) => (
            <TabsTrigger
              className="flex text-f1-foreground data-[state=active]:rounded-lg data-[state=active]:bg-f1-background-secondary data-[state=active]:text-f1-foreground data-[state=active]:underline data-[state=active]:underline-offset-[1.4rem] data-[state=active]:shadow-none"
              value={tab.key}
              key={tab.key}
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="grid grid-cols-1 divide-x divide-y-0 divide-dashed divide-f1-border sm:grid-cols-[2fr_1fr]">
          <div className="order-2 pl-10 pr-8 pt-6 sm:order-1">
            {tabs.map((tab: TabType) => (
              <TabsContent value={tab.key} key={tab.key}>
                {tab.content}
              </TabsContent>
            ))}
          </div>
          <div className="order-1 pl-8 pr-10 pt-6 sm:order-2">
            <Details
              details={details}
              activatedDays={activatedDays}
              manager={manager}
              teams={teams}
            />
          </div>
        </div>
      </TabsComponent>
    </main>
  )
)
