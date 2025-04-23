import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories containing the generated icon files
const iconDirs = [
  path.resolve(__dirname, "../src/icons/app"),
  path.resolve(__dirname, "../src/icons/modules"),
];

// Function to process a single file
function processIconFile(filePath) {
  console.log(`Processing: ${filePath}`);

  try {
    // Read file content
    let content = fs.readFileSync(filePath, "utf8");

    // 1. Remove xmlns="http://www.w3.org/2000/svg"
    content = content.replace(
      /xmlns="http:\/\/www\.w3\.org\/2000\/svg"\s*/g,
      "",
    );

    // 2. Transform ref={ref} to ref={ref as LegacyRef<Svg>}
    if (!content.includes("ref={ref as LegacyRef<Svg>}")) {
      content = content.replace(/ref={ref}/g, "ref={ref as LegacyRef<Svg>}");
    }

    // 3. Check if LegacyRef is specifically in the React import line
    const reactImportMatch = content.match(
      /import\s+{([^}]*)}\s+from\s+["']react["'];/,
    );
    if (reactImportMatch) {
      const importItems = reactImportMatch[1]
        .split(",")
        .map((item) => item.trim());

      // Only add LegacyRef if it's not already in the React imports
      if (!importItems.includes("LegacyRef")) {
        // Add LegacyRef to the existing React import
        content = content.replace(
          /import\s+{([^}]*)}\s+from\s+["']react["'];/,
          'import { LegacyRef, $1 } from "react";',
        );
      }
    } else {
      // If no React import with curly braces exists, add it after other imports
      if (!content.includes("LegacyRef")) {
        const lastImportIndex = content.lastIndexOf("import");
        if (lastImportIndex >= 0) {
          const importEndIndex = content.indexOf(";", lastImportIndex) + 1;
          content =
            content.substring(0, importEndIndex) +
            '\nimport { LegacyRef } from "react";' +
            content.substring(importEndIndex);
        } else {
          // No imports found, add at the beginning
          content = `import { LegacyRef } from "react";\n${content}`;
        }
      }
    }

    // 4. Format the content for better readability
    content = formatTsxContent(content);

    // Write modified content back to file
    fs.writeFileSync(filePath, content, "utf8");
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

// Format the TSX content to make it more readable
function formatTsxContent(content) {
  // If the file has a one-line component definition, format it to multi-line
  const svgComponentMatch = content.match(
    /(const\s+\w+\s+=\s+\(props:\s+\w+,\s+ref:\s+\w+<\w+>\)\s+=>\s+)<Svg([^;]+);/,
  );

  if (svgComponentMatch) {
    // Format the SVG component
    const formattedContent = content.replace(
      /(const\s+\w+\s+=\s+\(props:\s+\w+,\s+ref:\s+\w+<\w+>\)\s+=>\s+)<Svg([^;]+);/,
      `$1(\n  <Svg$2\n);`,
    );

    return formattedContent;
  }

  return content;
}

// Process all icon files
function processAllIconFiles() {
  let totalProcessed = 0;

  for (const dir of iconDirs) {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        if (file.endsWith(".tsx")) {
          const filePath = path.join(dir, file);
          processIconFile(filePath);
          totalProcessed++;
        }
      }
    }
  }

  console.log(`Processed ${totalProcessed} icon files`);
}

// Execute the function
try {
  processAllIconFiles();
} catch (err) {
  console.error("Error processing icon files:", err);
  process.exit(1);
}
