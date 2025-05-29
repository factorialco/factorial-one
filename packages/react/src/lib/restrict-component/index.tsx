import { FC, useMemo } from "react"

type RestrictComponentProps = {
  identifier: string
  allowedRoutes?: string[]
  disallowedRoutes?: string[]
  children: React.ReactNode
}

export const RestrictComponent: FC<RestrictComponentProps> = ({
  identifier,
  allowedRoutes,
  disallowedRoutes,
  children,
}) => {
  const pathname = window.location.pathname

  const isAllowed = useMemo(() => {
    if (allowedRoutes && allowedRoutes.length > 0) {
      return allowedRoutes.includes(pathname)
    }

    if (disallowedRoutes && disallowedRoutes.length > 0) {
      return !disallowedRoutes.includes(pathname)
    }

    return true
  }, [pathname, allowedRoutes, disallowedRoutes])

  const errorMessage = useMemo(() => {
    let message = `The component ${identifier} is not allowed to be rendered in the current route.`

    if (allowedRoutes && allowedRoutes.length > 0) {
      message += ` Allowed routes: ${allowedRoutes.join(", ")}`
    }

    if (disallowedRoutes && disallowedRoutes.length > 0) {
      message += ` Disallowed routes: ${disallowedRoutes.join(", ")}`
    }

    return message
  }, [identifier, allowedRoutes, disallowedRoutes])

  if (!isAllowed) {
    console.error(errorMessage)
    return null
  }

  return children
}
