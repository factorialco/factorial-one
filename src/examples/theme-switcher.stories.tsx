import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@/lib/theme-provider"
import { ThemeSwitcher } from "@/foundations/theme-switcher";

const meta: Meta = {
  component: ThemeSwitcher,
  title: "Examples / Theme Switcher",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    render: () => {
        return (
            <ThemeProvider>
                <div className="bg-background max-w-96 p-10">
                    <div className="flex flex-col gap-3 rounded-lg bg-card p-6 border">
                        <div className="flex gap-3 items-center">
                            <h1 className="text-xl font-medium">Theme Switcher example</h1>
                            <div className="flex-shrink-0">
                                <ThemeSwitcher />
                            </div>
                        </div>
                        <p>This is a basic demo of a theme toggle using Tailwind and shadcn. The user selection is stored using localStorage.</p>
                    </div>
                </div>
            </ThemeProvider>
        )
    }
};