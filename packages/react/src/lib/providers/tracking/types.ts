export type EventScalar = string | number | boolean | undefined | null

type TrackingParams = Record<string, EventScalar | Array<EventScalar>>

export type TrackingFunction = (
  eventName: string,
  params: TrackingParams
) => Promise<boolean>
