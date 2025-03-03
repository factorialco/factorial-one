import { Button } from "@/components/Actions/Button"
import { Cross } from "@/icons/app"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { AIIcon } from "../AIIcon"
import Noise from "./texture.png"

interface AIBoxProps {
  hiddenBorder?: boolean
}

const AISelection = ({
  children,
  selected = false,
  onClick,
}: {
  children: React.ReactNode
  selected?: boolean
  onClick?: () => void
}) => {
  return (
    <div
      className={cn(
        "group relative rounded px-2 py-2.5 hover:cursor-pointer",
        selected && "bg-gradient-to-r from-[#FACBBA] to-[#C7BBFA]"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-[1px] z-0 rounded bg-f1-background opacity-0",
          selected && "opacity-95"
        )}
      />
      <div className="relative z-10">{children}</div>
      <div
        className={cn(
          "absolute right-2.5 top-2.5 z-10 h-5 w-5 rounded-full border border-solid border-f1-border bg-f1-background transition-all after:absolute after:left-1.5 after:top-1.5 after:h-1.5 after:w-1.5 after:rounded-full after:bg-f1-background after:content-['']",
          selected && "bg-f1-background-selected-bold"
        )}
      />
    </div>
  )
}

export const AIBox = ({ hiddenBorder = true }: AIBoxProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const selections = [
    {
      content: (
        <span>
          All time off requests by{" "}
          <strong className="font-medium">Dani Moreno</strong>
        </span>
      ),
    },
    {
      content: (
        <span>
          All time off requests by{" "}
          <strong className="font-medium">Design</strong>
        </span>
      ),
    },
    {
      content: (
        <span>
          All time off requests under{" "}
          <strong className="font-medium">5 days</strong>
        </span>
      ),
    },
    {
      content: <span>All time off requests</span>,
    },
  ]

  return (
    <div
      className={cn(
        "relative h-fit w-[400px] rounded-xl border border-solid border-f1-border-secondary bg-[#FDEDD5]/50 shadow-md ring-1 ring-inset ring-f1-border-secondary",
        hiddenBorder && "overflow-hidden"
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-30"
        style={{
          backgroundImage: `url(${Noise})`,
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 -z-10 opacity-[0.25] [&>div]:mix-blend-soft-light">
        <div
          className="animate-trail h-[300px] w-[300px] bg-[#5154F7] blur-3xl"
          style={{
            offsetPath: "border-box",
            offsetAnchor: "50% 50%",
            offsetRotate: "0deg",
          }}
        />
        <div
          className="animate-trail h-[300px] w-[300px] bg-[#F053A0] blur-3xl"
          style={{
            offsetPath: "border-box",
            offsetAnchor: "50% 50%",
            animationDelay: "-2s",
            offsetRotate: "0deg",
          }}
        />
        <div
          className="animate-trail h-[300px] w-[300px] bg-[#8F62F5] blur-3xl"
          style={{
            offsetPath: "border-box",
            offsetAnchor: "50% 50%",
            animationDelay: "-4s",
            offsetRotate: "0deg",
          }}
        />
        <div
          className="animate-trail h-[300px] w-[300px] bg-[#F5A51C] blur-3xl"
          style={{
            offsetPath: "border-box",
            offsetAnchor: "50% 50%",
            animationDelay: "-6s",
            offsetRotate: "0deg",
          }}
        />
      </div>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between px-3 py-2 font-medium text-[#6143A7]">
          <div className="flex items-center gap-2">
            <AIIcon className="h-6 w-6" />
            <span>Create smart rule</span>
          </div>
          <Button
            variant="neutral"
            icon={Cross}
            label="Close"
            hideLabel
            round
          />
        </div>
        <div className="h-full flex-grow px-1 pb-1">
          <div className="flex h-full flex-col justify-between rounded-md bg-f1-background/70 backdrop-blur-sm">
            <div className="w-full px-4 pb-3 pt-4 text-f1-foreground-secondary">
              Based on the context of this request task, you can automate these
              actions going forward
            </div>
            <div className="flex flex-col gap-1.5 px-3 pb-4">
              {selections.map((selection, index) => (
                <AISelection
                  key={index}
                  selected={selectedIndex === index}
                  onClick={() => setSelectedIndex(index)}
                >
                  {selection.content}
                </AISelection>
              ))}
            </div>
            <div className="flex justify-between gap-2 border border-solid border-transparent border-t-f1-border-secondary px-4 py-3">
              <Button variant="neutral" label="Edit rules" />
              <Button label="Confirm rule" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
