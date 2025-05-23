import { useLayout } from "@/components/layouts/LayoutProvider"
import { Button, type ButtonProps } from "../../../../components/Actions/Button"
import { Icon, type IconType } from "../../../../components/Utilities/Icon"
import ExternalLink from "../../../../icons/app/ExternalLink"
import { cn, focusRing } from "../../../../lib/utils"

type Props = {
  /** Main heading text */
  title: string

  /** Description text below the title */
  description: string

  /**  Complementary action specific to the section */
  action?: Pick<ButtonProps, "label" | "onClick"> & {
    icon?: IconType
    variant?: "default" | "outline"
  }

  /** Optional Link to related documentation (Help center or other link))*/
  supportButton?: {
    label: string
    href: string
  }

  /** If specified, a separator will be displayed above or below the content */
  separator?: "top" | "bottom"
}

export const SectionHeader = ({
  title,
  description,
  action,
  supportButton,
  separator,
}: Props) => {
  const layout = useLayout()
  return (
    <div
      className={cn(
        "border-1 flex flex-col justify-between gap-4 border-dashed border-transparent px-6 pb-5 pt-5 first:pb-0 first:pt-0 md:flex-row md:gap-2",
        layout === "standard" && "-mx-6",
        separator === "top" && "border-t-f1-border first:pt-5",
        separator === "bottom" && "border-b-f1-border first:pb-5"
      )}
    >
      <div className="flex grow flex-col gap-3">
        <div className="flex max-w-[640px] flex-col gap-1">
          <h2 className="text-lg font-semibold text-f1-foreground">{title}</h2>
          <p className="text-f1-foreground-secondary">{description}</p>
        </div>
        {supportButton && (
          <div className="w-fit">
            <a
              href={supportButton.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "flex items-center gap-1 rounded-sm bg-f1-background-secondary px-2 py-0.5 text-base font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary-hover [&>svg]:text-f1-foreground-secondary",
                focusRing()
              )}
            >
              {supportButton.label}
              <Icon icon={ExternalLink} size="sm" />
            </a>
          </div>
        )}
      </div>
      {action && (
        <>
          <div className="hidden md:block">
            <Button
              label={action.label}
              variant={action.variant ?? "outline"}
              icon={action.icon}
              size="md"
              onClick={action.onClick}
            />
          </div>
          <div className="w-full md:hidden [&>button]:w-full">
            <Button
              label={action.label}
              variant={action.variant ?? "outline"}
              icon={action.icon}
              size="lg"
              onClick={action.onClick}
            />
          </div>
        </>
      )}
    </div>
  )
}
