import type { Meta, StoryObj } from "@storybook/react"

import { Textarea } from "@/ui/textarea"
import { Form, FormActions } from "."
import { Input } from "../Fields/Input"
import { Select } from "../Fields/Select"
import { FormField } from "../FormField"
import { buildFormSchema, stringField, useFormSchema } from "../lib/useForm"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

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

export const Default: Story = {
  render() {
    const schema = buildFormSchema({
      username: stringField()
        .min(2)
        .max(10)
        .refine((username) => username !== "admin", {
          message: "Username cannot be admin",
        }),
      fullName: stringField().min(6).max(50),
      email: stringField().email(),
      password: stringField().min(8).max(50),
      passwordConfirmation: stringField(),
      bio: stringField().max(500),
      tag: stringField(),
    }).refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords do not match",
      path: ["passwordConfirmation"],
    })

    const form = useFormSchema(
      schema,
      {
        defaultValues: {
          username: "",
          fullName: "",
          email: "",
        },
      },
      async (data) => {
        await sleep(2000)
        alert(`Form has been submitted: ${JSON.stringify(data)}`)

        return {
          success: true,
        }
      }
    )

    return (
      <Form {...form}>
        <FormField
          label="Username"
          description="Write your username"
          control={form.control}
          name="username"
        >
          {(field) => (
            <Input placeholder="A username must be all letters" {...field} />
          )}
        </FormField>

        <FormField
          label="Full name"
          description="Write your full name"
          control={form.control}
          name="fullName"
        >
          {(field) => <Input {...field} />}
        </FormField>

        <FormField
          label="Email"
          description="Write your email"
          control={form.control}
          name="email"
        >
          {(field) => <Input type="email" {...field} />}
        </FormField>

        <FormField
          label="Password"
          description="Write your password"
          control={form.control}
          name="password"
        >
          {(field) => <Input type="password" {...field} />}
        </FormField>

        <FormField
          label="Password Confirmation"
          description="Confirm your password"
          control={form.control}
          name="passwordConfirmation"
        >
          {(field) => <Input type="password" {...field} />}
        </FormField>

        <FormField
          label="Biography"
          description="Write something about you"
          control={form.control}
          name="bio"
        >
          {(field) => <Textarea {...field} />}
        </FormField>

        <FormField
          label="Tag"
          description="Select a tag"
          control={form.control}
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

        <FormActions submitLabel="Create" form={form} />
      </Form>
    )
  },
}

export const AsyncFieldValidation: Story = {
  render() {
    const schema = buildFormSchema({
      username: stringField().refine(
        async (username) => {
          await sleep(200)
          return username !== "taken"
        },
        { message: "already taken" }
      ),
    })

    const form = useFormSchema(schema, {}, async () => {
      await sleep(1000)
      alert("Form has been submitted")

      return {
        success: true,
      }
    })

    return (
      <Form {...form}>
        <FormField
          label="Username"
          description="Write your username"
          control={form.control}
          name="username"
        >
          {(field) => (
            <Input placeholder="Try 'taken' as a username" {...field} />
          )}
        </FormField>

        <FormActions form={form} submitLabel="Create" />
      </Form>
    )
  },
}

export const AsyncSubmit: Story = {
  render() {
    const schema = buildFormSchema({
      comment: stringField(),
    })

    const form = useFormSchema(schema, {}, async () => {
      await sleep(2000)

      return {
        success: false,
        rootMessage: "Server error",
        errors: {
          comment: "Couln't create comment",
        },
      }
    })

    return (
      <Form {...form}>
        <FormField
          label="Comment"
          description="Write your username"
          control={form.control}
          name="comment"
        >
          {(field) => <Textarea placeholder="Add your comment" {...field} />}
        </FormField>

        <FormActions form={form} submitLabel="Create" />
      </Form>
    )
  },
}
