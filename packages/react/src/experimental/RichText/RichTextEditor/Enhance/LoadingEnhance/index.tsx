import { Spinner } from "@/experimental/exports"

interface LoadingEnhanceProps {
  label?: string
}

const LoadingEnhance = ({ label }: LoadingEnhanceProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[1px]">
      <div className="rounded-md bg-f1-background">
        <div className="magicBackground magicColor flex items-center gap-2 rounded-md px-3 py-2">
          <Spinner size="small" />
          <p className="font-medium">{label || "Loading..."}</p>
        </div>
      </div>
    </div>
  )
}

export { LoadingEnhance }
