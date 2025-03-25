import { Button } from "@/components/Actions/Button"
import { Icon } from "@/components/Utilities/Icon"
import AlertCircle from "@/icons/app/AlertCircle"
import ChevronRight from "@/icons/app/ChevronRight"
import Megaphone from "@/icons/app/Megaphone"
import { Image } from "@/lib/imageHandler"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { Skeleton } from "@/ui/skeleton"
import {
  ComponentProps,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react"

type ProductUpdate = {
  title: string
  href: string
  mediaUrl: string
  updated: string
  unread?: boolean
  onClick?: ComponentProps<typeof DropdownMenuItem>["onClick"]
}

type ProductUpdatesProp = {
  label: string
  moreUpdatesLabel: string
  updatesPageUrl: string
  getUpdates: () => Promise<Array<ProductUpdate>>
  hasUnread?: boolean
  currentModule: string
  onOpenChange?: ComponentProps<typeof DropdownMenu>["onOpenChange"]
  onHeaderClick?: ComponentProps<typeof DropdownMenuTrigger>["onClick"]
  onItemClick?: ComponentProps<typeof DropdownMenuItem>["onClick"]
  trackView?: () => void
  emptyScreen: {
    title: string
    description: string
    buttonText: string
  }
  errorScreen: {
    title: string
    description: string
    buttonText: string
  }
}

const ProductUpdates = ({
  currentModule,
  label,
  moreUpdatesLabel,
  getUpdates,
  updatesPageUrl,
  emptyScreen,
  errorScreen,
  onOpenChange = () => {},
  onHeaderClick = () => {},
  onItemClick = () => {},
  hasUnread = false,
  trackView = () => {},
}: ProductUpdatesProp) => {
  const [state, setState] = useState<"idle" | "fetching" | "error">("idle")
  const [updates, setUpdates] = useState<Array<ProductUpdate> | null>(null)
  const [featuredUpdate, ...restUpdates] = updates ?? []

  useEffect(() => {
    trackView()
    setUpdates(null)
    setState("idle")
  }, [currentModule])

  const invokeGetUpdates = useCallback(async () => {
    try {
      setState("fetching")
      const response = await getUpdates()
      setState("idle")
      setUpdates(response)
    } catch {
      setState("error")
    }
  }, [getUpdates])

  return (
    <DropdownMenu
      onOpenChange={async (open) => {
        if (open && updates === null) {
          invokeGetUpdates()
        }
        onOpenChange(open)
      }}
    >
      <DropdownMenuTrigger asChild>
        <button
          title={label}
          className="relative inline-flex aspect-square h-8 items-center justify-center rounded border border-solid border-f1-border bg-f1-background-inverse-secondary px-0 text-f1-foreground hover:border-f1-border-hover"
        >
          <Icon icon={Megaphone} size="md" />
          {hasUnread && <UnreadDot className="absolute -right-0.5 -top-0.5" />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={8}
          collisionPadding={20}
          align="end"
          hideWhenDetached
          className="max-h-[600px] min-w-96 max-w-md overflow-y-auto"
        >
          <Header title={label} url={updatesPageUrl} onClick={onHeaderClick} />
          {state === "fetching" && <ProductUpdatesSkeleton />}
          {state === "idle" && updates !== null && updates.length === 0 && (
            <>
              <div className="p-2 pt-0">
                <NoUpdates {...emptyScreen} buttonUrl={updatesPageUrl} />
              </div>
            </>
          )}
          {state === "idle" && updates !== null && updates.length > 0 && (
            <>
              <FeaturedDropdownItem {...featuredUpdate} onClick={onItemClick} />
              {updates.length > 1 && (
                <>
                  <DropdownMenuSeparator />
                  <p className="text-balance pb-1 pl-3 pr-5 pt-3 text-sm font-medium text-f1-foreground-secondary">
                    {moreUpdatesLabel}
                  </p>
                  {restUpdates.map((update, index) => (
                    <DropdownItem
                      key={index}
                      {...update}
                      onClick={onItemClick}
                    />
                  ))}
                </>
              )}
            </>
          )}
          {state === "error" && (
            <>
              <div className="p-2 pt-0">
                <ErrorScreen
                  {...errorScreen}
                  onClick={() => {
                    invokeGetUpdates()
                  }}
                />
              </div>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

const FeaturedDropdownItem = ({
  title,
  href,
  mediaUrl,
  unread,
  updated,
  onClick,
}: ProductUpdate) => {
  const itemClass = "flex flex-col items-stretch gap-3 w-full"

  const isVideo = mediaUrl?.includes(".mp4")

  return (
    <DropdownMenuItem asChild onClick={onClick}>
      <Link
        href={href}
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noopener noreferrer"
        className={cn(
          itemClass,
          "text-f1-foreground no-underline hover:cursor-pointer"
        )}
      >
        {isVideo ? (
          <div className="overflow-clip rounded border border-solid border-f1-border-secondary">
            <video
              src={mediaUrl}
              className="block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ) : (
          <div className="overflow-clip rounded border border-solid border-f1-border-secondary">
            <Image
              fetchPriority="high"
              src={mediaUrl}
              className="block aspect-video w-full bg-f1-background-secondary object-contain object-center"
            />
          </div>
        )}
        <div className="flex items-start gap-4">
          <div className="flex-1 *:text-base">
            <h3 className="font-medium">{title}</h3>
            <p className="font-normal text-f1-foreground-secondary">
              {updated}
            </p>
          </div>
          {unread && <UnreadDot className="mt-1.5" />}
        </div>
      </Link>
    </DropdownMenuItem>
  )
}

const DropdownItem = ({
  title,
  href,
  updated,
  unread = false,
  onClick,
}: ProductUpdate) => {
  const itemClass = cn("flex flex-col items-stretch gap-3 w-full")

  return (
    <DropdownMenuItem asChild className={itemClass} onClick={onClick}>
      <Link
        href={href}
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noopener noreferrer"
        className={cn(
          itemClass,
          "text-f1-foreground no-underline hover:cursor-pointer"
        )}
      >
        <div className="flex items-start gap-4">
          <div className="flex-1 *:text-base">
            <h3 className="text-pretty font-medium">{title}</h3>
            <p className="font-normal text-f1-foreground-secondary">
              {updated}
            </p>
          </div>
          {unread && <UnreadDot className="mt-1.5" />}
        </div>
      </Link>
    </DropdownMenuItem>
  )
}

const Header = ({
  title,
  url,
  onClick,
}: {
  title: string
  url: string
  onClick: ComponentProps<typeof Button>["onClick"]
}) => (
  <a
    href={url}
    className="flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground"
  >
    <h2 className="text-base font-medium">{title}</h2>
    <Button
      variant="outline"
      round
      size="sm"
      icon={ChevronRight}
      label={title}
      hideLabel
      onClick={onClick}
    />
  </a>
)

const BaseScreen = ({
  icon,
  button,
  title,
  description,
  iconWrapperClassName,
}: {
  button: ReactElement
  icon: ReactElement
  title: string
  description: string
  iconWrapperClassName?: string
}) => (
  <div className="w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12">
    <div className="flex flex-col items-center gap-4">
      <div
        className={cn(
          "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
          iconWrapperClassName
        )}
      >
        {icon}
      </div>
      <div className="flex flex-1 flex-col gap-1 text-center *:text-base">
        <h3 className="text-pretty font-medium">{title}</h3>
        <p className="font-normal text-f1-foreground-secondary">
          {description}
        </p>
      </div>
      {button}
    </div>
  </div>
)

const NoUpdates = ({
  title,
  buttonText,
  buttonUrl,
  description,
}: {
  buttonUrl: string
} & ProductUpdatesProp["emptyScreen"]) => (
  <BaseScreen
    title={title}
    description={description}
    icon={<Icon icon={Megaphone} size="lg" className="block" />}
    button={
      <Link href={buttonUrl}>
        <Button label={buttonText} />
      </Link>
    }
  />
)

const ErrorScreen = ({
  title,
  description,
  buttonText,
  onClick,
}: { onClick: () => void } & ProductUpdatesProp["errorScreen"]) => (
  <BaseScreen
    title={title}
    description={description}
    iconWrapperClassName="text-f1-icon-critical bg-f1-background-critical border-f1-critical"
    icon={<Icon icon={AlertCircle} size="lg" />}
    button={<Button variant="outline" label={buttonText} onClick={onClick} />}
  />
)

const ProductUpdatesSkeleton = () => (
  <div
    className="flex flex-col"
    role="status"
    aria-busy="true"
    aria-live="polite"
  >
    <div className="p-2">
      <Skeleton className="h-56 w-full rounded" />
      <div className="flex basis-1/3 flex-row justify-between gap-2 p-3">
        <div className="flex flex-1 flex-col gap-2 py-1">
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <div className="flex basis-1/3 flex-row justify-between gap-2 p-3">
        <div className="flex flex-1 flex-col gap-2 py-1">
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
    </div>
  </div>
)

const UnreadDot = ({ className = "" }: { className?: string }) => (
  <div
    className={cn("size-2 rounded bg-f1-background-selected-bold", className)}
  />
)

export { ProductUpdates, type ProductUpdate, type ProductUpdatesProp }
