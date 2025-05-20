import { ButtonProps } from "@/factorial-one"
import { useState } from "react"
import { Button } from "../../../components/Actions/Button"
import UpsellIcon from "../../../icons/app/Upsell"
import { UpsellRequestResponseDialog } from "./components/UpsellRequestResponseDialog"

export interface UpsellingButtonProps
  extends Omit<ButtonProps, "variant" | "icon"> {
  /**
   * The text to be displayed in the button
   */
  label: string
  /**
   * Whether to show the Upsell icon. Defaults to true.
   */
  showIcon?: boolean
  /**
   * Function to be executed when the button is clicked. Must return a Promise.
   */
  onRequest?: () => Promise<void>
  /**
   * Whether to show the confirmation dialog after the request
   */
  showConfirmation?: boolean
  /**
   * The error message to be displayed in the confirmation dialog
   */
  errorMessage: {
    title: string
    description: string
  }
  /**
   * The success message to be displayed in the confirmation dialog
   */
  successMessage: {
    title: string
    description: string
    buttonLabel: string
    buttonOnClick: () => void
  }
  /**
   * The label to be displayed in the button when the request is being processed
   */
  loadingState: {
    label: string
  }
  /**
   * The next steps to be displayed in the confirmation dialog
   */
  nextSteps: {
    title: string
    items: {
      text: string
      isCompleted?: boolean
    }[]
  }
}

type ResponseStatus = "success" | "error" | null

export const UpsellingButton = ({
  label,
  showIcon = true,
  onRequest,
  showConfirmation = true,
  loading: externalLoading,
  errorMessage,
  successMessage,
  loadingState,
  nextSteps,
  ...props
}: UpsellingButtonProps) => {
  const [responseStatus, setResponseStatus] = useState<ResponseStatus>(null)
  const [internalLoading, setInternalLoading] = useState(false)

  const handleClick = async () => {
    if (onRequest) {
      setInternalLoading(true)
      try {
        await onRequest()
        if (showConfirmation) {
          setResponseStatus("success")
        }
      } catch {
        setResponseStatus("error")
      } finally {
        setInternalLoading(false)
      }
    }
  }

  const isLoading = externalLoading || internalLoading
  const buttonLabel = isLoading ? loadingState.label : label

  return (
    <>
      <Button
        variant="promote"
        label={buttonLabel}
        icon={showIcon ? UpsellIcon : undefined}
        onClick={handleClick}
        loading={isLoading}
        {...props}
      />
      {showConfirmation && responseStatus && (
        <UpsellRequestResponseDialog
          open={true}
          onClose={() => setResponseStatus(null)}
          success={responseStatus === "success"}
          errorMessage={errorMessage}
          successMessage={successMessage}
          nextSteps={nextSteps}
        />
      )}
    </>
  )
}
