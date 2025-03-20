import { Button, Icon } from "@factorialco/factorial-one"
import { Cross, File } from "@factorialco/factorial-one/icons/app"

import Text from "design-system/Text"
import Box from "design-system/layouts/Box"

interface FileListProps {
  files: File[]
  onRemoveFile: (index: number) => void
}

interface FileItemProps {
  file: File
  onRemoveFile: (index: number) => void
  index: number
}

const FileItem = ({ file, onRemoveFile, index }: FileItemProps) => {
  return (
    <Box
      flexDirection="row"
      gap="s12"
      background="grey200"
      paddingY="s2"
      paddingLeft="s2"
      paddingRight="s4"
      borderRadius={{
        all: "abs012",
      }}
      alignItems="center"
      width="s200"
    >
      <Box
        width="s32"
        height="s32"
        background="white"
        borderRadius={{ all: "abs008" }}
        flexNoShrink
        alignItems="center"
        justifyContent="center"
      >
        <Icon icon={File} />
      </Box>
      <Box flexGrow>
        <Text
          weight="medium"
          size="100"
          ellipsis
          color="grey1000"
          title={file.name}
        >
          {file.name}
        </Text>
      </Box>
      <Box flexNoShrink>
        <Button
          variant="ghost"
          icon={Cross}
          hideLabel
          round
          label="Delete"
          onClick={() => onRemoveFile(index)}
          type="button"
          size="sm"
        />
      </Box>
    </Box>
  )
}

const FileList = ({ files, onRemoveFile }: FileListProps) => {
  if (!files.length) return null

  return (
    <Box flexDirection="column" gap="s8" paddingY="s8">
      {files.map((file, index) => (
        <FileItem
          key={`${file.name}-${index}`}
          file={file}
          onRemoveFile={onRemoveFile}
          index={index}
        />
      ))}
    </Box>
  )
}

export { FileList }
