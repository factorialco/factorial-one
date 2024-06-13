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
    id: activity.id,
    data: data,
    element: <Component {...data} />,
    onClose: options?.onClose ?? (() => {}),
  }
}

export const ActivityProvider: React.FC<{
  children: ReactElement
  activity?: RenderedActivity | null
  setActivity?: (activity: RenderedActivity | null) => void
}> = ({
  children,
  activity: overridenActivity,
  setActivity: overridenSetActivity,
}) => {
  const [activity, setActivity] = useState<RenderedActivity | null>(null)

  const currentActivity = overridenActivity || activity
  const activitySetter = overridenSetActivity || setActivity

  const openActivity: OpenActivityCallback = async (
    activity,
    data,
    options
  ) => {
    const renderedActivity = renderActivity(activity, data, options)

    activitySetter(renderedActivity)
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
        activity={currentActivity}
        onClose={() => activitySetter(null)}
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
