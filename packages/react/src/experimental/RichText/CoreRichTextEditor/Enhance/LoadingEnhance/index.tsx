import { Spinner } from "@/experimental/exports"
import { cn } from "@/lib/utils"

interface LoadingEnhanceProps {
  label?: string
  isFullscreen: boolean
  mode: "blank" | "normal"
}

const LoadingEnhance = ({ label, isFullscreen, mode }: LoadingEnhanceProps) => {
  return (
    <div
      className={cn(
        "absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-f1-background p-2",
        !isFullscreen && mode === "normal" && "max-h-60",
        mode === "normal" && "rounded-xl"
      )}
    >
      <div className="flex h-full w-full flex-row items-center justify-center gap-3 rounded-md bg-gradient-to-r from-[#f9f0dd80] to-[#d4ccfd80]">
        <Spinner size="small" />
        <p className="font-medium">{label || "Loading..."}</p>
      </div>
    </div>
  )
}

export { LoadingEnhance }
