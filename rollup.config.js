const rollupTypescript = require("rollup-plugin-typescript");
const rollupCommonjs = require("rollup-plugin-commonjs");
const nodeResolve = require("rollup-plugin-node-resolve");
export default [
  {
    input: "src/bundle.ts",
    output: { file: "dist/bundle.js", format: "iife" },
    plugins: [
      rollupTypescript(),
      nodeResolve({browser: true}),
      rollupCommonjs()
    ]
  },
  {
    input: "src/background.ts",
    output: { file: "dist/background.js", format: "iife" },
    plugins: [
      rollupTypescript(),
      nodeResolve({browser: true}),
      rollupCommonjs()
    ]
  }
];
