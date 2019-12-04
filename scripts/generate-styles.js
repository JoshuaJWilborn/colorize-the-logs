const path = require("path");
const fs = require("fs");
const styleMap = {
  "1m": "font-weight: bold",
  
  "4m": "text-decoration: underline",
  "21m": "font-weight: normal",
  "30m": "color: #000000",
  "31m": "color: #800000",
  "32m": "color: #008000",
  "33m": "color: #808000",
  "34m": "color: #000080",
  "35m": "color: #800080",
  "36m": "color: #008080",
  "37m": "color: #c0c0c0",
  "40m": "backgound-color: #000000",
  "41m": "backgound-color: #800000",
  "42m": "backgound-color: #008000",
  "43m": "backgound-color: #808000",
  "44m": "backgound-color: #000080",
  "45m": "backgound-color: #800080",
  "46m": "backgound-color: #008080",
  "47m": "backgound-color: #c0c0c0",
  "48m": "backgound-color: #808080",
  
  "53m": "text-decoration: overline",
  "90m": "color: rgb(85,85,85)",
  "91m": "color: rgb(255,0,0)",
  "92m": "color: rgb(0,252,0)",
  "93m": "color: rgb(255,255,0)",
  "94m": "color: rgb(0,0,252)",
  "95m": "color: rgb(255,0,255)",
  "96m": "color: rgb(0,255,255)",
  "97m": "color: rgb(255,255,255)",
  "100m": "color: rgb(85,85,85)",
  "101m": "color: rgb(255,0,0)",
  "102m": "color: rgb(0,252,0)",
  "103m": "color: rgb(255,255,0)",
  "104m": "color: rgb(0,0,252)",
  "105m": "color: rgb(255,0,255)",
  "106m": "color: rgb(0,255,255)",
};
let styles = Object.entries(styleMap)
  .map(([styleCode, style]) => {
    return `
    .🌈-${styleCode} {
      ${style};
    }
  `;
  })
  .join("");
fs.writeFileSync(path.join(__dirname, '../css/styles.css'), styles, 'utf-8');
