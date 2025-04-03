/**
 * Custom Babel plugin to transform className props to StyleSheet objects
 * based on NativeWind's approach
 */
module.exports = function (babel) {
  const { types: t } = babel;

  return {
    name: "transform-tailwind-classes",
    visitor: {
      JSXAttribute(path) {
        if (path.node.name.name === "className") {
          // Get the className value
          const valuePath = path.get("value");
          let classNames = [];

          // Handle different types of className values
          if (valuePath.isStringLiteral()) {
            classNames = valuePath.node.value.trim().split(/\s+/);
          } else if (valuePath.isJSXExpressionContainer()) {
            const expression = valuePath.get("expression");

            // Handle string literals in expressions
            if (expression.isStringLiteral()) {
              classNames = expression.node.value.trim().split(/\s+/);
            }
            // For other expression types, we'll implement a runtime transformation
          }

          // Create a unique style identifier name
          const styleVarName = path.scope.generateUidIdentifier("styles");

          // Create a StyleSheet.create call with styles parsed from classNames
          const styleProperties = [];
          classNames.forEach((className) => {
            // Convert Tailwind class name to React Native style property
            const style = convertTailwindToRNStyle(className);
            if (style) {
              Object.entries(style).forEach(([key, value]) => {
                styleProperties.push(
                  t.objectProperty(
                    t.identifier(key),
                    typeof value === "number"
                      ? t.numericLiteral(value)
                      : t.stringLiteral(value.toString()),
                  ),
                );
              });
            }
          });

          // Create the StyleSheet.create call
          const styleSheetCreate = t.callExpression(
            t.memberExpression(
              t.identifier("StyleSheet"),
              t.identifier("create"),
            ),
            [
              t.objectExpression([
                t.objectProperty(
                  t.identifier("styles"),
                  t.objectExpression(styleProperties),
                ),
              ]),
            ],
          );

          // Add the StyleSheet import if it doesn't exist already
          const program = path.findParent((p) => p.isProgram());
          const reactNativeImport = program.node.body.find(
            (node) =>
              t.isImportDeclaration(node) &&
              node.source.value === "react-native",
          );

          if (reactNativeImport) {
            if (
              !reactNativeImport.specifiers.some(
                (specifier) =>
                  t.isImportSpecifier(specifier) &&
                  specifier.imported.name === "StyleSheet",
              )
            ) {
              reactNativeImport.specifiers.push(
                t.importSpecifier(
                  t.identifier("StyleSheet"),
                  t.identifier("StyleSheet"),
                ),
              );
            }
          }

          // Replace className attribute with style attribute
          path.replaceWith(
            t.jsxAttribute(
              t.jsxIdentifier("style"),
              t.jsxExpressionContainer(
                t.memberExpression(styleVarName, t.identifier("styles")),
              ),
            ),
          );

          // Add StyleSheet declaration in the scope
          const functionParent = path.getFunctionParent();
          if (functionParent) {
            functionParent.scope.push({
              id: styleVarName,
              init: styleSheetCreate,
              kind: "const",
            });
          }
        }
      },
    },
  };
};

/**
 * Convert a Tailwind class name to a React Native style object
 * This is a simplified version - a full implementation would need a more complete mapping
 */
function convertTailwindToRNStyle(className) {
  // Core mappings for common Tailwind classes
  const colorMatch = className.match(/^(bg|text|border)-([a-z]+)-(\d+)$/);
  if (colorMatch) {
    const [, type, colorName, shade] = colorMatch;
    const color = getColorFromTailwind(colorName, shade);

    switch (type) {
      case "bg":
        return { backgroundColor: color };
      case "text":
        return { color: color };
      case "border":
        return { borderColor: color };
    }
  }

  // Spacing (margin, padding)
  const spacingMatch = className.match(/^(m|p)([trblxy])?-(\d+)$/);
  if (spacingMatch) {
    const [, type, direction, size] = spacingMatch;
    const value = parseInt(size) * 4; // Tailwind's default spacing scale

    const property = type === "m" ? "margin" : "padding";

    switch (direction) {
      case "t":
        return { [`${property}Top`]: value };
      case "r":
        return { [`${property}Right`]: value };
      case "b":
        return { [`${property}Bottom`]: value };
      case "l":
        return { [`${property}Left`]: value };
      case "x":
        return {
          [`${property}Left`]: value,
          [`${property}Right`]: value,
        };
      case "y":
        return {
          [`${property}Top`]: value,
          [`${property}Bottom`]: value,
        };
      default:
        return { [property]: value };
    }
  }

  // Font weight
  if (className.startsWith("font-")) {
    const weightMatch = className.match(
      /^font-(thin|light|normal|medium|bold|extrabold|black)$/,
    );
    if (weightMatch) {
      const [, weight] = weightMatch;
      const weightMap = {
        thin: "100",
        light: "300",
        normal: "normal",
        medium: "500",
        bold: "bold",
        extrabold: "800",
        black: "900",
      };
      return { fontWeight: weightMap[weight] };
    }
  }

  // Font size
  const fontSizeMatch = className.match(/^text-(xs|sm|base|lg|xl|2xl|3xl)$/);
  if (fontSizeMatch) {
    const [, size] = fontSizeMatch;
    const sizeMap = {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 30,
    };
    return { fontSize: sizeMap[size] };
  }

  // Border radius
  const roundedMatch = className.match(/^rounded(-[a-z]+)?$/);
  if (roundedMatch) {
    if (className === "rounded") {
      return { borderRadius: 4 };
    }
    const [, size] = roundedMatch;
    if (size) {
      const sizeMap = {
        "-sm": 2,
        "-md": 6,
        "-lg": 8,
        "-xl": 12,
        "-full": 9999,
      };
      return { borderRadius: sizeMap[size] || 4 };
    }
  }

  // Flex
  if (className === "flex") {
    return { display: "flex" };
  }

  if (className === "flex-row") {
    return { flexDirection: "row" };
  }

  if (className === "flex-col") {
    return { flexDirection: "column" };
  }

  if (className.startsWith("items-")) {
    const align = className.replace("items-", "");
    const alignMap = {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      stretch: "stretch",
    };
    return { alignItems: alignMap[align] || align };
  }

  if (className.startsWith("justify-")) {
    const justify = className.replace("justify-", "");
    const justifyMap = {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      between: "space-between",
      around: "space-around",
      evenly: "space-evenly",
    };
    return { justifyContent: justifyMap[justify] || justify };
  }

  // Return null for unsupported classes
  return null;
}

/**
 * Get a color value from Tailwind color name and shade
 */
function getColorFromTailwind(colorName, shade) {
  // Simplified color palette based on Tailwind's default colors
  const colors = {
    gray: {
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    red: {
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
    },
    blue: {
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    green: {
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    yellow: {
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
    },
    rose: {
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
    },
    white: "#ffffff",
    black: "#000000",
  };

  if (colorName === "white" || colorName === "black") {
    return colors[colorName];
  }

  return colors[colorName]?.[shade] || "#000000";
}
