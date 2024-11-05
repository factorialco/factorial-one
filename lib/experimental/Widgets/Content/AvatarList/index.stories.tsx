import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { useEffect, useState } from "react"
import { AvatarListItem } from "./AvatarListItem"
import { AvatarList, AvatarListProps } from "./index"

const meta: Meta<AvatarListProps> = {
  component: AvatarList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[348px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<AvatarListProps>

export const Default: Story = {
  render: (props) => {
    const [maxElements, setMaxElements] = useState(props.maxItemsToShow ?? 5)
    useEffect(() => {
      setMaxElements(props.maxItemsToShow ?? 5)
    }, [props.maxItemsToShow])
    return (
      <AvatarList
        items={props.items}
        onClickItem={props.onClickItem}
        onShowMore={() => {
          setMaxElements((prev) => Math.min(prev + 5, 20))
          props.onShowMore?.()
        }}
        moreElementsLabel={props.moreElementsLabel}
        maxItemsToShow={maxElements}
        emptyMessage={props.emptyMessage}
        hideIcons={props.hideIcons}
      />
    )
  },
  args: {
    hideIcons: false,
    onClickItem: fn(),
    onShowMore: fn(),
    items: buildItems(20),
    maxItemsToShow: 5,
    moreElementsLabel: "elements",
  },
}

function buildItems(total: number): AvatarListItem[] {
  const EXAMPLES = [
    { id: 1, text: "Connect to Slack" },
    { id: 2, text: "Sync GitHub Repo" },
    { id: 3, text: "Write Release Notes" },
    { id: 4, text: "Plan Product Roadmap" },
    { id: 5, text: "Summarize Key Insights" },
    { id: 6, text: "Coordinate with Design Team" },
    { id: 7, text: "Draft User Manual" },
    { id: 8, text: "Evaluate Competitor Features" },
    { id: 9, text: "Discuss Closing Remarks" },
    { id: 10, text: "Organize Files on Drive" },
    { id: 11, text: "Update README File" },
    { id: 12, text: "Analyze User Feedback" },
    { id: 13, text: "Prepare Demo Presentation" },
    { id: 14, text: "Review Code Quality" },
    { id: 15, text: "Schedule Team Meeting" },
    { id: 16, text: "Run Performance Tests" },
    { id: 17, text: "Define Project Milestones" },
    { id: 18, text: "Research New Tools" },
    { id: 19, text: "Set Up Continuous Integration" },
    { id: 20, text: "Finalize Release Checklist" },
  ]
  return Array.from({ length: total }, (_, index) => ({
    id: EXAMPLES[index % 20].id + 1,
    src: "",
    title: EXAMPLES[index % 20].text,
    description: "Subtitle",
    value: "0,00 €",
    badgeValue: {
      type: index % 2 === 0 ? "positive" : "negative",
      value: generateRandomValue(index % 2 === 0 ? "positive" : "negative"),
    },
  }))
}

function generateRandomValue(sign: "positive" | "negative") {
  let percent
  if (sign === "positive") {
    percent = Math.floor(Math.random() * 121)
  } else {
    percent = -Math.floor(Math.random() * 121)
  }
  const euros = Math.random() * 4000 + 1000
  const formattedEuros = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(euros)
  return `${percent}% · ${formattedEuros}`
}

export const ExtremeValues: Story = {
  args: {
    hideIcons: false,
    onClickItem: fn(),
    onShowMore: fn(),
    items: [
      {
        id: 1,
        src: "https://github.com/Rogermax.png",
        title:
          "Title with a very long description to test the component’s limit",
        description:
          "This is a subtitle with additional details to see if it breaks in smaller containers",
        value: "12.345.678,90000000000 €",
        badgeValue: {
          type: "negative",
          value: "-125.35% · 123.456.789,01 €",
        },
      },
      {
        id: 2,
        title: "Title",
        value: "12.345.678,90000000000 €",
        badgeValue: {
          type: "positive",
          value: "125.35% · 123.456.789,01 €",
        },
      },
      {
        id: 3,
        src: "https://github.com/Rogermax.png",
        title:
          "Title with a very long description to test the component’s limit",
        description: "Subtitle",
        value: "12.345.678,90000000000 €",
      },
      {
        id: 4,
        title:
          "Title with a very long description to test the component’s limit",
        description:
          "This is a subtitle with additional details to see if it breaks in smaller containers",
        value: "",
        badgeValue: {
          type: "negative",
          value: "-125.35% · 123.456.789,01 €",
        },
      },
    ],
    maxItemsToShow: 5,
    moreElementsLabel: "elements",
  },
}
