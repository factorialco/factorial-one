import type { Meta, StoryObj } from "@storybook/react"
import { FileAvatar } from "."

const meta = {
  component: FileAvatar,
  title: "Rich text/FileAvatar",
  tags: ["experimental"],
} satisfies Meta<typeof FileAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const PDF: Story = {
  args: {
    file: new File([""], "document.pdf", { type: "application/pdf" }),
  },
}

export const Image: Story = {
  args: {
    file: new File([""], "photo.png", { type: "image/png" }),
  },
}

export const Word: Story = {
  args: {
    file: new File([""], "document.docx", {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    }),
  },
}

export const Excel: Story = {
  args: {
    file: new File([""], "spreadsheet.xlsx", {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }),
  },
}

export const PowerPoint: Story = {
  args: {
    file: new File([""], "presentation.pptx", {
      type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    }),
  },
}

export const Text: Story = {
  args: {
    file: new File([""], "notes.txt", { type: "text/plain" }),
  },
}

export const Video: Story = {
  args: {
    file: new File([""], "video.mp4", { type: "video/mp4" }),
  },
}

export const Audio: Story = {
  args: {
    file: new File([""], "song.mp3", { type: "audio/mpeg" }),
  },
}

export const Archive: Story = {
  args: {
    file: new File([""], "files.zip", { type: "application/zip" }),
  },
}

export const CSV: Story = {
  args: {
    file: new File([""], "data.csv", { type: "csv" }),
  },
}

export const HTML: Story = {
  args: {
    file: new File([""], "page.html", { type: "html" }),
  },
}

export const Markdown: Story = {
  args: {
    file: new File([""], "readme.md", { type: "markdown" }),
  },
}

export const Unknown: Story = {
  args: {
    file: new File([""], "unknown.xyz", { type: "application/octet-stream" }),
  },
}
