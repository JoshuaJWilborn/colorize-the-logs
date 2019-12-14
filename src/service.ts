import * as browserMain from "webextension-polyfill";
const browser = browserMain.default;
browser.runtime.onMessage.addListener(() => {
  restore();
});
import { regexReplacementFunctionPairs } from "./constants";
export function colorize(htmlString: string): string {
  let str = htmlString;
  regexReplacementFunctionPairs.forEach(([query, replacement]) => {
    str = str.replace(query, replacement);
  });
  return str;
}
let paused = false;
export function colorTheLogs(): void {
  if (paused) return;
  const lines = document.querySelectorAll(".ace_line:not(.🌈)");
  Array.from(lines).map(line => {
    line.restore = getRestoreFunc(line);
    line
      .querySelectorAll(".ace_invalid,.ace_invisible,.ace_invisible_space")
      .forEach(e => e.remove());
    const target = line.children[0] as HTMLElement;
    if (target) {
      target.innerHTML = colorize(target.innerHTML);
    }
    line.classList.add("🌈");
  });
}
function getRestoreFunc(line: HTMLElement): Function {
  return (old => () => {
    line.restore = getRestoreFunc(line);
    line.innerHTML = old;
  })(line.innerHTML);
}
export function restore(): void {
  paused = !paused;
  document.querySelectorAll(".🌈").forEach(el => el.restore());
}
export function startObserver(): void {
  const container = document.querySelector("awsui-tabs");
  const observer = new MutationObserver(colorTheLogs);
  if (!container) {
    return;
  }
  observer.observe(container, {
    childList: true,
    subtree: true
  });
  colorTheLogs();
}

let watchInterval: NodeJS.Timeout;
export function watchForContainer() {
  clearInterval(watchInterval);
  return new Promise(resolve => {
    watchInterval = setInterval(() => {
      if (document.querySelector("awsui-tabs")) {
        clearInterval(watchInterval);
        resolve();
      }
    }, 50);
  });
}
