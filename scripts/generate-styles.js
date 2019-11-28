const path = require('path');
const fs = require('fs');
const colorMap = {
    "30m": '#000000',
    "31m": '#800000',
    "32m": '#008000',
    "33m": '#808000',
    "34m": '#000080',
    "35m": '#800080',
    "36m": '#008080',
    "37m": '#c0c0c0',
    "38m": '#808080'
}
let styles = Object.entries(colorMap).map(([colorCode, color]) => {
  return `
    .🌈-${colorCode} {
      color: ${color};
    }
  `
}).join('');
fs.writeFileSync(path.join(__dirname, '../css/styles.css'), styles, 'utf-8');
