import tippy, { Instance } from "tippy.js"

import { MentionedUser } from "@/experimental/RichText/RichTextEditor"
import {
  MentionList,
  MentionListComponent,
} from "@/experimental/RichText/RichTextEditor/MentionList"

interface MentionNodeAttrs {
  id: string
  label: string
  image_url?: string
  href?: string
}

function Suggestion(
  mentionSuggestions: MentionedUser[],
  setMentionSuggestions: (suggestions: MentionedUser[]) => void,
  onMentionQueryStringChanged?: (
    query: string
  ) => Promise<MentionedUser[]> | undefined,
  users?: MentionedUser[]
) {
  return {
    char: "@",
    minLength: 0,
    items: async ({ query }: { query: string }) => {
      if (onMentionQueryStringChanged) {
        const promise = onMentionQueryStringChanged(query)
        if (promise) {
          try {
            const suggestions = await promise
            setMentionSuggestions(suggestions)
            return suggestions
          } catch (error) {
            return []
          }
        }
        return mentionSuggestions
      } else if (users) {
        const normalizedQuery = query.toLowerCase().trim()
        if (!normalizedQuery) {
          const results = users.slice(0, 5)
          setMentionSuggestions(results)
          return results
        }
        const exactMatches = users.filter(
          (user) => user.label.toLowerCase() === normalizedQuery
        )
        const startsWithMatches = users.filter(
          (user) =>
            user.label.toLowerCase().startsWith(normalizedQuery) &&
            !exactMatches.some((match) => match.id === user.id)
        )
        const containsMatches = users.filter(
          (user) =>
            user.label.toLowerCase().includes(normalizedQuery) &&
            !exactMatches.some((match) => match.id === user.id) &&
            !startsWithMatches.some((match) => match.id === user.id)
        )
        const combinedResults = [
          ...exactMatches,
          ...startsWithMatches,
          ...containsMatches,
        ].slice(0, 5)
        setMentionSuggestions(combinedResults)
        return combinedResults
      }
      return []
    },
    render: () => {
      let component: MentionList | null = null
      let popup: Instance | undefined = undefined
      return {
        onStart: (props: {
          items: MentionedUser[]
          command: (attrs: MentionNodeAttrs) => void
          clientRect?: (() => DOMRect | null) | null
        }) => {
          const commandFn = (item: MentionedUser) => {
            props.command({
              id: String(item.id),
              label: item.label,
              image_url: item.image_url,
              href: item.href,
            })
          }
          component = new MentionList({
            items: props.items,
            command: commandFn,
            component: MentionListComponent,
          })

          // Create a safe reference rect function that never returns null
          const safeGetRect = () => {
            if (props.clientRect) {
              const rect = props.clientRect()
              if (rect) return rect
            }
            return document.body.getBoundingClientRect()
          }

          popup = tippy(document.body, {
            getReferenceClientRect: safeGetRect,
            appendTo: () => document.fullscreenElement || document.body,
            content: component.element,
            showOnCreate: true,
            interactive: true,
            trigger: "manual",
            placement: "bottom-start",
          })
        },
        onUpdate: (props: {
          items: MentionedUser[]
          clientRect?: (() => DOMRect | null) | null
        }) => {
          if (!component) return
          component.updateProps({
            items: props.items,
          })

          // Create a safe reference rect function that never returns null
          const safeGetRect = () => {
            if (props.clientRect) {
              const rect = props.clientRect()
              if (rect) return rect
            }
            return document.body.getBoundingClientRect()
          }

          popup?.setProps({
            getReferenceClientRect: safeGetRect,
          })
        },
        onKeyDown: (props: { event: KeyboardEvent }) => {
          if (!component) return false
          if (props.event.key === "Escape") {
            popup?.hide()
            return true
          }
          return component.onKeyDown(props)
        },
        onExit() {
          popup?.destroy()
          component?.destroy()
        },
      }
    },
  }
}

export { Suggestion }
