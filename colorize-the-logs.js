const { colorMap, toDelete, resetChar } = window.__colorizeTheLogs;

function colorize(htmlString) {
  let str = htmlString;
  let changed = false;
  for (let query in colorMap) {
    let color = colorMap[query];
    let old = str;
    str = str.replace(new RegExp(query, 'g'), `<span style="color: ${color}">`);
    if (str != old) changed = true;
  }
  if (changed) str = str.replace(new RegExp(resetChar, 'g'), '</span>');
  toDelete.forEach(match => (str = str.replace(new RegExp(match, 'g'), '')));
  return str;
}
function colorTheLogs() {
  console.log('🌈🌈🌈');
  [...document.querySelectorAll('.ace_line:not(.🌈)')].map(line => {
    let target = line.children[0];
    if (target) {
      target.innerHTML = colorize(target.innerText);
    }
    line.classList.add('🌈');
  });
}

function startObserver() {
  const container = document.querySelector('awsui-tabs');
  const observer = new MutationObserver(colorTheLogs);
  observer.observe(container, {
    childList: true,
    subtree: true
  });
  colorTheLogs();
}
let watchInterval;
function watchForContainer() {
  watchInterval = setInterval(() => {
    if (document.querySelector('awsui-tabs')) {
      startObserver();
      clearInterval(watchInterval);
    }
  }, 50);
}
console.log('🌈🌈🌈 Loading... 🌈🌈🌈');
watchForContainer();
