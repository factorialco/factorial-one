const getFileTypeInfo = (file: File): { type: string; color: string } => {
  const defaultFile = {
    type: "FILE",
    color: "text-f1-foreground",
  }
  const pdf = {
    type: "PDF",
    color: "text-f1-foreground-accent",
  }

  const image = {
    type: "IMG",
    color: "text-f1-foreground-info",
  }

  const doc = {
    type: "DOC",
    color: "text-f1-foreground-info",
  }

  const excel = {
    type: "XLS",
    color: "text-f1-foreground-positive",
  }

  const ppt = {
    type: "PPT",
    color: "text-f1-foreground-warning",
  }

  const txt = {
    type: "TXT",
    color: "text-f1-foreground-secondary",
  }

  const mimeType = file.type.toLowerCase()
  if (mimeType.includes("pdf")) {
    return pdf
  } else if (mimeType.includes("image")) {
    return image
  } else if (mimeType.includes("word")) {
    return doc
  } else if (mimeType.includes("excel")) {
    return excel
  } else if (mimeType.includes("powerpoint")) {
    return ppt
  } else if (mimeType.includes("text") || mimeType.includes("plain")) {
    return txt
  } else {
    const ext = file.name.split(".").pop()?.toLowerCase()
    if (ext === "pdf") return pdf
    else if (ext === "jpg" || ext === "jpeg" || ext === "png" || ext === "gif")
      return image
    else if (ext === "doc" || ext === "docx") return doc
    else if (ext === "xls" || ext === "xlsx") return excel
    else if (ext === "ppt" || ext === "pptx") return ppt
    else if (ext === "txt") return txt
  }
  return defaultFile
}

export { getFileTypeInfo }
