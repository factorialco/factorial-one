import { createContext, ReactElement, useContext, useState } from "react"
import { ActivityContainer, RenderedActivity } from "./Activity"
import { ActivityDefinition, SerializableProps } from "./types"

export type OpenActivityCallback = <Data extends SerializableProps>(
  activity: ActivityDefinition<Data>,
  args: Data,
  options?: {
    onClose?: () => void
  }
) => void

const ActivitiesContext = createContext<{
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

export const ActivitiesProvider: React.FC<{
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
    <ActivitiesContext.Provider
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
    </ActivitiesContext.Provider>
  )
}

export const useActivities = () => {
  const activityContext = useContext(ActivitiesContext)

  if (!activityContext)
    throw new Error("useActivity must be used within an ActivityProvider")

  return activityContext
}
