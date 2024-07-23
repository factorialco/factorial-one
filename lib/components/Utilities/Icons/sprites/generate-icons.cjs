// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const fs = require("fs")
// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const path = require("path")

// Function to convert dashed or spaced string to camelCase and append "Icon"
const toCamelCaseWithIcon = (str) => {
  return (
    str
      .split(/[-\s]/) // Split by dashes or whitespaces
      .map((word, index) => {
        if (index === 0) {
          return word
        }
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join("") + "Icon"
  )
}

// Function to convert dashed or spaced string to camelCase without appending "Icon"
const toCamelCase = (str) => {
  return str
    .split(/[-\s]/) // Split by dashes or whitespaces
    .map((word, index) => {
      if (index === 0) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join("")
}

// Base directory where your folders with icons are located
// eslint-disable-next-line no-undef
const baseDir = path.resolve(__dirname)

// Read the base directory
fs.readdir(baseDir, (err, folders) => {
  if (err) {
    console.error("Error reading base directory:", err)
    return
  }

  // Iterate over each folder
  folders.forEach((folder) => {
    const folderPath = path.join(baseDir, folder)

    // Check if the path is a directory
    if (fs.lstatSync(folderPath).isDirectory()) {
      fs.readdir(folderPath, (err, files) => {
        if (err) {
          console.error(`Error reading folder ${folder}:`, err)
          return
        }

        // Filter svg files and create imports and exports
        const imports = []
        const exports = []
        files
          .filter((file) => path.extname(file) === ".svg")
          .forEach((file) => {
            const iconName = path.basename(file, ".svg")
            const camelizedIconName = toCamelCaseWithIcon(iconName)
            const importName = camelizedIconName
            const exportName = lowerCaseFirstLetter(toCamelCase(iconName))
            imports.push(
              `import ${importName} from "./${folder}/${file}?react";`
            )
            exports.push(`  ${exportName}: ${importName},`)
          })

        // Create the content of the ts file
        const content = `
${imports.join("\n")}

export const ${folder} = {
${exports.join("\n")}
}

export type ${capitalizeFirstLetter(folder)} = keyof typeof ${folder};
`

        // Write the content to the ts file
        fs.writeFile(
          path.join(baseDir, `${folder}.ts`),
          content.trim(),
          (err) => {
            if (err) {
              console.error(`Error writing file for folder ${folder}:`, err)
            } else {
              console.log(`Successfully created ${folder}.ts`)
            }
          }
        )
      })
    }
  })
})

// Function to convert the first character of a string to lowercase
function lowerCaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

// Function to convert the first character of a string to uppercase
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
