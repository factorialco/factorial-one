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
      <div className="w-fit rounded-md bg-f1-background shadow-md">
        <Alert variant="destructive" className="w-fit max-w-full">
          <AlertTitle>{aiError}</AlertTitle>
          <AlertDescription>
            <Button
              variant="default"
              onClick={(e) => {
                e.preventDefault()
                onClose()
              }}
              label="Continue editing"
              type="button"
            />
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}

export { EnhanceError }
