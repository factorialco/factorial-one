import type { Meta, StoryObj } from "@storybook/react"

import { Textarea } from "@/ui/textarea"
import { Form, FormActions } from "."
import { Input } from "../Fields/Input"
import { FormField } from "../FormField"
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
  bio: stringField().max(500).optional(),
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
        <FormField
          label="Username"
          description="Write your username"
          control={control}
          name="username"
        >
          {(field) => (
            <Input placeholder="A username must be all letters" {...field} />
          )}
        </FormField>

        <FormField
          label="Full name"
          description="Write your full name"
          control={control}
          name="fullName"
        >
          {(field) => <Input {...field} />}
        </FormField>

        <FormField
          label="Email"
          description="Write your email"
          control={control}
          name="email"
        >
          {(field) => <Input type="email" {...field} />}
        </FormField>

        <FormField
          label="Password"
          description="Write your password"
          control={control}
          name="password"
        >
          {(field) => <Input type="password" {...field} />}
        </FormField>

        <FormField
          label="Biography"
          description="Write something about you"
          control={control}
          name="bio"
        >
          {(field) => <Textarea {...field} />}
        </FormField>

        <FormActions submitLabel="Create" />
      </Form>
    )
  },
}
