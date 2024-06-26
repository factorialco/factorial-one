import { Folder, Folders } from "lucide-react"
import React from "react"

import {
  AutoGrid,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Stack,
} from "@/main"
import { ScrollArea } from "@/ui/scrollarea"
import { AppLayout } from "../../app-layout"

export const Application: React.FC = () => {
  return (
    <AppLayout>
      <ScrollArea>
        <Stack gap="4" className="h-full p-4 md:p-12">
          <Stack gap="4">
            <Folders size="28" className="text-primary-foreground" />
            <Stack gap={null}>
              <h1 className="text-2xl font-semibold">Personal folders</h1>
              <span className="text-secondary-foreground">
                Organize your personal documents into folders.
              </span>
            </Stack>
          </Stack>
          <AutoGrid tileSize="md">
            {[...Array(6)].map((_e, i) => (
              <Card>
                <CardHeader>
                  <Folder
                    size="16"
                    className="mb-1 text-secondary-foreground"
                  />
                  <CardTitle>Folder {i + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  Summary of the contents of the folder.
                </CardContent>
              </Card>
            ))}
          </AutoGrid>
        </Stack>
      </ScrollArea>
    </AppLayout>
  )
}
