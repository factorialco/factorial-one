import Breadcrumbs, { type BreadcrumbItemType } from "../Breadcrumbs"

type HeaderProps = {
  moduleName: string
  moduleHref: string
  tree?: BreadcrumbItemType[]
}

export default function Header({
  moduleName,
  moduleHref,
  tree = [],
}: HeaderProps) {
  const breadcrumbsTree: BreadcrumbItemType[] = moduleName
    ? [{ label: moduleName, href: moduleHref }, ...tree]
    : tree

  return (
    <header className="bg-white/80 flex h-16 items-center justify-between border-b border-b-f1-border p-4 backdrop-blur-lg">
      <div className="flex items-center">
        {breadcrumbsTree.length > 1 ? (
          <Breadcrumbs tree={breadcrumbsTree} />
        ) : (
          <h1 className="text-xl font-semibold">{moduleName}</h1>
        )}
      </div>
    </header>
  )
}
