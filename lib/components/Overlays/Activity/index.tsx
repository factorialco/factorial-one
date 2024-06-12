import { createContext, ReactElement, useContext, useState } from "react"
import { Dialog, DialogContent } from "../Dialog"
export { Activity } from "./Renderer"

type SerializableProps = Record<string, string>

export type ActivityDefinition<Data extends SerializableProps> = {
  id?: string
  component: React.FC<{ data: Data }>
}

type OpenActivityOptions<Data extends SerializableProps> = [
  activity: ActivityDefinition<Data>,
  args: Data,
  options?: {
    onClose?: () => void
  },
]

type OpenActivityCallback = <Data extends SerializableProps>(
  ...options: OpenActivityOptions<Data>
) => void

type RenderedActivity = {
  id?: ActivityDefinition<SerializableProps>["id"]
  element: ReactElement
  data: SerializableProps
  onClose?: () => void
}

const ActivityContext = createContext<{
  openActivity: OpenActivityCallback
  currentActivity: RenderedActivity | null
} | null>(null)

export const ActivityProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [currentActivity, setCurrentActivity] =
    useState<RenderedActivity | null>(null)

  const openActivity = async <Data extends SerializableProps>(
    ...[activity, data, options]: OpenActivityOptions<Data>
  ) => {
    setDialogOpen(true)
    const onClose = options?.onClose ?? (() => {})
    const Component = activity.component
    setCurrentActivity({
      id: activity.id,
      data: data,
      element: <Component data={data} />,
      onClose,
    })
  }

  const closeActivity = () => {
    setDialogOpen(false)
    currentActivity?.onClose?.()
    setTimeout(() => setCurrentActivity(null), 200)
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
          setDialogOpen(value)
          if (value === false) closeActivity()
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
