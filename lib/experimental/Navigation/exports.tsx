import { removeInternalProps } from "@/lib/internal-props.tsx"

export * from "./ApplicationFrame"
export { useSidebar } from "./ApplicationFrame/FrameProvider"
export * from "./Carousel"
export * from "./DaytimePage"
export * from "./Dropdown"

// BDropdown
import { Dropdown as DropdownComponent } from "./Dropdown"

export const Dropdown = removeInternalProps(DropdownComponent)
//
export * from "./Header"
export * from "./Omnibutton"
export * from "./Page"
export * from "./Sidebar"
export * from "./Tabs"
