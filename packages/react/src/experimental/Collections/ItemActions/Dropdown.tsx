import { Button } from "../../../components/Actions/Button"
import { Ellipsis } from "../../../icons/app"
import { Dropdown } from "../../Navigation/Dropdown"
import { ItemActionsDefinition, filterItemActions } from "../item-actions"
import { RecordType } from "../types"

export const ActionsDropdown = <
  Record extends RecordType,
  ItemActions extends ItemActionsDefinition<Record>,
>({
  item,
  actions,
}: {
  item: Record
  actions: ItemActions
}) => {
  if (!actions || actions.length === 0) return null

  const items = filterItemActions(actions, item)

  if (items.length === 0) {
    return null
  }

  return (
    <Dropdown items={items}>
      <Button variant="ghost" icon={Ellipsis} label="Actions" hideLabel />
    </Dropdown>
  )
}
