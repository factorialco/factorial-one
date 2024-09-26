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
    <div className="rounded-lg border border-solid border-f1-border bg-white shadow transition-all hover:border-f1-border-hover hover:shadow-md dark:border-f1-border/10 dark:hover:border-f1-border/20">
      <a href={href} className="block h-full p-6 no-underline">
        <div className="mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-f1-background-secondary dark:bg-f1-background-secondary/10">
            <Icon className="h-6 w-6 text-f1-icon dark:text-f1-foreground-inverse/80" />
          </div>
        </div>
        <p className="mb-2 text-xl font-semibold text-f1-foreground dark:text-f1-foreground-inverse">
          {title}
        </p>
        <p className="text-f1-foreground-secondary">{description}</p>
      </a>
    </div>
  )
}
