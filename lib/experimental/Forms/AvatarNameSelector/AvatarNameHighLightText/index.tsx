export const HighlightText = ({
  text,
  search,
}: {
  text: string
  search: string
}) => {
  if (!search) return <span>{text}</span>

  const regex = new RegExp(`(${search})`, "gi")
  const parts = text.split(regex)

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <span
            key={index}
            className="truncate font-medium"
            style={{
              backgroundColor: "yellow",
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
