import { Icon } from "@/components/Utilities/Icon"
import { ChevronDown, ChevronUp } from "@/icons/app"
import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react"
import { useState } from "react"
import "./styles.css"

export const SummaryBlockView: React.FC<NodeViewProps> = ({ node }) => {
  const { summary, highlights, nextSteps } = node.attrs
  const [collapsedSections, setCollapsedSections] = useState({
    summary: false,
    highlights: false,
    nextSteps: false,
  })

  const toggleSection = (section: keyof typeof collapsedSections) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  // Prevent default but allow propagation for content clicks to enable text selection
  const handleContentClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <NodeViewWrapper
      className="summary-block user-select-text my-4 rounded-lg border border-f1-border bg-f1-background-secondary p-4"
      contentEditable={false}
      data-selectable="true"
      draggable={false}
    >
      <div className="summary-section mb-4">
        <h3
          className="mb-2 flex cursor-pointer items-center gap-1 text-lg font-medium"
          onClick={() => toggleSection("summary")}
        >
          Summary
          <span className="inline-flex items-center justify-center">
            <Icon
              icon={collapsedSections.summary ? ChevronDown : ChevronUp}
              size="sm"
            />
          </span>
        </h3>
        {!collapsedSections.summary && (
          <div
            className="user-select-text summary-content"
            onClick={handleContentClick}
            data-selectable="true"
          >
            <p>{summary}</p>
          </div>
        )}
      </div>

      {highlights && highlights.length > 0 && (
        <div className="highlights-section mb-4">
          <h3
            className="mb-2 flex cursor-pointer items-center gap-1 text-lg font-medium"
            onClick={() => toggleSection("highlights")}
          >
            Highlights
            <span className="inline-flex items-center justify-center">
              <Icon
                icon={collapsedSections.highlights ? ChevronDown : ChevronUp}
                size="sm"
              />
            </span>
          </h3>
          {!collapsedSections.highlights && (
            <div
              className="user-select-text highlights-content"
              onClick={handleContentClick}
              data-selectable="true"
            >
              <ul className="list-disc pl-5">
                {highlights.map((highlight: string, index: number) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {nextSteps && nextSteps.length > 0 && (
        <div className="next-steps-section">
          <h3
            className="mb-2 flex cursor-pointer items-center gap-1 text-lg font-medium"
            onClick={() => toggleSection("nextSteps")}
          >
            Next Steps
            <span className="inline-flex items-center justify-center">
              <Icon
                icon={collapsedSections.nextSteps ? ChevronDown : ChevronUp}
                size="sm"
              />
            </span>
          </h3>
          {!collapsedSections.nextSteps && (
            <div
              className="user-select-text next-steps-content"
              onClick={handleContentClick}
              data-selectable="true"
            >
              <ul className="list-disc pl-5">
                {nextSteps.map((step: string, index: number) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Empty NodeViewContent to satisfy Tiptap */}
      <NodeViewContent className="hidden" />
    </NodeViewWrapper>
  )
}
