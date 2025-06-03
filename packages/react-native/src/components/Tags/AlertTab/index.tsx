import { BaseTag } from "../BaseTag";
import { cn } from "../../../lib/utils";
import { useTextFormatEnforcer } from "../../../lib/text";
import { Icon, IconType } from "../../Icon";
import { AlertCircle, InfoCircle, Warning } from "../../../icons/app";
import { IconColorName } from "../../../lib/colors";

type Level = "info" | "warning" | "critical";

type Props<Text extends string = string> = {
  text: Text extends "" ? never : Text;
  level: Level;
};

const iconMap: Record<Level, IconType> = {
  info: InfoCircle,
  warning: Warning,
  critical: AlertCircle,
};

export const AlertTag = ({ text, level }: Props) => {
  useTextFormatEnforcer(text, { disallowEmpty: true });

  return (
    <BaseTag
      classNameText={cn(
        {
          info: "text-f1-foreground-info",
          warning: "text-f1-foreground-warning",
          critical: "text-f1-foreground-critical",
        }[level],
      )}
      classNameContainer={cn(
        "pl-0.5",
        {
          info: "bg-f1-background-info text-f1-foreground-info",
          warning: "bg-f1-background-warning text-f1-foreground-warning",
          critical: "bg-f1-background-critical text-f1-foreground-critical",
        }[level],
      )}
      left={
        <Icon
          icon={iconMap[level]}
          color={
            cn(
              {
                info: "text-f1-foreground-info",
                warning: "text-f1-foreground-warning",
                critical: "text-f1-foreground-critical",
              }[level],
            ) as IconColorName
          }
          size="md"
          aria-hidden
        />
      }
      text={text}
    />
  );
};

AlertTag.displayName = "AlertTag";
