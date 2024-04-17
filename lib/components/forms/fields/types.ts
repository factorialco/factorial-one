export interface FieldProps {
  name: string
  message?: string
  defaultValue?: string
  // This should be specific for each Field component. Here for now.
  min?: number
}
