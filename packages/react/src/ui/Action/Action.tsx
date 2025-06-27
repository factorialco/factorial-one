import React, { ReactNode } from "react"

export interface ActionCommonProps {
  children: ReactNode

  prepend?: ReactNode
  append?: ReactNode
  prependOutside?: boolean
  appendOutside?: boolean

  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void

  disabled?: boolean
  //loading?: boolean

  className?: string
}

export interface LinkActionProps {
  href: string
  target?: "_blank" | "_self" | "_parent" | "_top"
}

export type ActionProps = ActionCommonProps & Partial<LinkActionProps>

export const Action = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ActionProps
>(
  (
    {
      children,
      prepend,
      append,
      prependOutside,
      appendOutside,
      onClick,
      onFocus,
      onBlur,
      disabled,
      className,
      href,
      target,
    },
    ref
  ) => {
    const isLink = !!href

    const innerContent = (
      <>
        {prepend && !prependOutside && prepend}
        {children}
        {append && !appendOutside && append}
      </>
    )

    const mainElement = isLink ? (
      disabled ? (
        <span
          ref={ref as React.Ref<HTMLAnchorElement>}
          aria-disabled={true}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          className={className}
        >
          {innerContent}
        </span>
      ) : (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={className}
        >
          {innerContent}
        </a>
      )
    ) : (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        className={className}
      >
        {innerContent}
      </button>
    )

    if (prependOutside || appendOutside) {
      return (
        <div className="flex items-center">
          {prependOutside && prepend}
          {mainElement}
          {appendOutside && append}
        </div>
      )
    }

    return mainElement
  }
)
