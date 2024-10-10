import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"

type SidebarIconProps = {
  isExpanded: boolean
  onClick?: () => void
}

function SidebarIconSvg({ isExpanded }: { isExpanded: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-f1-icon-bold"
    >
      <rect
        id="container"
        x="3.33325"
        y="5"
        width="13.3333"
        height="10"
        rx="3"
        strokeWidth="1.3"
        className="stroke-current"
      />
      <path
        id="arrow"
        d={
          isExpanded
            ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667"
            : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667"
        }
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "translate-x-0 stroke-current transition-all duration-200 ease-out",
          isExpanded
            ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100"
            : "opacity-1 group-hover:translate-x-[3px]"
        )}
      />
      <path
        id="line"
        d="M7.5 5L7.5 15"
        strokeWidth="1.3"
        strokeLinecap="round"
        className={cn(
          "stroke-current transition-all duration-200 ease-out",
          isExpanded
            ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0"
            : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        )}
      />
    </svg>
  )
}

export function SidebarIcon({ isExpanded, onClick }: SidebarIconProps) {
  return (
    <Button
      variant="outline"
      size="md"
      round
      onClick={onClick}
      className="group"
      title="Toggle Sidebar"
    >
      <SidebarIconSvg isExpanded={isExpanded} />
    </Button>
  )
}