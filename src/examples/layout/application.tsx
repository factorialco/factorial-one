import { Folder, Folders } from "lucide-react"
import React from "react"

import { CardContent, CardHeader, CardList, CardTitle } from "@/components"
import { Stack } from "@/primitives"
import { ScrollArea } from "@/ui/scrollarea"
import { AppLayout } from "../../app-layout"

const Layout: React.FC = () => {
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
          <CardList elements={[...Array(6)].map((_e, i) => ({ id: i }))}>
            {({ id }) => (
              <>
                <CardHeader>
                  <Folder
                    size="16"
                    className="mb-1 text-secondary-foreground"
                  />
                  <CardTitle>Folder {id + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  Summary of the contents of the folder.
                </CardContent>
              </>
            )}
          </CardList>
        </Stack>
      </ScrollArea>
    </AppLayout>
  )
}

export default Layout
