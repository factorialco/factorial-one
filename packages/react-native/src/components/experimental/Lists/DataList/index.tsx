import { ReactElement } from "react";

import { InternalActionType, ItemContainer } from "./ItemContainer";
import { cn } from "../../../../lib/utils";
import { IconType } from "../../../Icon";
import { PersonAvatar } from "../../../Avatars/PersonAvatar";
import { CompanyAvatar } from "../../../Avatars/CompanyAvatar";
import { TeamAvatar } from "../../../Avatars/TeamAvatar";
import { DotTag, DotTagProps } from "../../../Tags/DotTag";
import { View, Text } from "react-native";

export type DataListProps = {
  children: ReactElement<Items>[] | ReactElement<Items>;
  label?: string;
  isHorizontal?: boolean;
};

type Items =
  | typeof Item
  | typeof PersonItem
  | typeof CompanyItem
  | typeof TeamItem;

const _DataList = ({
  children,
  label,
  isHorizontal = false,
}: DataListProps) => {
  return (
    <View
      className={cn(
        isHorizontal
          ? "flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row"
          : "min-w-32 max-w-72",
      )}
    >
      {label && (
        <Text
          className={cn(
            "px-1.5 text-f1-foreground-secondary",
            isHorizontal ? "mt-1.5 w-44 xs:px-0" : "mb-0.5",
          )}
        >
          {label}
        </Text>
      )}
      <View className="flex flex-col justify-center gap-0.5">{children}</View>
    </View>
  );
};

export type ItemProps = {
  text: string;
  icon?: IconType;
  action?: ActionType;
};

export type ActionType = CopyActionType | GenericActionType;

export type CopyActionType = {
  type: "copy";
  text?: string;
};

export type GenericActionType = {
  type: "generic";
  handlePress: () => void;
};

const Item = ({ text, icon, action }: ItemProps) => {
  return (
    <ItemContainer
      text={text}
      leftIcon={icon}
      action={getInternalAction(action, text)}
    />
  );
};

type URL = string;

type EmployeeItemProps = {
  firstName: string;
  lastName: string;
  avatarUrl?: URL;
  action?: ActionType;
};

const PersonItem = ({
  action,
  avatarUrl,
  firstName,
  lastName,
}: EmployeeItemProps) => {
  const fullName = `${firstName} ${lastName}`;
  return (
    <ItemContainer
      leftIcon={() => (
        <PersonAvatar
          size="xsmall"
          src={avatarUrl}
          firstName={firstName}
          lastName={lastName}
        />
      )}
      text={fullName}
      action={getInternalAction(action, fullName)}
    />
  );
};

type CompanyItemProps = {
  name: string;
  avatarUrl?: URL;
  action?: ActionType;
};

const CompanyItem = ({ avatarUrl, name, action }: CompanyItemProps) => {
  return (
    <ItemContainer
      leftIcon={() => (
        <CompanyAvatar name={name} size="xsmall" src={avatarUrl} />
      )}
      text={name}
      action={getInternalAction(action, name)}
    />
  );
};

type TeamItemProps = {
  name: string;
  action?: ActionType;
};

const TeamItem = ({ action, name }: TeamItemProps) => {
  return (
    <ItemContainer
      leftIcon={() => <TeamAvatar name={name} size="xsmall" />}
      text={name}
      action={getInternalAction(action, name)}
    />
  );
};

type DotTagItemProps = DotTagProps;

const DotTagItem = ({ ...props }: DotTagItemProps) => {
  return (
    <View className="flex items-start pt-1">
      <DotTag {...props} />
    </View>
  );
};

/**
 * convert simplified action type received from user to internal action format
 * @param action ActionType
 * @param defaultCopyText what to use if copy text is not present
 */
const getInternalAction = (
  action: ActionType | undefined,
  defaultCopyText: string,
): InternalActionType | undefined => {
  if (action && action.type === "copy") {
    return { type: "copy", text: action.text ?? defaultCopyText };
  }

  return action;
};

export const DataList = Object.assign(_DataList, {
  Item,
  CompanyItem,
  PersonItem,
  TeamItem,
  DotTagItem,
});
