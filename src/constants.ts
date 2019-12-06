export const toDelete = [
  "\\[2K", // clear line
  "\\[1A", // Move cursor up 1 line   ([2B move up 2 lines)
];
type strFunc = () => string;
type RegStringPair = [RegExp, string | strFunc];
const cssClassMap = {38: "🌈-fg-", 48: "🌈-bg-"};
export const regexReplacementFunctionPairs: RegStringPair[] = [
  [/\[(2k|1a)/g, ""],
  [/((\[39m)|(\[0m))/g, "</span>"],
  [/\[(38|48);5;(\d{1,3})(;(38|48);5;(\d{1,3}))?m/g, (match, p1, p2, p3, p4, p5) => {
    return `<span class="${cssClassMap[p1] + p2}${p4 ? " " + cssClassMap[p4] + p5 : ""}">`;
  }],
  [/(\[)(\d{1,3})(;(\d{1,3}))?m/g, (match, p1, p2, p3, p4, p5) => {
    return `<span class="🌈-${p2}m${p4 ? " 🌈-${p4}m" : ""}">`;
  }],
  [/\[(38|48);2;(\d{1,3});(\d{1,3});(\d{1,3})(;(38|48);2;(\d{1,3});(\d{1,3});(\d{1,3}))?m/g,
    (match, layer1, r1, g1, b1, unused, layer2, r2, g2, b2) => {
    let style = `${layer1 === "38" ? "" : "background-"}color: rgb(${r1},${g1},${b1});`;
    if (layer2) {
      style +=  `${layer2 === "38" ? "" : "background-"}color: rgb(${r2},${g2},${b2});`;
    }
    return `<span style="${style}">`;
  }],
];
