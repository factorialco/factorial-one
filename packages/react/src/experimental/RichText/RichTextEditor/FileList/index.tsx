import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { FileItem } from "../../FileItem"
import {
  getAcceptFileTypeString,
  handleAddFiles,
  handleRemoveFile,
} from "../utils/files"
import { filesConfig } from "../utils/types"

interface FileListProps {
  filesConfig: filesConfig | undefined
  files: File[]
  disabled: boolean
  setFiles: React.Dispatch<React.SetStateAction<File[]>>
  fileInputRef: React.RefObject<HTMLInputElement>
}

const FileList = ({
  filesConfig,
  files,
  setFiles,
  disabled,
  fileInputRef,
}: FileListProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const dragCounter = useRef(0)

  if (!filesConfig) return null

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (selectedFiles && selectedFiles.length > 0) {
      let fileArray = Array.from(selectedFiles)
      if (filesConfig?.maxFileSize) {
        fileArray = fileArray.filter(
          (file) => file.size <= filesConfig.maxFileSize!
        )
      }
      handleAddFiles(fileArray, files, filesConfig, setFiles)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  useEffect(() => {
    const editorContainer = document
    if (!editorContainer) return

    const handleDragEnter = (e: Event) => {
      e.preventDefault()
      if (disabled || !filesConfig) return

      dragCounter.current++
      setIsDragging(true)
    }

    const handleDragOver = (e: Event) => {
      e.preventDefault()
      if (disabled || !filesConfig) return
      setIsDragging(true)
    }

    const handleDragLeave = (e: Event) => {
      e.preventDefault()
      dragCounter.current--

      if (dragCounter.current === 0) {
        setIsDragging(false)
      }
    }

    const handleDrop = (e: Event) => {
      e.preventDefault()
      if (disabled || !filesConfig) return

      dragCounter.current = 0
      setIsDragging(false)

      // Cast event to DragEvent to access dataTransfer
      const dragEvent = e as DragEvent
      const droppedFiles = dragEvent.dataTransfer?.files

      if (droppedFiles && droppedFiles.length > 0) {
        let fileArray = Array.from(droppedFiles)
        if (filesConfig?.maxFileSize) {
          fileArray = fileArray.filter(
            (file) => file.size <= filesConfig.maxFileSize!
          )
        }
        handleAddFiles(fileArray, files, filesConfig, setFiles)
      }
    }

    editorContainer.addEventListener("dragenter", handleDragEnter)
    editorContainer.addEventListener("dragover", handleDragOver)
    editorContainer.addEventListener("dragleave", handleDragLeave)
    editorContainer.addEventListener("drop", handleDrop)

    return () => {
      editorContainer.removeEventListener("dragenter", handleDragEnter)
      editorContainer.removeEventListener("dragover", handleDragOver)
      editorContainer.removeEventListener("dragleave", handleDragLeave)
      editorContainer.removeEventListener("drop", handleDrop)
    }
  }, [disabled, files, filesConfig, setFiles])

  return (
    <>
      <input
        id="rich-text-editor-upload-button"
        type="file"
        multiple={filesConfig.multipleFiles}
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
        accept={getAcceptFileTypeString(filesConfig)}
        aria-label="Upload file"
      />
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            key="filelist-accordion"
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="scrollbar-macos flex w-full items-end gap-2 overflow-x-auto pt-2">
              {files.map((file, index) => (
                <FileItem
                  key={`${file.name}-${index}`}
                  file={file}
                  actions={[
                    {
                      label: "Delete",
                      onClick: () =>
                        handleRemoveFile(index, files, filesConfig, setFiles),
                    },
                  ]}
                  disabled={disabled}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isDragging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ pointerEvents: "none" }}
          >
            <div
              className="absolute inset-0 bg-f1-background/50"
              style={{ backdropFilter: "blur(4px)" }}
            />
            <div
              className="border-f1-primary relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed bg-f1-background/90 p-10"
              style={{ maxWidth: "90%", maxHeight: "90%" }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                className="text-f1-primary mb-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { FileList }
