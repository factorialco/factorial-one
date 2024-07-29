import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { cn } from "../../../lib/utils"
import {
  Tabs as TabsComponent,
  TabsList,
  TabsTrigger,
} from "../../Navigation/Tabs"
import { FlexBox } from "../_FlexBox"

interface TabsProps {
  tabs: TabType[]
  title: string
  subtitle: string
  src: string
  alt: string
}

interface TabType {
  name: string
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  title,
  subtitle,
  src,
  alt,
}) => (
  <>
    <FlexBox className={cn("h-[72px]")}>
      <Avatar>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{alt}</AvatarFallback>
      </Avatar>
      <FlexBox className={cn("flex flex-col pl-5")}>
        <p className={cn("font-semibold")}>{title}</p>
        <p>{subtitle}</p>
      </FlexBox>
    </FlexBox>
    <TabsComponent>
      <TabsList className="TabsList" aria-label="Profile">
        {tabs.map((tab: TabType) => (
          <TabsTrigger className="TabsTrigger" value={tab.name}>
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </TabsComponent>
    <div className={cn("grid grid-cols-3 divide-x")}>
      <div>Column 1</div>
      <div>Column 2</div>
      <div>Column 3</div>
    </div>
  </>
)
