window.__colorizeTheLogs = {};
// Control characters
window.__colorizeTheLogs.toDelete = ['·\\[2K', '·\\[1A'];
window.__colorizeTheLogs.resetChar = '·\\[39m';
window.__colorizeTheLogs.query = /(·\[)(\d{1,2}m)(.*?)((\·\[39m)|(\·\[0m))/g;

