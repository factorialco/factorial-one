import { Ellipsis } from "@/icons/app"
import { Button } from "../../../components/Actions/Button"
import { Dropdown } from "../../Navigation/Dropdown"
import {
  PrimaryActionsDefinition,
  SecondaryActionsDefinition,
} from "../actions"
type CollectionActionProps = {
  primaryActions?: ReturnType<PrimaryActionsDefinition>
  secondaryActions?: ReturnType<SecondaryActionsDefinition>
}

export const CollectionActions = ({
  primaryActions,
  secondaryActions,
}: CollectionActionProps) => {
  const buttonActions = (primaryActions && [primaryActions]) || []
  const dropdownActions = secondaryActions || []

  return (
    <div className="flex flex-row-reverse gap-2">
      {buttonActions.map((action) => (
        <Button
          size="md"
          key={action.label}
          onClick={action.onClick}
          icon={action.icon}
          variant="default"
          label={action.label}
        />
      ))}

      {dropdownActions.length > 0 && (
        <Dropdown items={dropdownActions}>
          <Button variant="ghost" icon={Ellipsis} label="Actions" hideLabel />
        </Dropdown>
      )}
    </div>
  )
}
