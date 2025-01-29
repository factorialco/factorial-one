import { Icon } from "@/components/Utilities/Icon"
import { BaseAvatar } from "@/experimental/Information/Avatars/BaseAvatar"
import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { BaseTag } from "@/experimental/Information/Tags/BaseTag"
import { ScrollArea } from "@/experimental/Utilities/ScrollArea"
import { ChevronDown, Cross, Search } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button"
import { Checkbox } from "@/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

const EmployeeListTag = ({
  person,
}: {
  person: { firstName: string; lastName: string; avatarUrl: string }
}) => {
  return (
    <div className="pb-2">
      <BaseTag
        className={cn(
          "w-auto gap-1 border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
          "rounded-full"
        )}
        left={
          <BaseAvatar
            src={person.avatarUrl}
            name={person.firstName + " " + person.lastName}
            size="xsmall"
            type="rounded"
          />
        }
        right={
          <Icon
            icon={Cross}
            size="sm"
            className="ml-auto cursor-pointer text-f1-icon-secondary"
          />
        }
        text={`${person.firstName} ${person.lastName}`}
      />
    </div>
  )
}

const EmployeeListItem = ({
  person,
}: {
  person: { firstName: string; lastName: string; avatarUrl: string }
}) => {
  return (
    <div
      className="flex flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold"
      style={{ width: "calc(100% - 12px)" }}
    >
      <PersonAvatar
        src={person.avatarUrl}
        firstName={person.firstName}
        lastName={person.lastName}
        size="xsmall"
      />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-row items-center gap-1">
          <span className="truncate font-medium">{`${person.firstName} ${person.lastName}`}</span>
        </div>
      </div>
      <Checkbox className="ml-auto data-[state=checked]:bg-f1-foreground-selected data-[state=checked]:text-f1-foreground-inverse" />
    </div>
  )
}

const EmployeeSelectorContent = () => {
  return (
    <div className="flex">
      <div className="flex w-96 flex-col rounded-l-xl border-0 border-r-[1px] border-solid border-f1-border-secondary">
        <div className="flex flex-1 justify-between p-2">
          <div
            className={cn(
              "flex items-center justify-between rounded bg-f1-background-inverse-secondary p-1.5 ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover"
            )}
          >
            <div className="flex items-center gap-1">
              <Icon icon={Search} size="md" />
              <input
                type="text"
                className="w-full border-none bg-transparent text-f1-foreground-secondary outline-none"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="flex max-h-96 flex-col justify-start gap-1 pl-3 pr-2">
          <ScrollArea className="-mr-2 h-full">
            <EmployeeListItem
              person={{
                firstName: "John",
                lastName: "Smith",
                avatarUrl: "https://i.pravatar.cc/300",
              }}
            />
            <EmployeeListItem
              person={{
                firstName: "Sarah",
                lastName: "Johnson",
                avatarUrl: "https://i.pravatar.cc/301",
              }}
            />
            <EmployeeListItem
              person={{
                firstName: "Emma",
                lastName: "Stone",
                avatarUrl: "https://i.pravatar.cc/302",
              }}
            />
            <EmployeeListItem
              person={{
                firstName: "Jessica",
                lastName: "Jones",
                avatarUrl: "https://i.pravatar.cc/303",
              }}
            />
            <EmployeeListItem
              person={{
                firstName: "Michael",
                lastName: "Brown",
                avatarUrl: "https://i.pravatar.cc/304",
              }}
            />
            <EmployeeListItem
              person={{
                firstName: "David",
                lastName: "Williams",
                avatarUrl: "https://i.pravatar.cc/305",
              }}
            />
            <EmployeeListItem
              person={{
                firstName: "Olivia",
                lastName: "Davis",
                avatarUrl: "https://i.pravatar.cc/306",
              }}
            />
          </ScrollArea>
        </div>
        <div
          className="rounded-bl-xl border-0 border-t-[1px] border-solid border-f1-border-secondary"
          style={{
            backgroundColor: "hsla(var(--white-70))",
          }}
        >
          <div className="flex flex-1 justify-between p-2">
            <Button variant="outline" size="sm">
              Select all
            </Button>
            <Button variant="ghost" size="sm" disabled>
              Clear
            </Button>
          </div>
        </div>
      </div>
      <div
        className="w-56 rounded-r-xl"
        style={{
          background:
            "linear-gradient(270deg, rgba(250, 251, 252, 0) 50%, #FAFBFC 100%)",
        }}
      >
        <div className="flex flex-col">
          <span className="mt-1 p-3 text-f1-foreground-secondary">
            2 selected
          </span>
          <ScrollArea className="h-full px-3">
            <EmployeeListTag
              person={{
                firstName: "John",
                lastName: "Smith",
                avatarUrl: "https://i.pravatar.cc/300",
              }}
            />
            <EmployeeListTag
              person={{
                firstName: "Sarah",
                lastName: "Johnson",
                avatarUrl: "https://i.pravatar.cc/301",
              }}
            />
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export const EmployeeSelector = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex justify-between rounded border border-solid border-f1-border p-2">
          <span className="my-auto pl-2 text-f1-foreground-secondary">
            Select...
          </span>
          <div className="p-0.5">
            <div className="h-[16px] w-[16px]">
              <Icon
                icon={ChevronDown}
                size="sm"
                className="rounded-2xs bg-f1-background-secondary p-0.5"
              />
            </div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full rounded-xl border-[1px] border-solid border-f1-border-secondary p-0">
        <EmployeeSelectorContent />
      </PopoverContent>
    </Popover>
  )
}
