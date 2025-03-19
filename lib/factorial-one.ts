export * from "./components/exports"
export * from "./lib/exports"

// Export icons as namespaces to avoid naming conflicts
import * as AnimatedIcons from "./icons/animated"
import * as AppIcons from "./icons/app"
import * as ModuleIcons from "./icons/modules"

export { AnimatedIcons, AppIcons, ModuleIcons }
