type Result<Data> = {
  data: Data
  error: unknown
}

export type Activity<Arguments, Data> = {
  component: React.FC<{ data: Data }>
  arguments: Arguments
  loader: (T) => Promise<Result<Data>>
}
