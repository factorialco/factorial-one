import type { Meta, StoryObj } from "@storybook/react"
import { RichTextDisplay } from "."

const meta = {
  component: RichTextDisplay,
  title: "Rich text/RichTextDisplay",
} satisfies Meta<typeof RichTextDisplay>

export default meta
type Story = StoryObj<typeof meta>

const htmlContent = `
<p><a target="_blank" rel="noopener noreferrer" class="mention" href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg"><strong>@Xavier Val Parejo </strong></a>and <a target="_blank" rel="noopener noreferrer" class="mention" href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg"><strong>@Jacob Bamio Cordero </strong></a>are trying to get fit so...</p><p></p><p>🌍 <strong>How to Register to Gympass?</strong></p><p>You have to fill <a target="_blank" rel="noopener noreferrer" href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg"><strong>THIS FORM </strong></a>!</p><p>Once you filled the form, <strong>what now?</strong></p><ul class="f1-bullet-list"><li><p>Wait for the invitation email, which will come by the end of the month.</p></li><li><p><em>This is some magic created by our AI</em></p></li><li><p><u>More magic</u></p><p></p></li></ul><ul class="f1-task-list" data-type="taskList"><li class="f1-task-item"><div class="flex items-start gap-2"><button type="button" role="checkbox" aria-checked="true" disabled="disabled" class="custom-checkbox custom-checkbox-checked" style="appearance: none; -webkit-appearance: none;"></button><div class="text-f1-foreground-secondary line-through content"><p>More magic 2.0</p></div></div></li><li class="f1-task-item"><div class="flex items-start gap-2"><button type="button" role="checkbox" aria-checked="false" disabled="disabled" class="custom-checkbox" style="appearance: none; -webkit-appearance: none;"></button><div class="content"><p><a target="_blank" rel="noopener noreferrer" class="mention" href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg"><strong><mark>Raúl Sigüenza Sánchez</mark></strong></a></p><p></p></div></div></li></ul><hr><pre><code>  Good luck guys 
</code></pre><p></p><img src="https://bmicalculator.mes.fm/img/memes/homer-after-one-day-at-the-gym.jpg" alt="Homer After One Day At the Gym | Memes | BMI Calculator">
`

export const Default: Story = {
  tags: ["experimental"],
  args: {
    content: htmlContent,
  },
}
