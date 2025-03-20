import { Button } from "@/components/Actions/Button"
import { Icon } from "@/components/Utilities/Icon"
import ChevronRight from "@/icons/app/ChevronRight"
import Megaphone from "@/icons/app/Megaphone.tsx"
import Messages from "@/icons/app/Messages"
import { Image } from "@/lib/imageHandler"
import { Link } from "@/lib/linkHandler"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"
import { useState } from "react"

type ProductUpdate = {
  title: string
  href: UrlString
  imageURL: UrlString
  updated: string
  unread?: boolean
}

type ProductUpdatesProp = {
  label: string
  updatesPageUrl: UrlString
  getUpdatesQuery: () => Promise<Array<ProductUpdate>>
  hasUnread?: boolean
  emptyScreen: {
    title: string
    description: string
    buttonText: string
  }
}

function NoUpdates({
  title,
  description,
  buttonText,
  buttonUrl,
}: {
  buttonUrl: UrlString
} & ProductUpdatesProp["emptyScreen"]) {
  return (
    <div className="w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-min rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary p-3">
          <Icon icon={Megaphone} size="lg" className="block" />
        </div>
        <div className="flex-1 gap-1 text-center *:text-base">
          <h3 className="font-medium">{title}</h3>
          <p className="font-normal text-f1-foreground-secondary">
            {description}
          </p>
        </div>
        <Link href={buttonUrl}>
          <Button label={buttonText} />
        </Link>
      </div>
    </div>
  )
}

const ProductUpdates = ({
  label,
  getUpdatesQuery,
  updatesPageUrl,
  emptyScreen,
  // hasUnread = false,
}: ProductUpdatesProp) => {
  const [updates, setUpdates] = useState<Array<ProductUpdate> | null>(null)
  const [featuredUpdate, ...restUpdates] = updates ?? []

  return (
    <DropdownMenu
      onOpenChange={async (open) => {
        if (open && updates === null) {
          const response = await getUpdatesQuery()
          setUpdates(response)
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <button
          title={label}
          className="inline-flex aspect-square h-8 items-center justify-center rounded border border-solid border-f1-border bg-f1-background-inverse-secondary px-0 text-f1-foreground hover:border-f1-border-hover"
        >
          <Icon icon={Messages} size="md" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="max-h-[600px] min-w-96 max-w-md"
      >
        {updates === null && "loading"}
        {updates !== null && updates.length === 0 && (
          <>
            <Header title={label} url={updatesPageUrl} />
            <div className="p-2 pt-0">
              <NoUpdates {...emptyScreen} buttonUrl={updatesPageUrl} />
            </div>
          </>
        )}
        {updates !== null && updates.length > 0 && (
          <>
            <Header title={label} url={updatesPageUrl} />
            <div className="p-2 pt-0">
              <FeaturedDropdownItem {...featuredUpdate} />
              {updates.length > 1 && (
                <>
                  <DropdownMenuSeparator />
                  {restUpdates.map((update, index) => (
                    <DropdownItem key={index} {...update} />
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const FeaturedDropdownItem = ({
  title,
  href,
  imageURL,
  unread,
  updated,
}: ProductUpdate) => {
  const itemClass = "flex flex-col items-stretch gap-3 w-full"
  return (
    <DropdownMenuItem asChild className={itemClass}>
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
        <div className="overflow-clip rounded border border-solid border-f1-border-secondary">
          <Image
            src={imageURL}
            className="block aspect-video w-full object-contain object-center"
          />
        </div>
        <div className="flex items-start gap-4">
          <div className="flex-1 *:text-base">
            <h3 className="font-medium">{title}</h3>
            <p className="font-normal text-f1-foreground-secondary">
              {updated}
            </p>
          </div>
          {unread && (
            <div className="mt-1.5 size-2 rounded bg-f1-background-selected-bold" />
          )}
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
}: ProductUpdate) => {
  const itemClass = cn("flex flex-col items-stretch gap-3 w-full")

  return (
    <DropdownMenuItem asChild className={itemClass}>
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
            <h3 className="font-medium">{title}</h3>
            <p className="font-normal text-f1-foreground-secondary">
              {updated}
            </p>
          </div>
          {unread && (
            <div className="mt-1.5 size-2 rounded bg-f1-background-selected-bold" />
          )}
        </div>
      </Link>
    </DropdownMenuItem>
  )
}

const Header = ({ title, url }: { title: string; url: UrlString }) => (
  <a
    href={url}
    className="flex items-center justify-between gap-4 px-4 py-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground"
  >
    <h2 className="text-base font-medium">{title}</h2>
    <Button
      variant="outline"
      round
      size="sm"
      icon={ChevronRight}
      label={title}
      hideLabel
    />
  </a>
)

export { ProductUpdates, type ProductUpdate, type ProductUpdatesProp }
