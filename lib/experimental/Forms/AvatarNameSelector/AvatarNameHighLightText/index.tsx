import { cn } from "@/lib/utils"

export const HighlightText = ({
  text,
  search,
  semiBold = false,
}: {
  text: string
  search: string
  semiBold?: boolean
}) => {
  if (!search)
    return (
      <span className={cn("line-clamp-1", semiBold ? "font-semibold" : "")}>
        {text}
      </span>
    )

  const regex = new RegExp(`(${search})`, "gi")
  const parts = text.split(regex)

  return (
    <span className={cn("line-clamp-1", semiBold ? "font-semibold" : "")}>
      {parts.map((part, index) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <span
            key={index}
            className="truncate font-medium"
            style={{
              fontWeight: "bold",
            }}
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  )
}
