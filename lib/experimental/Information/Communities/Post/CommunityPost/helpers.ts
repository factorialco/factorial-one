const videoExt = ["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]

export const isVideo = (path: string | undefined | null): boolean => {
  if (path) {
    if (path?.indexOf("//s3.") >= 0) {
      return path?.indexOf("response-content-type=video") >= 0
    } else {
      const list = path?.split(".")
      return videoExt.indexOf(list[list?.length - 1] || "") >= 0
    }
  }
  return false
}
