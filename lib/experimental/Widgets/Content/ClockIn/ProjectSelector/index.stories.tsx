import BriefcaseIcon from "@/icons/app/Briefcase"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import Selector from "../ClockInControls/Selector"
import ProjectSelector from "./index"

const meta: Meta<typeof ProjectSelector> = {
  title: "Experimental/Widgets/ClockIn/ProjectSelector",
  component: ProjectSelector,
  decorators: [
    (Story) => (
      <div className="w-[340px] p-16">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProjectSelector>

const sampleProjects = [
  { id: "1", name: "American Eagle" },
  { id: "2", name: "Bershka" },
  {
    id: "4",
    name: "H&M",
    subProjects: [
      { id: "4", name: "Shops revamp" },
      { id: "5", name: "New website" },
    ],
  },
  { id: "6", name: "Stradivarius" },
  { id: "7", name: "Zara" },
]

export const Default: Story = {
  render: () => {
    const [selectedProjectId, setSelectedProjectId] = useState<
      string | undefined
    >("1")
    const [selectedSubProjectId, setSelectedSubProjectId] = useState<
      string | undefined
    >("5")

    return (
      <ProjectSelector
        open={true}
        onOpenChange={() => {}}
        projects={sampleProjects}
        selectedProjectId={selectedProjectId}
        selectedSubProjectId={selectedSubProjectId}
        onProjectSelect={setSelectedProjectId}
        onSubProjectSelect={setSelectedSubProjectId}
      >
        <div>
          <Selector
            text="Select project"
            placeholder="Select project"
            icon={BriefcaseIcon}
          />
        </div>
      </ProjectSelector>
    )
  },
}
