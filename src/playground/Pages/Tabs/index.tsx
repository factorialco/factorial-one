import { Header } from "@/components/Blocks/Header"
import { Breadcrumb } from "@/components/Navigation/Breadcrumb"
import {
  Tabs as TabsComponent,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/Navigation/Tabs"
import React, { ComponentProps, forwardRef } from "react"

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
    },
    ref
  ) => (
    <main ref={ref} className="h-full bg-white">
      <Breadcrumb icon={icon} routes={routes} title={breadcrumbTitle} />
      <Header title={title} subtitle={subtitle} src={src} alt={alt}></Header>
      <TabsComponent defaultValue={defaultTab}>
        <TabsList className="h-auto w-full justify-start rounded-none border-b border-l-0 border-r-0 border-t-0 border-solid border-b-muted bg-transparent px-10 py-3">
          {tabs.map((tab: TabType) => (
            <TabsTrigger
              className="flex text-intermediate data-[state=active]:rounded-lg data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:underline data-[state=active]:underline-offset-[1.45rem] data-[state=active]:shadow-none"
              value={tab.key}
              key={tab.key}
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div>
          {tabs.map((tab: TabType) => (
            <TabsContent value={tab.key} key={tab.key}>
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </TabsComponent>
    </main>
  )
)
