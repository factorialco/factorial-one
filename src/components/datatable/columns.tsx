"use client";
import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/foundations/button";
import { Checkbox } from "@/foundations/checkbox";
import { Document } from ".";


export const columns: ColumnDef<Document>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all" />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row" />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "filename",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Filename
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("filename")}</div>,
  },
  {
    accessorKey: "employee",
    header: "Employee",
    cell: ({ row }) => <div className="capitalize">{row.getValue("employee")}</div>,
  },
  {
    accessorKey: "creationDate",
    header: "Creation Date",
    cell: ({ row }) => <div>{row.getValue("creationDate")}</div>,
  },
  {
    accessorKey: "signatureStatus",
    header: "Signature Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("signatureStatus")}</div>
    ),
  },
  {
    accessorKey: "isVisible",
    header: "Is Visible",
    cell: ({ row }) => <div>{row.getValue("isVisible") ? "Yes" : "No"}</div>,
  },
];
