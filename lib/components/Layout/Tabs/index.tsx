import { Header } from "@/components/Blocks/Header"
import { Breadcrumb } from "@/components/Navigation/Breadcrumb"
import {
  Tabs as TabsComponent,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/Navigation/Tabs"
import { User } from "@/icons"
import { cn } from "@/lib/utils"

interface TabsProps {
  tabs: TabType[]
  title: string
  subtitle: string
  src: string
  alt: string
  defaultTab?: string
}

interface TabType {
  name: string
  key: string
  content: React.ReactNode
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  title,
  subtitle,
  src,
  alt,
  defaultTab = tabs[0].key,
}) => (
  <main>
    <Breadcrumb icon={User} route={"Employees"} title={"Alba Horneros"} />
    <Header title={title} subtitle={subtitle} src={src} alt={alt}></Header>
    <TabsComponent defaultValue={defaultTab}>
      <TabsList
        className={cn(
          "border-b-grey-200 h-auto w-full justify-start rounded-none border-b border-l-0 border-r-0 border-t-0 border-solid bg-transparent px-10 py-3"
        )}
      >
        {tabs.map((tab: TabType) => (
          <TabsTrigger
            className={cn(
              "text-grey-500 data-[state=active]:text-grey-700 data-[state=active]:bg-grey-300 flex data-[state=active]:rounded-lg data-[state=active]:underline data-[state=active]:underline-offset-[1.45rem] data-[state=active]:shadow-none"
            )}
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
