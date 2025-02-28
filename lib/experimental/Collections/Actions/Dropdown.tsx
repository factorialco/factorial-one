import { Button } from "@/components/Actions/Button"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { Ellipsis } from "@/icons/app"
import { ActionsDefinition, filterActions } from "../actions"
import { RecordType } from "../types"

export const ActionsDropdown = <
  Record extends RecordType,
  Actions extends ActionsDefinition<Record>,
>({
  item,
  actions,
}: {
  item: Record
  actions: Actions
}) => {
  if (!actions || actions.length === 0) return null

  return (
    <Dropdown items={filterActions(actions, item)}>
      <Button variant="ghost" icon={Ellipsis} label="Actions" hideLabel />
    </Dropdown>
  )
}
