import { createContext, ReactElement, useContext, useState } from "react"
import { Dialog, DialogContent } from "../Dialog"
export { Activity } from "./Renderer"

export type ActivityDefinitionType<Arguments, Data> = {
  component: (data: Data) => ReactElement
  loader: (args: Arguments) => Promise<Data>
}

type OpenActivityOptions<Arguments, Data> = [
  activity: ActivityDefinitionType<Arguments, Data>,
  args: Arguments,
  options?: {
    onClose?: () => void
  },
]

type OpenActivityCallback = <Arguments, Data>(
  ...options: OpenActivityOptions<Arguments, Data>
) => void

type CurrentActivity = {
  element: ReactElement
  onClose?: () => void
}

const ActivityContext = createContext<{
  openActivity: OpenActivityCallback
  currentActivity: CurrentActivity | null
} | null>(null)

export const ActivityProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [currentActivity, setCurrentActivity] =
    useState<CurrentActivity | null>(null)

  const openActivity = async <Arguments, Data>(
    ...[activity, args, options]: OpenActivityOptions<Arguments, Data>
  ) => {
    const onClose = options?.onClose ?? (() => {})
    setDialogOpen(true)

    try {
      setCurrentActivity({ element: <>Loading...</> })
      const data = await activity.loader(args)
      setCurrentActivity({ element: activity.component(data), onClose })
    } catch {
      setCurrentActivity({ element: <>Error loading activity</> })
    }
  }

  return (
    <ActivityContext.Provider
      value={{
        openActivity,
        currentActivity,
      }}
    >
      {children}
      <Dialog
        open={dialogOpen}
        onOpenChange={(value) => {
          if (value === true) return
          setDialogOpen(false)
          setTimeout(() => setCurrentActivity(null), 200)
        }}
      >
        <DialogContent>{currentActivity?.element}</DialogContent>
      </Dialog>
    </ActivityContext.Provider>
  )
}

export const useActivity = () => {
  const activityContext = useContext(ActivityContext)
  if (!activityContext)
    throw new Error("useActivity must be used within an ActivityProvider")

  return activityContext
}
