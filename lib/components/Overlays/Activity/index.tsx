import { createContext, ReactElement, useContext, useState } from "react"
import { ActivityContainer } from "./Renderer"
import {
  ActivityDefinition,
  RenderedActivity,
  SerializableProps,
} from "./types"

export type OpenActivityCallback = <Data extends SerializableProps>(
  activity: ActivityDefinition<Data>,
  args: Data,
  options?: {
    onClose?: () => void
  }
) => void

const ActivityContext = createContext<{
  openActivity: OpenActivityCallback
  currentActivity: RenderedActivity | null
} | null>(null)

const renderActivity = <Data extends SerializableProps>(
  activity: ActivityDefinition<Data>,
  data: Data,
  options: { onClose?: () => void } = {}
): RenderedActivity => {
  const Component = activity.component

  return {
    data: data,
    element: <Component {...data} />,
    onClose: options?.onClose ?? (() => {}),
  }
}

export const ActivityProvider: React.FC<{
  children: ReactElement
}> = ({ children }) => {
  const [activity, setActivity] = useState<RenderedActivity | null>(null)

  const openActivity: OpenActivityCallback = async (
    activity,
    data,
    options
  ) => {
    const renderedActivity = renderActivity(activity, data, options)

    setActivity(renderedActivity)
  }

  return (
    <ActivityContext.Provider
      value={{
        openActivity,
        currentActivity: activity,
      }}
    >
      {children}
      <ActivityContainer
        activity={activity}
        onClose={() => {
          activity?.onClose?.()
          setActivity(null)
        }}
      />
    </ActivityContext.Provider>
  )
}

export const useActivity = () => {
  const activityContext = useContext(ActivityContext)

  if (!activityContext)
    throw new Error("useActivity must be used within an ActivityProvider")

  return activityContext
}

export { Activity } from "./Renderer"
export type * from "./types"
