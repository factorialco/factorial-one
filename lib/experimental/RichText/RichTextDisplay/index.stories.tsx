import type { Meta, StoryObj } from "@storybook/react"
import { RichTextDisplay } from "."

const meta = {
  component: RichTextDisplay,
  title: "Rich text/RichTextDisplay",
} satisfies Meta<typeof RichTextDisplay>

export default meta
type Story = StoryObj<typeof meta>

const htmlContent = `
<p><a href=\"https://www.google.com\" class=\"mention\" data-id=\"3\" rel=\"noopener noreferrer\"
        target=\"_blank\">@Xavier Val Parejo</a> and <a href=\"https://www.google.com\" class=\"mention\" data-id=\"2\"
        rel=\"noopener noreferrer\" target=\"_blank\">@Jacob Bamio Cordero</a> are trying to get fit so...</p>
<p></p>
<p>🌍 <strong>How to Register to Gympass?</strong></p>
<p>You have to fill <a target=\"_blank\" rel=\"noopener noreferrer\"
        href=\"https://airtable.com/shrLwQFTMz19qcOp4\"><strong>THIS FORM</strong></a>!</p>
<p>Once you filled the form, <strong>what now?</strong></p>
<ul>
    <li>
        <p>Wait for the invitation email, which will come by the end of the month.</p>
    </li>
    <li>
        <p><strong>Create a free account through their website.</strong> Click on “register” and introduce the company
            you are working (Factorial) in the menu they show. After that, select the method of registration.</p>
    </li>
    <li>
        <p>Activate your plan and discover all the different activities and places you can go for free!</p>
    </li>
    <li>
        <p>Know that you can also access to free services and apps through the app.</p>
    </li>
</ul>
<hr>
<pre><code>Good luck guys </code></pre>`

export const Default: Story = {
  tags: ["experimental"],
  args: {
    content: htmlContent,
  },
}
