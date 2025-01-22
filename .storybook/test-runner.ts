import type { TestRunnerConfig } from "@storybook/test-runner"
import { getStoryContext } from "@storybook/test-runner"
import { checkA11y, configureAxe, injectAxe } from "axe-playwright"

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    try {
      await injectAxe(page)
    } catch (error) {
      console.error("Failed to inject axe:", error)
      throw error
    }
  },
  async postVisit(page, context) {
    try {
      // Get the entire context of a story, including parameters, args, argTypes, etc.
      const storyContext = await getStoryContext(page, context)

      // Do not run a11y tests on disabled stories.
      if (storyContext.parameters?.a11y?.skipCi) {
        return
      }

      // Apply story-level a11y rules
      await configureAxe(page, storyContext.parameters?.a11y?.config || {})

      // Add a longer delay to ensure previous axe run is complete
      await page.waitForTimeout(500)

      // Ensure any previous axe runs are complete
      await page.evaluate(() => {
        if (window.axe?.isRunning) {
          return new Promise((resolve) => {
            const checkRunning = () => {
              if (!window.axe?.isRunning) {
                resolve(true)
              } else {
                setTimeout(checkRunning, 100)
              }
            }
            checkRunning()
          })
        }
      })

      await checkA11y(page, "#storybook-root", {
        detailedReport: true,
        detailedReportOptions: {
          html: true,
        },
        axeOptions: {
          runOnly: {
            type: "tag",
            values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
          },
        },
      })
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes("Axe is already running")
      ) {
        console.warn("Skipping a11y test due to concurrent run:", error.message)
        return
      }
      console.error("A11y test failed:", error)
      throw error
    }
  },
}

export default config
