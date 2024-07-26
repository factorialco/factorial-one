import type { Meta, StoryObj } from "@storybook/react"

import { Form, FormActions, FormProvider } from "."
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
        alert(`Form has been submitted: ${JSON.stringify(data)}`)
      }
    )

    return (
      <FormProvider {...{ ...props, ...form }}>
        <Form onSubmit={onSubmit}>
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
        </Form>
      </FormProvider>
    )
  },
}
