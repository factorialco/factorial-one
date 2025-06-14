import type { Meta, StoryObj } from "@storybook/react-vite"
import { RichTextDisplay } from "."

const meta = {
  component: RichTextDisplay,
  title: "Rich text/RichTextDisplay",
} satisfies Meta<typeof RichTextDisplay>

export default meta
type Story = StoryObj<typeof meta>

const htmlContent = `<p>
  <a href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg" class="mention" data-id="3" rel="noopener noreferrer" target="_blank">
    @Xavier Val Parejo
  </a>
  and
  <a href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg" class="mention" data-id="2" rel="noopener noreferrer" target="_blank">
    @Jacob Bamio Cordero
  </a>
  are trying to get fit so...
</p>
<p></p>
<p>
  🌍 <strong>How to Register to Gympass?</strong>
</p>
<p>
  You have to fill
  <a href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg" target="_blank" rel="noopener noreferrer">
    <strong>THIS FORM</strong>
  </a>!
</p>
<p>
  Once you filled the form, <strong>what now?</strong>
</p>
<ul>
  <li>
    <p>Wait for the invitation email, which will come by the end of the month.</p>
  </li>
  <li>
    <p>
      <em>This is some magic created by our AI</em>
    </p>
  </li>
  <li>
    <p>
      <u>More magic</u>
    </p>
  </li>
  <li>
    <p>
      <s>More magic 2.0</s>
    </p>
  </li>
  <li>
    <p>
      <mark>
        <a href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg" class="mention" data-id="1" rel="noopener noreferrer" target="_blank">
          @Raúl Sigüenza Sánchez
        </a>
      </mark>
    </p>
  </li>
</ul>
<hr>
<pre>
  <code>Good luck guys </code>
</pre>
`

export const Default: Story = {
  tags: ["experimental"],
  args: {
    content: htmlContent,
  },
}
