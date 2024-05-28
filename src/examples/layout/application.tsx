import { Folder, Folders } from "lucide-react"
import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components"
import { AutoGrid, Stack, StackRow } from "@/primitives"
import { ScrollArea } from "@/ui/scrollarea"
import { AppLayout } from "../../app-layout"

const Layout: React.FC = () => {
  return (
    <AppLayout>
      <ScrollArea>
        <Stack gap="lg" className="h-full p-4 md:p-12">
          <StackRow>
            <Stack gap="sm">
              <StackRow>
                <Folders size="28" className="text-primary-foreground" />
              </StackRow>
              <StackRow>
                <Stack gap={null}>
                  <h1 className="text-2xl font-semibold">Personal folders</h1>
                  <span className="text-secondary-foreground">
                    Organize your personal documents into folders.
                  </span>
                </Stack>
              </StackRow>
            </Stack>
          </StackRow>
          <StackRow>
            <AutoGrid tileSize={"lg"}>
              {[...Array(6)].map((_, i) => (
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
          </StackRow>
        </Stack>
      </ScrollArea>
    </AppLayout>
  )
}

export default Layout
