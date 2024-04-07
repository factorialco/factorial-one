import { zodResolver } from "@hookform/resolvers/zod"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/foundations/button"
import { Form } from "@/foundations/form"
import { Input } from "@/foundations/input"

import { DatePicker } from "./DatePicker"
import { Field } from "./Field"

interface Props {
  onSubmit: (data: z.infer<typeof formSchema>) => void
}

const meta: Meta<Props> = {
  args: {
    onSubmit: fn(),
  },
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  acceptTerms: z.boolean(),
  startDate: z.date(),
})

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: fn(),
  },
  render: ({ onSubmit }) => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        acceptTerms: false,
      },
    })

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => onSubmit(values))}
          className="space-y-8"
        >
          <Field
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <DatePicker {...field} value={field.value} />
            )}
          />

          <Field
            control={form.control}
            name="username"
            render={({ field }) => <Input placeholder="shadcn" {...field} />}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  },
}
