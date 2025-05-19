import { ButtonProps } from "@/factorial-one"
import { useState } from "react"
import { Button } from "../../../components/Actions/Button"
import UpsellIcon from "../../../icons/app/Upsell"
import { Dialog } from "../../Overlays/Dialog"
import { UpsellRequestResponseDialog } from "../UpsellRequestResponseDialog"

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
}

type ResponseStatus = "success" | "error" | null

export const UpsellingButton = ({
  label,
  showIcon = true,
  onRequest,
  showConfirmation = true,
  onClick,
  loading: externalLoading,
  ...props
}: UpsellingButtonProps) => {
  const [responseStatus, setResponseStatus] = useState<ResponseStatus>(null)
  const [internalLoading, setInternalLoading] = useState(false)

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onRequest) {
      setInternalLoading(true)
      try {
        await onRequest()
        if (showConfirmation) {
          setResponseStatus("success")
        }
      } catch (error) {
        setResponseStatus("error")
        console.error("Error processing request:", error)
      } finally {
        setInternalLoading(false)
      }
    } else {
      onClick?.(event)
    }
  }

  const isLoading = externalLoading || internalLoading
  const buttonLabel = isLoading ? "Processing..." : label

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
      {showConfirmation && responseStatus === "success" && (
        <UpsellRequestResponseDialog
          open={true}
          onClose={() => setResponseStatus(null)}
        />
      )}
      {showConfirmation && responseStatus === "error" && (
        <Dialog
          open={true}
          onClose={() => setResponseStatus(null)}
          header={{
            type: "critical",
            title: "Request failed",
            description:
              "We couldn't process your request. Please try again later.",
          }}
          actions={{
            primary: {
              label: "Try again",
              onClick: () => setResponseStatus(null),
              variant: "critical",
            },
            secondary: {
              label: "Close",
              onClick: () => setResponseStatus(null),
            },
          }}
        />
      )}
    </>
  )
}
