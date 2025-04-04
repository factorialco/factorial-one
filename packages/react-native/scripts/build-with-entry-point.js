#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Path to package.json
const packageJsonPath = path.resolve(__dirname, "../package.json");

// Backup the original content
let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const originalMainValue = packageJson.main;

try {
  console.log(`Original entry point: "${originalMainValue}"`);
  console.log('Temporarily changing entry point to "dist/src/index.js"...');

  // Update the main entry point
  packageJson.main = "dist/src/index.js";
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n",
  );

  // Run the build command - use pnpm to run both commands
  console.log("Running build command...");

  // Run build:tailwind first
  execSync("pnpm run build:tailwind", {
    stdio: "inherit",
    cwd: path.resolve(__dirname, ".."),
  });

  // Then run TypeScript compiler through pnpm
  execSync("pnpm exec tsc -p tsconfig.build.json", {
    stdio: "inherit",
    cwd: path.resolve(__dirname, ".."),
  });

  console.log("Build completed successfully!");
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
} finally {
  // Restore the original entry point
  console.log(
    `Restoring entry point to original value: "${originalMainValue}"`,
  );
  packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  packageJson.main = originalMainValue;
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n",
  );
  console.log("Entry point restored successfully!");
}
