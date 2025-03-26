import { Button } from "@/components/Actions/Button"
import { Alert, AlertDescription, AlertTitle } from "@/experimental/exports"
import { useEffect } from "react"

interface EnhanceErrorProps {
  aiError: string
  onClose: () => void
}

const EnhanceError = ({ aiError, onClose }: EnhanceErrorProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose()
    }, 5000)
    return () => clearTimeout(timeout)
  }, [onClose])

  return (
    <div className="absolute bottom-0 flex w-full items-center justify-center p-3">
      <Alert variant="destructive" className="w-fit max-w-full shadow-md">
        <AlertTitle>{aiError}</AlertTitle>
        <AlertDescription>
          <Button
            variant="default"
            onClick={onClose}
            label="Continue editing"
            type="button"
          />
        </AlertDescription>
      </Alert>
    </div>
  )
}

export { EnhanceError }
