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

export const ActivityProvider: React.FC<{
  children: ReactElement
  activity?: RenderedActivity | null
  setActivity?: (activity: RenderedActivity) => void
}> = ({
  children,
  activity: overridenActivity,
  setActivity: overridenSetActivity,
}) => {
  const [activity, setActivity] = useState<RenderedActivity | null>(null)

  const currentActivity = overridenActivity || activity

  const openActivity: OpenActivityCallback = async (
    activity,
    data,
    options
  ) => {
    const renderedActivity = renderActivity(activity, data, options)
    overridenSetActivity
      ? overridenSetActivity(renderedActivity)
      : setActivity(renderedActivity)
  }

  return (
    <ActivityContext.Provider
      value={{
        openActivity,
        currentActivity: currentActivity,
      }}
    >
      {children}
      <ActivityContainer
        activity={activity}
        onClose={() => setActivity(null)}
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
