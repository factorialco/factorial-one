console.log("Loading SVGO config...")
module.exports = {
  multipass: false,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          mergePaths: false,
          convertPathData: false,
          convertTransform: false,
          collapseGroups: false,
          removeViewBox: false,
        },
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: ["stroke-width"],
      },
    },
    {
      // Custom plugin to add vector-effect to elements
      name: "addVectorEffect",
      type: "visitor",
      fn: () => {
        return {
          element: {
            enter: (node) => {
              if (
                [
                  "path",
                  "circle",
                  "rect",
                  "line",
                  "polyline",
                  "polygon",
                  "ellipse",
                ].includes(node.name)
              ) {
                node.attributes["vector-effect"] = "non-scaling-stroke"
              }
            },
          },
        }
      },
    },
  ],
}
