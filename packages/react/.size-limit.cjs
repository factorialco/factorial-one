module.exports = [
  {
    path: "dist/f0.js",
    name: "JS: Stable",
  },
  {
    path: "dist/experimental.js",
    name: "JS: Experimental",
  },
  {
    path: "dist/*.css",
    name: "CSS",
    modifyEsbuildConfig: (config) => ({
      ...config,
      external: ["*.woff"],
      treeShaking: false,
    }),
  },
]
