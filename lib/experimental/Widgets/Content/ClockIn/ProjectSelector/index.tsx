import { Icon } from "@/components/Utilities/Icon"
import IndentIcon from "@/icons/app/Indent"
import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import React, { useState } from "react"

interface Project {
  id: string
  name: string
  subProjects?: Project[]
}

interface ProjectSelectorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  projects: Project[]
  selectedProjectId?: string
  selectedSubProjectId?: string
  onProjectSelect: (projectId: string) => void
  onSubProjectSelect: (subProjectId?: string) => void
  children: React.ReactNode
}

function ProjectSelector({
  open,
  onOpenChange,
  projects,
  selectedProjectId,
  selectedSubProjectId,
  onProjectSelect,
  onSubProjectSelect,
  children,
}: ProjectSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("")

  console.log({ selectedProjectId, selectedSubProjectId })

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelect = (id: string) => {
    let project: Project | undefined
    let subproject: Project | undefined

    projects.some((p) => {
      const subprojectFound = p.subProjects?.find((sp) => sp.id === id)
      if (subprojectFound) {
        project = p
        subproject = subprojectFound
        return true
      }
    })
    project = subproject ? project : projects.find((p) => p.id === id)

    if (!project) return

    onProjectSelect(project.id)
    onSubProjectSelect(subproject?.id)

    onOpenChange(false)
  }

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        className="w-[280px] rounded-md border border-f1-border bg-f1-background p-0 py-2 shadow-lg"
        sideOffset={4}
      >
        <div className="max-h-[300px] overflow-y-auto">
          {filteredProjects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              onSelect={handleSelect}
              selectedSubProjectId={selectedSubProjectId}
              isSelected={
                selectedProjectId === project.id && !selectedSubProjectId
              }
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

const Separator = () => (
  <div className="my-2 h-[1px] w-full bg-f1-border-secondary" />
)

interface ProjectItemProps {
  project: Project
  onSelect: (id: string) => void
  isSelected: boolean
  selectedSubProjectId?: string
  isSubProject?: boolean
}

function ProjectItem({
  project,
  onSelect,
  isSelected,
  selectedSubProjectId,
  isSubProject = false,
}: ProjectItemProps) {
  return (
    <>
      {project.subProjects?.length && <Separator />}
      <div
        className={cn(
          "mx-2 flex cursor-pointer items-center justify-between gap-2 rounded p-2 text-base font-medium",
          isSelected
            ? "bg-f1-background-selected"
            : "hover:bg-f1-background-hover"
        )}
        onClick={() => onSelect(project.id)}
      >
        {isSubProject && <Icon icon={IndentIcon} />}
        <div className="flex flex-1 items-center gap-2">
          <span className="flex-1">{project.name}</span>
          <div
            className={cn(
              "h-5 w-5 rounded-full",
              !isSelected && "border border-solid border-f1-border"
            )}
          >
            {isSelected && (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-f1-background-selected-bold">
                <div className="h-2 w-2 rounded-full bg-f1-icon-inverse" />
              </div>
            )}
          </div>
        </div>
      </div>
      {project.subProjects?.map((subProject, i) => (
        <React.Fragment key={subProject.id}>
          <ProjectItem
            project={subProject}
            onSelect={onSelect}
            isSelected={selectedSubProjectId === subProject.id}
            isSubProject
          />
          {i === (project.subProjects?.length ?? 0) - 1 && <Separator />}
        </React.Fragment>
      ))}
    </>
  )
}

export default ProjectSelector
