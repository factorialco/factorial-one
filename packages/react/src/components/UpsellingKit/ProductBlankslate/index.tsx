import { ModuleAvatar } from "@/experimental/Information/ModuleAvatar"
import {
  Button,
  ErrorMessageProps,
  IconType,
  LoadingStateProps,
  NextStepsProps,
  SuccessMessageProps,
  UpsellingButton,
} from "@/factorial-one"
import { ButtonVariant } from "@/ui/button"

type BaseAction = {
  label: string
  onClick: () => Promise<void>
}

type UpsellAction = BaseAction & {
  type: "upsell"
  errorMessage: ErrorMessageProps
  successMessage: SuccessMessageProps
  loadingState: LoadingStateProps
  nextSteps: NextStepsProps
  closeLabel: string
  showConfirmation: boolean
}

type RegularAction = BaseAction & {
  type: "regular"
  variant: ButtonVariant
}

type Action = UpsellAction | RegularAction

export type ProductBlankslateProps = {
  backgroundImage: string
  icon: IconType
  title: string
  description: string
  isVisible?: boolean
  actions: Action[]
}

export const ProductBlankslate = ({
  backgroundImage,
  icon,
  title,
  description,
  isVisible = true,
  actions,
}: ProductBlankslateProps) => {
  if (!isVisible) {
    return null
  }

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ height: "100cqh" }}
    >
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "blur(4px)",
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex max-w-xl flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <ModuleAvatar icon={icon} size="lg" />
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-lg font-normal">{description}</p>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          {actions.map((action) =>
            action.type !== "upsell" ? (
              <Button
                key={action.label}
                label={action.label}
                onClick={action.onClick}
                variant={action.variant}
              />
            ) : (
              <UpsellingButton
                key={action.label}
                label={action.label}
                onRequest={action.onClick}
                errorMessage={action.errorMessage}
                successMessage={action.successMessage}
                loadingState={action.loadingState}
                nextSteps={action.nextSteps}
                closeLabel={action.closeLabel}
                showConfirmation={action.showConfirmation}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}

ProductBlankslate.displayName = "ProductBlankslate"
