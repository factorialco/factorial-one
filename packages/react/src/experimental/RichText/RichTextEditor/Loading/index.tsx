import { Spinner } from "@/experimental/exports"

const Loading = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <Spinner size="medium" />
    </div>
  )
}

export { Loading }
