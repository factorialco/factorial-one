import "@/experimental/RichText/RichTextEditor/index.css"

const RichTextDisplay = ({ content }: { content: string }) => {
  return (
    <div
      className="ProseMirror"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export { RichTextDisplay }
