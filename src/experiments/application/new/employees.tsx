import { useLayoutType } from "./layout-type"

import { cn } from "@/lib/utils"
import { useState } from "react"

import { Badge } from "@/shadcn/badge"

import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn/table"

export const Employees = [
  {
    firstName: "Arthur",
    lastName: "McCoy",
    avatar: 60,
    avatarFallback: "AM",
    job: "Sales Development Representative",
    status: "Active",
  },
  {
    firstName: "Cameron",
    lastName: "Warren",
    avatar: 32,
    avatarFallback: "CW",
    job: "Sales Operations Manager",
    status: "Active",
  },
  {
    firstName: "Chris",
    lastName: "Robinson",
    avatar: 12,
    avatarFallback: "CR",
    job: "Sales Director",
    status: "Active",
  },
  {
    firstName: "Courtney",
    lastName: "Lane",
    avatar: 9,
    avatarFallback: "CL",
    job: "Sales Development Representative",
    status: "Invited",
  },
  {
    firstName: "Dianne",
    lastName: "Edwards",
    avatar: 23,
    avatarFallback: "DE",
    job: "Account Executive",
    status: "Active",
  },
  {
    firstName: "Marjorie",
    lastName: "Black",
    avatar: 26,
    avatarFallback: "MB",
    job: "Key Account Manager",
    status: "Terminated",
  },
  {
    firstName: "Maxwell",
    lastName: "Fox",
    avatar: 53,
    avatarFallback: "MB",
    job: "Sales Operations Manager",
    status: "Active",
  },
  {
    firstName: "Phillip",
    lastName: "Hawkins",
    avatar: 52,
    avatarFallback: "MB",
    job: "Sales Development Representative",
    status: "Onboarding",
  },
]

export const PageEmployees: React.FC = () => {
  const { setLayoutType, setEmployeeId } = useLayoutType()
  const [activeEmployee, setActiveEmployee] = useState(-1)

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>First name</TableHead>
            <TableHead>Last name</TableHead>
            <TableHead>Job</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Employees.map((employee, index) => (
            <TableRow
              key={index}
              className={cn(
                "hover:cursor-pointer",
                activeEmployee === index ? "bg-accent" : ""
              )}
              onClick={() => {
                setLayoutType!("Split")
                setActiveEmployee(index)
                setEmployeeId?.(index)
              }}
            >
              <TableCell className="font-medium">
                <div className="flex flex-row items-center gap-3">
                  <Avatar size="small">
                    <AvatarImage
                      src={`https://i.pravatar.cc/150?img=${employee.avatar}`}
                    />
                    <AvatarFallback>{employee.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>{employee.firstName}</div>
                </div>
              </TableCell>
              <TableCell>{employee.lastName}</TableCell>
              <TableCell>{employee.job}</TableCell>
              <TableCell>
                <Badge>{employee.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
