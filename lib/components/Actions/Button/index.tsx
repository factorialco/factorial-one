import { ButtonProps, Button as ShadCNButton } from "@/shadcn/button"

type Props = Omit<ButtonProps, "style" | "className" | "children"> & {
  label: string
}

const Button: React.FC<Props> = ({ label, ...props }) => (
  <ShadCNButton {...props}>{label}</ShadCNButton>
)

export { Button }
