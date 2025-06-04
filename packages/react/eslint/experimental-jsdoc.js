/**
 * @fileoverview ESLint plugin to warn about functions with experimental JSDoc comments
 * @author Factorial
 */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Global cache for experimental exports
let experimentalExportMap = null

function scanForExperimentalExports(rootDir) {
  const map = {}
  function walk(dir) {
    const files = fs.readdirSync(dir)
    for (const file of files) {
      const fullPath = path.join(dir, file)
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath)
      } else if (file.endsWith(".ts") || file.endsWith(".tsx")) {
        const content = fs.readFileSync(fullPath, "utf8")
        // Find exported functions with @experimental in JSDoc
        const regex = /\/\*\*([\s\S]*?)\*\/\s*export function (\w+)/g
        let match
        while ((match = regex.exec(content))) {
          if (match[1].includes("@experimental")) {
            map[match[2]] = fullPath
          }
        }
      }
    }
  }
  walk(rootDir)
  return map
}

const experimentalImportRule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Warn about importing experimental functions",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null,
    schema: [],
    messages: {
      experimentalImport:
        "🚧 Experimental import '{{name}}'. This component is marked as experimental and may change in future versions. Use with caution.",
    },
  },

  create(context) {
    // On first invocation, scan the codebase
    if (!experimentalExportMap) {
      const rootDir = path.resolve(__dirname, "../")
      experimentalExportMap = scanForExperimentalExports(path.join(rootDir))
    }

    return {
      ImportDeclaration(node) {
        node.specifiers.forEach((specifier) => {
          if (
            specifier.type === "ImportSpecifier" &&
            experimentalExportMap[specifier.imported?.name]
          ) {
            context.report({
              node: specifier,
              messageId: "experimentalImport",
              data: { name: specifier.imported.name },
            })
          }
        })
      },
    }
  },
}

const experimentalUsageRule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Warn about using experimental functions",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null,
    schema: [],
    messages: {
      experimentalUsage:
        "🚧 Experimental component '{{name}}'. This component is marked as experimental and may change in future versions. Use with caution.",
    },
  },

  create(context) {
    // On first invocation, scan the codebase
    if (!experimentalExportMap) {
      const rootDir = path.resolve(__dirname, "../")
      experimentalExportMap = scanForExperimentalExports(path.join(rootDir))
    }

    return {
      CallExpression(node) {
        if (
          node.callee.type === "Identifier" &&
          experimentalExportMap[node.callee.name]
        ) {
          context.report({
            node,
            messageId: "experimentalUsage",
            data: { name: node.callee.name },
          })
        }
      },
    }
  },
}

export default {
  rules: {
    "experimental-import": experimentalImportRule,
    "experimental-usage": experimentalUsageRule,
  },
}
