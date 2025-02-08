import React from "react"

interface FeatureCardProps {
  icon: React.ElementType
  title: string
  description: string
  href: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-solid border-f1-border bg-f1-background shadow transition-all hover:border-f1-border-hover hover:shadow-md dark:border-f1-border-secondary dark:hover:border-f1-border">
      <a href={href} className="block h-full p-6 no-underline">
        <div className="mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-f1-background-secondary dark:bg-f1-background-secondary">
            <Icon className="h-6 w-6 text-f1-icon dark:text-f1-foreground-inverse" />
          </div>
        </div>
        <h4 className="mb-2 text-xl font-semibold text-f1-foreground dark:text-f1-foreground-inverse">
          {title}
        </h4>
        <p className="text-f1-foreground-secondary">{description}</p>
      </a>
    </div>
  )
}
