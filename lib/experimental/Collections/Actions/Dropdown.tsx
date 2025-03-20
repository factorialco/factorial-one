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

  const items = filterActions(actions, item)

  if (items.length === 0) {
    return null
  }

  return (
    <Dropdown items={items}>
      <Button variant="ghost" icon={Ellipsis} label="Actions" hideLabel />
    </Dropdown>
  )
}
