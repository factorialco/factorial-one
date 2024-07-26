import type { Meta, StoryObj } from "@storybook/react"

import { Form, FormActions } from "."
import { InputFormField } from "../FormFields"
import { buildFormSchema, stringField, useFormSchema } from "../lib/useForm"

const meta = {
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

const schema = buildFormSchema({
  username: stringField().min(3).max(10),
  fullName: stringField().min(3).max(50),
})

export const Default: Story = {
  render(props) {
    const { form, onSubmit } = useFormSchema(
      schema,
      {
        defaultValues: {
          username: "",
          fullName: "",
        },
      },
      (data) => {
        console.log(data)
      }
    )

    return (
      <Form {...{ ...props, ...form }}>
        <form onSubmit={onSubmit} className="flex flex-col gap-8">
          <InputFormField
            label="Username"
            description="Write your username"
            placeholder="A username must be all letters"
            control={form.control}
            name="username"
          />
          <InputFormField
            label="Full name"
            description="Write your full name"
            placeholder="Write whatever you want"
            control={form.control}
            name="fullName"
          />
          <FormActions />
        </form>
      </Form>
    )
  },
}
