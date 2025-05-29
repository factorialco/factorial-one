import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { RestrictComponent } from "."

const meta = {
  title: "Experimental/RestrictComponent",
  component: RestrictComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    pathname: {
      control: "text",
      description: "Current pathname to test the component with",
      defaultValue: "/dashboard",
    },
  },
  decorators: [
    (Story, context) => {
      const [pathname, setPathname] = useState(
        context.args.pathname || "/dashboard"
      )

      // Override window.location.pathname
      Object.defineProperty(window, "location", {
        value: { pathname },
        writable: true,
      })

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <label htmlFor="pathname">Current pathname:</label>
            <input
              id="pathname"
              type="text"
              value={pathname}
              onChange={(e) => setPathname(e.target.value)}
              style={{
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof RestrictComponent>

export default meta
type Story = StoryObj<typeof RestrictComponent>

const DemoComponent = () => (
  <div
    style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "4px" }}
  >
    This is a restricted component
  </div>
)

export const AllowedRoutes: Story = {
  args: {
    identifier: "demo-component",
    allowedRoutes: ["/dashboard", "/profile"],
    children: <DemoComponent />,
    pathname: "/dashboard",
  },
}

export const DisallowedRoutes: Story = {
  args: {
    identifier: "demo-component",
    disallowedRoutes: ["/login", "/signup"],
    children: <DemoComponent />,
    pathname: "/dashboard",
  },
}

export const AllowedAndDisallowedRoutes: Story = {
  args: {
    identifier: "demo-component",
    allowedRoutes: ["/dashboard", "/profile"],
    disallowedRoutes: ["/login", "/signup"],
    children: <DemoComponent />,
    pathname: "/dashboard",
  },
}
