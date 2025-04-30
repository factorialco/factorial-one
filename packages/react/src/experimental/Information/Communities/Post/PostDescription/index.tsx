import { RichTextDisplay } from "@/experimental/RichText/RichTextDisplay"
import "./TextEditorTheme.css"

type HTMLString = string

export type PostDescriptionProps = {
  content: HTMLString
  collapsed?: boolean
}

const linkClickHandler = (e: Event) => {
  e.stopPropagation()
}

const PostDescription = ({ content, collapsed }: PostDescriptionProps) => {
  const className = "FactorialOneTextEditor"

  document.querySelectorAll(`.${className} a`).forEach((a) => {
    a.removeEventListener("click", linkClickHandler)
    a.addEventListener("click", linkClickHandler)
  })

  return (
    <RichTextDisplay
      content={content}
      collapsed={collapsed}
      className={className}
    />
  )
}

export { PostDescription }
