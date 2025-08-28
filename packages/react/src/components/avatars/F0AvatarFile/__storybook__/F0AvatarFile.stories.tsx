import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0AvatarFile, type F0AvatarFileProps } from "../F0AvatarFile"

const meta = {
  component: F0AvatarFile,
  title: "Avatars/AvatarFile",
  tags: ["experimental"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof F0AvatarFile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    file: new File([""], "document.pdf", { type: "application/pdf" }),
    size: "medium",
  },
}

export const AllFileTypes: Story = {
  args: {
    file: new File([""], "document.pdf", { type: "application/pdf" }),
    size: "medium",
  },
  render: (args: F0AvatarFileProps) => {
    const fileTypes = [
      { name: "document.pdf", type: "application/pdf" },
      { name: "image.jpg", type: "image/jpeg" },
      {
        name: "document.docx",
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      },
      {
        name: "spreadsheet.xlsx",
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
      {
        name: "presentation.pptx",
        type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      },
      { name: "text.txt", type: "text/plain" },
      { name: "video.mp4", type: "video/mp4" },
      { name: "audio.mp3", type: "audio/mpeg" },
      { name: "archive.zip", type: "application/zip" },
      { name: "data.csv", type: "csv" },
      { name: "webpage.html", type: "html" },
      { name: "readme.md", type: "markdown" },
      { name: "unknown.xyz", type: "undefined" },
    ]

    return (
      <div className="grid grid-cols-12 gap-4">
        {fileTypes.map((fileType, index) => (
          <F0AvatarFile
            key={index}
            file={new File([""], fileType.name, { type: fileType.type })}
            size={args.size}
          />
        ))}
      </div>
    )
  },
}
