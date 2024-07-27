import type { Meta, StoryObj } from "@storybook/react"

import { Textarea } from "@/ui/textarea"
import { Form, FormActions } from "."
import { Input } from "../Fields/Input"
import { Select } from "../Fields/Select"
import { FormField } from "../FormField"
import { buildFormSchema, stringField, useFormSchema } from "../lib/useForm"

const meta = {
  tags: ["autodocs"],
  parameters: {
    a11y: {
      skipCi: true,
    },
  },
  args: {},
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

const schema = buildFormSchema({
  username: stringField().min(2).max(10),
  fullName: stringField().min(6).max(50),
  email: stringField().email(),
  password: stringField().min(8).max(50),
  bio: stringField().max(500),
  tag: stringField(),
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

        <FormField
          label="Tag"
          description="Select a tag"
          control={control}
          name="tag"
        >
          {(field) => (
            <Select
              {...field}
              placeholder="Select something"
              options={[
                { label: "Foo", value: "foo" },
                { label: "Bar", value: "bar" },
              ]}
            />
          )}
        </FormField>

        <FormActions submitLabel="Create" />
      </Form>
    )
  },
}
