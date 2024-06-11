import { createContext, ReactElement, useContext, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../Dialog"

export type Activity<Arguments, Data> = {
  title: (data: Data) => string
  component: React.FC<{ data: Data }>
  loader: (args: Arguments) => Promise<Data>
}

type OpenActivityOptions<Arguments, Data> = [
  activity: Activity<Arguments, Data>,
  args: Arguments,
  options?: {
    onClose?: () => void
  },
]

type OpenActivityCallback = <Arguments, Data>(
  ...options: OpenActivityOptions<Arguments, Data>
) => void

const ActivityContext = createContext<{
  openActivity: OpenActivityCallback
} | null>(null)

export const ActivityProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [onCloseCallback, setOnCloseCallback] = useState<(() => void) | null>()
  const [activityContent, setActivityContent] = useState<ReactElement | null>(
    null
  )

  const resetActivity = () => {
    setActivityContent(null)
    setDialogOpen(false)
    onCloseCallback?.()
  }

  const openActivity = async <Arguments, Data>(
    ...[activity, args, options]: OpenActivityOptions<Arguments, Data>
  ) => {
    const onClose = options?.onClose ?? (() => {})
    const Component = activity.component
    setDialogOpen(true)
    setOnCloseCallback(onClose)

    try {
      setActivityContent(<DialogContent>Loading...</DialogContent>)
      const data = await activity.loader(args)
      setActivityContent(
        <>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{activity.title(data)}</DialogTitle>
            </DialogHeader>
            <Component data={data} />
          </DialogContent>
        </>
      )
    } catch {
      setActivityContent(<DialogContent>Error loading activity</DialogContent>)
    }
  }

  return (
    <ActivityContext.Provider
      value={{
        openActivity,
      }}
    >
      {children}

      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => !open && resetActivity()}
      >
        {activityContent}
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
