import { createContext, ReactElement, useContext, useState } from "react"
import { ActivityContainer } from "./Renderer"
import {
  ActivityDefinition,
  RenderedActivity,
  SerializableProps,
} from "./types"
export { Activity } from "./Renderer"

type OpenActivityCallback = <Data extends SerializableProps>(
  ...options: [
    activity: ActivityDefinition<Data>,
    args: Data,
    options?: {
      onClose?: () => void
    },
  ]
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
    id: activity.id,
    data: data,
    element: <Component data={data} />,
    onClose: options?.onClose ?? (() => {}),
  }
}

export const ActivityProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [currentActivity, setCurrentActivity] =
    useState<RenderedActivity | null>(null)

  const openActivity: OpenActivityCallback = async (
    activity,
    data,
    options
  ) => {
    setCurrentActivity(renderActivity(activity, data, options))
  }

  return (
    <ActivityContext.Provider
      value={{
        openActivity,
        currentActivity,
      }}
    >
      {children}
      <ActivityContainer
        activity={currentActivity}
        onClose={() => setCurrentActivity(null)}
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
