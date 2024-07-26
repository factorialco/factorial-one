import type { Meta, StoryObj } from "@storybook/react"

import { Form, FormActions } from "."
import { FormFields } from "../FormFields"
import { buildFormSchema, stringField, useFormSchema } from "../lib/useForm"

const meta = {
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

const schema = buildFormSchema({
  username: stringField().min(2).max(10),
  fullName: stringField().min(6).max(50),
  email: stringField().email(),
  password: stringField().min(8).max(50),
})

export const Default: Story = {
  render() {
    const { form, control } = useFormSchema(
      schema,
      {
        defaultValues: {
          username: "",
          fullName: "",
          email: "",
        },
      },
      (data) => {
        alert(`Form has been submitted: ${JSON.stringify(data)}`)
      }
    )

    return (
      <Form {...form}>
        <FormFields.Input
          label="Username"
          description="Write your username"
          placeholder="A username must be all letters"
          control={control}
          name="username"
        />
        <FormFields.Input
          label="Full name"
          description="Write your full name"
          placeholder="Write whatever you want"
          control={control}
          name="fullName"
        />
        <FormFields.Input
          label="Email"
          description="Write your email"
          placeholder="bob@foo.bar"
          control={control}
          type="email"
          name="email"
        />
        <FormFields.Input
          label="Password"
          description="Write your password"
          control={control}
          type="password"
          name="password"
        />
        <FormActions submitLabel="Create" />
      </Form>
    )
  },
}
