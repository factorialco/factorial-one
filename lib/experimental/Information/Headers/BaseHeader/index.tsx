import { Button } from "@/components/Actions/Button"
import {
  AvatarVariant,
  renderAvatar,
} from "@/experimental/Information/Avatars/utils"
import { StatusVariant } from "@/experimental/Information/Tags/StatusTag"
import {
  PrimaryAction,
  SecondaryAction,
} from "@/experimental/Information/utils"
import {
  Dropdown,
  DropdownItem,
  MobileDropdown,
} from "@/experimental/Navigation/Dropdown"
import { Metadata, MetadataItem } from "../Metadata"

interface BaseHeaderProps {
  title: string
  avatar?: AvatarVariant
  description?: string
  eyebrow?: React.ReactNode
  primaryAction?: PrimaryAction
  secondaryActions?: SecondaryAction[]
  otherActions?: DropdownItem[]
  status?: {
    label: string
    text: string
    variant: StatusVariant
  }
  metadata?: MetadataItem[]
}

export function BaseHeader({
  title,
  avatar,
  description,
  eyebrow,
  primaryAction,
  secondaryActions,
  otherActions,
  status,
  metadata,
}: BaseHeaderProps) {
  const allMetadata = status
    ? [
        {
          label: status.label,
          value: {
            type: "status" as const,
            label: status.text,
            variant: status.variant,
          },
        },
        ...(metadata ?? []),
      ]
    : metadata

  return (
    <div className="flex flex-col gap-3 p-8">
      <div className="flex flex-col items-start justify-start gap-4 md:flex-row">
        <div className="flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-center">
          {avatar && (
            <div className="flex items-start">
              {renderAvatar(avatar, "large")}
            </div>
          )}
          <div className="flex flex-col gap-1">
            {eyebrow && (
              <div className="text-lg text-f1-foreground-secondary">
                {eyebrow}
              </div>
            )}
            <span className="text-xl font-semibold text-f1-foreground">
              {title}
            </span>
            {description && (
              <div className="text-lg text-f1-foreground-secondary">
                {description}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden">
          {metadata && <Metadata items={allMetadata} />}
        </div>
        <div className="flex w-full shrink-0 flex-wrap items-center gap-x-3 gap-y-4 md:w-fit md:flex-row-reverse md:gap-y-2 md:overflow-x-auto">
          {primaryAction && (
            <>
              <div className="hidden md:block">
                <Button
                  label={primaryAction.label}
                  onClick={primaryAction.onClick}
                  variant="default"
                  icon={primaryAction.icon}
                />
              </div>
              <div className="w-full md:hidden [&>*]:w-full">
                <Button
                  label={primaryAction.label}
                  onClick={primaryAction.onClick}
                  variant="default"
                  icon={primaryAction.icon}
                  size="lg"
                />
              </div>
            </>
          )}
          {primaryAction && (secondaryActions || otherActions) && (
            <div className="hidden h-4 w-px bg-f1-background-secondary md:block" />
          )}
          {secondaryActions &&
            secondaryActions.map((action) => (
              <>
                <div className="hidden md:block">
                  <Button
                    key={action.label}
                    label={action.label}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    icon={action.icon}
                  />
                </div>
                <div className="w-full md:hidden [&>*]:w-full">
                  <Button
                    key={action.label}
                    label={action.label}
                    onClick={action.onClick}
                    variant={action.variant ?? "outline"}
                    icon={action.icon}
                    size="lg"
                  />
                </div>
              </>
            ))}
          {otherActions && otherActions.length > 0 && (
            <>
              <div className="hidden md:block">
                <Dropdown items={otherActions} />
              </div>
              <div className="w-full md:hidden">
                <MobileDropdown items={otherActions} />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex hidden flex-wrap items-center gap-x-3 gap-y-1 md:block">
        {metadata && <Metadata items={allMetadata} />}
      </div>
    </div>
  )
}
