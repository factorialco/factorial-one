const reported = new Map<string, StackTrace & { componentName: string }>()

type StackTrace = {
  fileName: string
  lineNumber: number | null
  columnNumber: number | null
}

const getStackTrace = (): StackTrace[] => {
  const stack = new Error().stack

  if (!stack) {
    return []
  }

  const lines = stack.split("\n")

  const stackTrace = lines
    .map(function (line) {
      if (line.match(/^\s*[-]{4,}$/)) {
        return {
          fileName: line,
          lineNumber: null,
          columnNumber: null,
        }
      }

      const regex =
        /(?:\()?(?:https?:\/\/[^\/]+)?(?<file>\/?[^:?\s\)]+)(?:\?[^\s:)]*)?:(?<line>\d+)(?::(?<pos>\d+))?(?:\))?/

      const stackLineMatch = line.match(regex)
      if (stackLineMatch) {
        return {
          fileName: stackLineMatch.groups?.file ?? "",
          lineNumber: stackLineMatch.groups?.line
            ? Number(stackLineMatch.groups.line)
            : null,
          columnNumber: stackLineMatch.groups?.pos
            ? Number(stackLineMatch.groups.pos)
            : null,
        }
      }

      return null
    })
    .filter((trace): trace is StackTrace => trace !== null)

  return stackTrace
}

const getReportId = (name: string, trace: StackTrace) => {
  return `${name}:${trace.fileName}:${trace.lineNumber}:${trace.columnNumber}`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const experimental = <T extends (...args: any[]) => any>(
  name: string,
  component: T
): T => {
  if (!import.meta.env.DEV) {
    return component
  }

  return ((...args: Parameters<T>): ReturnType<T> => {
    const lastTrace = getStackTrace().at(-1)
    if (lastTrace) {
      const reportId = getReportId(name, lastTrace)
      if (!reported.has(reportId)) {
        console.warn(
          `🚧 The \x1b[1m${name}\x1b[0m component is experimental. Use it at your own risk.`,
          `${lastTrace.fileName}:${lastTrace.lineNumber}:${lastTrace.columnNumber}`
        )
        reported.set(reportId, {
          fileName: lastTrace.fileName,
          lineNumber: lastTrace.lineNumber,
          columnNumber: lastTrace.columnNumber,
          componentName: name,
        })
      }
    }
    return component(...args)
  }) as T
}
