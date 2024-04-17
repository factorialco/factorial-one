import { Meta } from "@storybook/react"
import { FC } from "react"
import Form from "./Form"
import DayPickerField from "./fields/DayPickerField"
import TextField from "./fields/TextField"

const meta: Meta = {
  tags: ["autodocs"],
}

export default meta

interface FormFields {
  name: string
  lastname: string
  date: Date
}

export const PageWithPage: FC = () => {
  const handleSubmit = ({ name, lastname, date }: FormFields) => {
    console.log(name, lastname, date)
  }

  return (
    <Form<FormFields>
      defaultValues={{ name: "", lastname: "" }}
      onSubmit={handleSubmit}
    >
      <TextField
        name="name"
        label="Name"
        placeholder="Type something"
        description="This will be your public name."
        min={2}
        message="Name must be at least 2 characters."
      />
      <TextField
        name="lastname"
        label="Lastname"
        placeholder="Type something"
        description="This will be your public lastname."
        min={4}
        message="Lastname must be at least 4 characters."
      />
      <DayPickerField
        name="date"
        label="Date"
        description="This will be your birth date"
      />
    </Form>
  )
}
