import React from 'react';
import { Button } from "@/foundations/button"
import { ScrollArea } from "@/foundations/scrollarea"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/foundations/popover"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/foundations/resizable"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/foundations/tooltip"

import { cn } from "@/lib/utils";

import { EllipsisVertical, Target, Home, Inbox, Store, UserRound, Clock, TreePalm, BookCheck, UsersRound, Calendar, ChevronDown, Folders, Folder, Upload, Menu } from 'lucide-react';


const navGeneral = [
    {
        title: "Dashboard",
        icon: Home,
    },
    {
        title: "Inbox",
        icon: Inbox,
    },
    {
        title: "Marketplace",
        icon: Store,
    },
];

const navYou = [
    {
        title: "Me",
        icon: UserRound,
    },
    {
        title: "Clock in",
        icon: Clock,
    },
    {
        title: "Time off",
        icon: TreePalm,
    },
    {
        title: "My documents",
        icon: Folders,
    },
    {
        title: "Tasks",
        icon: BookCheck,
    },
];

const navCompany = [
    {
        title: "Employees",
        icon: UsersRound,
    },
    {
        title: "Calendar",
        icon: Calendar,
    },
];

interface LayoutProps {
    defaultCollapsed: boolean,
}

const Layout: React.FC<LayoutProps> = ({ defaultCollapsed=false }) => {  
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

    const NavTitle: React.FC<{ title: string }> = ({ title }) => (
        !isCollapsed && <div className="pt-4 px-1.5 pb-1 my-2 uppercase text-xs text-secondary-foreground/70 font-medium truncate ...">
            {title}
        </div>
    );

    const NavItem: React.FC<{title: string, icon: React.ElementType, index: number}> = ({title,icon: Icon,index}) => {
        return (
            <Tooltip key={index} delayDuration={200}>
                <TooltipTrigger asChild>
                    <div key={index} className={cn("flex items-center rounded-lg text-sm text-secondary-foreground font-medium transition-colors hover:bg-secondary hover:cursor-pointer", isCollapsed ? "w-10 h-10 justify-center" : "h-9 p-1.5 gap-2")}>
                        <Icon size="16" className="flex-shrink-0" />
                        <span className="truncate ...">{!isCollapsed && title}</span>
                    </div>
                </TooltipTrigger>
                {isCollapsed && 
                    <TooltipContent side="right" className="bg-secondary-foreground text-background rounded-lg">
                        {title}
                    </TooltipContent>
                }
            </Tooltip>
        )
    }
    
    return (
    <div className="-m-4 bg-secondary/60 min-h-screen h-screen p-3">
        <div className="block md:hidden pb-2">
            <Button
                size="icon-sm"
                variant="ghost">
                    <Menu size="16" />
            </Button>
        </div>

        <TooltipProvider>
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel
                defaultSize={15}
                collapsedSize={1}
                minSize={8}
                maxSize={20}
                collapsible
                onCollapse={() => setIsCollapsed(true)}
                onExpand={() => setIsCollapsed(false)}
                className={cn(
                    isCollapsed ?
                    "min-w-10 mr-3 transition-all duration-300 ease-in-out" :
                    "max-w-[264px]"
                )}
            >
                <ScrollArea className={cn("h-full hidden flex-col md:flex",!isCollapsed && "pr-3")}>
                    <div className={cn("flex h-14 items-center gap-2 text-secondary-foreground font-medium",(isCollapsed ? "w-10 justify-center" : "px-3"))}>
                        <Target size="20" className="flex-shrink-0" />
                        {!isCollapsed && <span className="truncate ...">Cool Company</span> }
                    </div>
                    <nav className="flex flex-col pt-3">
                        {navGeneral.map((item, index) =>
                            <NavItem title={item.title} icon={item.icon} index={index} />
                        )}

                        <NavTitle title="You" />
                        
                        {navYou.map((item, index) =>
                            <NavItem title={item.title} icon={item.icon} index={index} />
                        )}

                        <NavTitle title="Your company" />

                        {navCompany.map((item, index) =>
                            <NavItem title={item.title} icon={item.icon} index={index} />
                        )}
                    </nav>
                </ScrollArea>
            </ResizablePanel>

            <ResizableHandle className="bg-transparent w-0.5 transition-colors hover:bg-ring data-[resize-handle-state=hover]:bg-ring data-[resize-handle-state=drag]:bg-ring" />

            <ResizablePanel defaultSize={85}>
                <ScrollArea className="h-full bg-background rounded-lg shadow">
                    <div className="flex h-14 border-b items-center p-4 text-sm text-secondary-foreground font-medium">
                        <div className="flex-1">
                            My documents
                        </div>
                        <div className="flex flex-none gap-1.5">
                            <Button size="icon-sm" className="flex gap-1.5 md:w-auto md:px-3">
                                <Upload size="16" />
                                <span className="hidden md:block">Upload files</span>
                            </Button>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="secondary" size="icon-sm">
                                        <EllipsisVertical size="20" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-60">
                                    Menu!
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className="p-6 md:p-12">
                        <div className="flex flex-col gap-2 mb-6">
                            <Folders size="28" className="text-primary-foreground" />
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-semibold">Personal folders</h1>
                                <span className="text-secondary-foreground">Organize your personal documents into folders.</span>
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
            </ResizablePanel>
        </ResizablePanelGroup>
        </TooltipProvider>
    </div>
  );
}

export default Layout;