import { Button, ButtonProps } from "@/components/Actions/Button"
import { Icon, IconType } from "@/components/Utilities/Icon"
import ExternalLink from "@/icons/app/ExternalLink"
import { cn, focusRing } from "@/lib/utils"

type Props = {
  /** Main heading text */
  title: string
  /** Description text below the title */
  description: string
  /** Optional action button */
  action?: Pick<ButtonProps, "label" | "onClick"> & {
    icon?: IconType
  }
  /** Optional help link, usually to a Help Center article */
  help?: {
    label: string
    href: string
  }
  /** Optional separator */
  separator?: "top" | "bottom"
}

export const SectionHeader = ({
  title,
  description,
  action,
  help,
  separator,
}: Props) => {
  return (
    <div
      className={cn(
        "border-1 flex flex-col justify-between gap-4 border-dashed border-transparent px-6 py-5 md:flex-row md:gap-2",
        separator === "top" && "border-t-f1-border",
        separator === "bottom" && "border-b-f1-border"
      )}
    >
      <div className="flex grow flex-col gap-3">
        <div className="flex max-w-[640px] flex-col gap-1">
          <h2 className="text-lg font-semibold text-f1-foreground">{title}</h2>
          <p className="text-f1-foreground-secondary">{description}</p>
        </div>
        {help && (
          <div className="w-fit">
            <a
              href={help.href}
              target="_blank"
              className={cn(
                "flex items-center gap-1 rounded-sm bg-f1-background-secondary px-2 py-0.5 text-base font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary-hover [&>svg]:text-f1-foreground-secondary",
                focusRing()
              )}
            >
              {help.label}
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
              variant="ghost"
              icon={action.icon}
              size="md"
              onClick={action.onClick}
            />
          </div>
          <div className="w-full md:hidden [&>button]:w-full">
            <Button
              label={action.label}
              variant="outline"
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

SectionHeader.displayName = "SectionHeader"
