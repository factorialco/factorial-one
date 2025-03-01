import { Button } from "@/components/Actions/Button"
import { Cross } from "@/icons/app"

export const AIBox = () => {
  return (
    <div className="relative h-[320px] w-[400px] overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-[#FDEDD5]/50 shadow-md">
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
          <span>Create smart rule</span>
          <Button
            variant="neutral"
            icon={Cross}
            label="Close"
            hideLabel
            round
          />
        </div>
        <div className="h-full flex-grow px-2 pb-2">
          <div className="flex h-full flex-col justify-between rounded-md bg-f1-background/70 backdrop-blur-sm">
            <div className="w-full px-4 pb-3 pt-4 text-f1-foreground-secondary">
              Based on the context of this request task, you can automate these
              actions going forward
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
