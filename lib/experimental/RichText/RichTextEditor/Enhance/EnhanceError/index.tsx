import { Button } from "@/components/Actions/Button"
import { Alert, AlertDescription, AlertTitle } from "@/experimental/exports"

interface EnhanceErrorProps {
  aiError: string
  onClose: () => void
}

const EnhanceError = ({ aiError, onClose }: EnhanceErrorProps) => {
  return (
    <div className="absolute bottom-0 flex w-full items-center justify-center p-3">
      <Alert variant="destructive" className="w-fit max-w-full shadow-md">
        <AlertTitle>Error enhancing text</AlertTitle>
        <AlertDescription>
          <div className="flex flex-col gap-2">
            {aiError}
            <div className="w-fit">
              <Button
                variant="outline"
                onClick={onClose}
                label="Continue editing"
              />
            </div>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  )
}

export { EnhanceError }
