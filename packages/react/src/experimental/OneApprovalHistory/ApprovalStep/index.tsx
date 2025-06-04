import { AvatarList } from "@/experimental/Information/Avatars/AvatarList"
import { PersonAvatarProps } from "@/experimental/Information/Avatars/PersonAvatar"
import { StatusTag } from "@/experimental/Information/Tags/StatusTag"
import {
  Check as CheckIcon,
  Cross as CrossIcon,
  Question as QuestionIcon,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { FC, useMemo } from "react"

type Status = "waiting" | "pending" | "approved" | "rejected"

type Approver = {
  firstName: string
  lastName: string
  avatar?: string
  status: Status
}

export type ApprovalStepProps = {
  title: string
  approvalsRequired: number
  status: Status
  approvers: Approver[]
}

const statusTagVariants: Record<Status, "neutral" | "positive" | "critical"> = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical",
}

const getAvatarBadge = (status: Status): PersonAvatarProps["badge"] => {
  switch (status) {
    case "approved": {
      return {
        icon: CheckIcon,
        type: "positive",
        size: "sm",
      }
    }
    case "rejected": {
      return {
        icon: CrossIcon,
        type: "critical",
        size: "sm",
      }
    }
    default: {
      return {
        icon: QuestionIcon,
        type: "neutral",
        size: "sm",
      }
    }
  }
}

const ApprovalStep: FC<ApprovalStepProps> = ({
  title,
  approvalsRequired,
  status,
  approvers,
}) => {
  const translations = useI18n()

  const displayApprovalsRequired =
    approvalsRequired === 1
      ? translations.approvals.requiredNumbers.one
      : translations.approvals.requiredNumbers.other.replace(
          "{{count}}",
          approvalsRequired.toString()
        )

  const displayStatus = translations.approvals.statuses[status]

  const avatars = useMemo(
    () =>
      approvers
        .map((approver) => ({
          firstName: approver.firstName,
          lastName: approver.lastName,
          src: approver.avatar,
          badge: getAvatarBadge(approver.status),
          type: "person" as const,
        }))
        .sort((a, b) => {
          if (a.badge?.type === "positive" || a.badge?.type === "highlight")
            return -1
          if (b.badge?.type === "positive" || b.badge?.type === "highlight")
            return 1
          if (a.badge?.type === "critical") return -1
          if (b.badge?.type === "critical") return 1
          return 0
        }),
    [approvers]
  )

  return (
    <div className="flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3">
      <div className="flex flex-row items-start justify-between">
        <div>
          <p className="font-medium text-f1-foreground">{title}</p>
          <p className="text-f1-foreground-secondary">
            {displayApprovalsRequired}
          </p>
        </div>
        <StatusTag text={displayStatus} variant={statusTagVariants[status]} />
      </div>
      <div className="w-full">
        <AvatarList
          avatars={avatars}
          layout="fill"
          type="person"
          size="medium"
        />
      </div>
    </div>
  )
}

export default ApprovalStep

export type { Status }
