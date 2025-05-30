import Link from "@tiptap/extension-link"

export const LinkExtension = Link.configure({
  openOnClick: false,
  HTMLAttributes: {
    rel: "noopener noreferrer",
    target: "_blank",
  },
})
