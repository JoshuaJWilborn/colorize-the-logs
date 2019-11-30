module.exports = {
  roots: ["./src", "./spec"],
  transform: { "^.+\\.tsx?$": "ts-jest" },
  globals: { "ts-jest": { diagnostics: false } },
  verbose: false,
  silent: false,
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
