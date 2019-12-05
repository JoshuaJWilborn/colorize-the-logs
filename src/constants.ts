export const toDelete = [
  "\\[2K", // clear line
  "\\[1A" // Move cursor up 1 line   ([2B move up 2 lines)
];
type RegStringPair = [RegExp, String | Function];
type Match = undefined | String;
export const regexReplacementFunctionPairs: RegStringPair[] = [
  [/\[(2k|1a)/g, ''],
  [/((\[39m)|(\[0m))/g, '</span>'],
  [/(\[)(\d{1,3})(;(\d{1,3}))?m/g, (match, p1, p2, p3, p4, p5) => {
    return `<span class="🌈-${p2}m${p4 ? ' 🌈-${p4}m':''}">`
  }]
] 
