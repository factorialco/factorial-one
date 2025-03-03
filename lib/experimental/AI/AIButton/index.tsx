import { useState } from "react"
import { AIIcon } from "../AIIcon"
import Noise from "./texture.png"

interface AIButtonProps {
  label: string
  onClick?: () => void
}

export const AIButton = ({ label, onClick }: AIButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className="colors group relative flex items-center gap-2 overflow-hidden rounded bg-[#FDEDD5]/50 py-1.5 pl-2 pr-3 ring-1 ring-inset ring-f1-border-secondary transition hover:ring-f1-border"
      onClick={onClick ?? undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-30"
        style={{
          backgroundImage: `url(${Noise})`,
          backgroundRepeat: "repeat",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full rounded opacity-[0.45] transition-all duration-500 group-hover:translate-x-10 [&>div]:mix-blend-soft-light">
        <div className="absolute -right-10 bottom-1 h-[100px] w-[100px] bg-[#8F62F5] blur-xl" />
        <div className="absolute -left-10 top-1 h-[100px] w-[100px] bg-[#F5A51C] blur-xl" />
      </div>
      <AIIcon className="h-5 w-5" animate={isHovered ? "animate" : "normal"} />
      <span className="font-medium text-[#6143A7]">{label}</span>
    </button>
  )
}
