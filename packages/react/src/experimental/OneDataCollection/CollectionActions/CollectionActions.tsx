import { Ellipsis } from "@/icons/app"
import { Button } from "../../../components/Actions/Button"
import { Dropdown } from "../../Navigation/Dropdown"
import {
  PrimaryActionsDefinition,
  SecondaryActionsItemDefinition,
} from "../actions"
type CollectionActionProps = {
  primaryActions?: ReturnType<PrimaryActionsDefinition>
  secondaryActions?: SecondaryActionsItemDefinition[]
  otherActions?: SecondaryActionsItemDefinition[]
}

export const CollectionActions = ({
  primaryActions,
  secondaryActions,
  otherActions,
}: CollectionActionProps) => {
  const primaryActionsButton = (primaryActions && [primaryActions]) || []
  const secondaryActionsButtons = (secondaryActions || []).filter(
    (action) => action.type !== "separator"
  )
  const dropdownActions = otherActions || []

  if (
    primaryActionsButton.length === 0 &&
    secondaryActionsButtons.length === 0 &&
    dropdownActions.length === 0
  )
    return null

  const align = primaryActionsButton.length > 0 ? "start" : "end"

  return (
    <div className="flex flex-row-reverse items-center gap-2">
      {primaryActionsButton.map((action) => (
        <Button
          size="md"
          key={action.label}
          onClick={action.onClick}
          icon={action.icon}
          variant="default"
          label={action.label}
        />
      ))}

      {secondaryActionsButtons?.map((action) => (
        <Button
          size="md"
          key={action.label}
          onClick={action.onClick}
          icon={action.icon}
          variant="outline"
          hideLabel={action.hideLabelWhenExpanded}
          label={action.label}
        />
      ))}

      {dropdownActions.length > 0 && (
        <Dropdown items={dropdownActions} align={align}>
          <Button variant="outline" icon={Ellipsis} label="Actions" hideLabel />
        </Dropdown>
      )}
    </div>
  )
}
