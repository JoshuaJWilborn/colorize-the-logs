import { query, toDelete, end } from "./constants";
export function colorize(htmlString: string): string {
  let str = htmlString;
  str = str.replace(end, '</span>');
  str = str.replace(query, `<span class="🌈-$2">`);
  toDelete.forEach(
    (match: string) => (str = str.replace(new RegExp(match, "g"), "")),
  );
  return str;
}
export function colorTheLogs(): void {
  const lines = document.querySelectorAll(".ace_line:not(.🌈)");
  Array.from(lines).map((line) => {
    line.querySelectorAll('.ace_invalid,.ace_invisible,.ace_invisible_space').forEach(e => e.remove());
    const target = line.children[0] as HTMLElement;
    if (target) {
      target.innerHTML = colorize(target.innerHTML);
    }    
    line.classList.add("🌈");
  });
}

export function startObserver(): void {
  const container = document.querySelector("awsui-tabs");
  const observer = new MutationObserver(colorTheLogs);
  if (!container) { return; }
  observer.observe(container, {
    childList: true,
    subtree: true,
  });
  colorTheLogs();
}

let watchInterval: NodeJS.Timeout;
export function watchForContainer() {
  clearInterval(watchInterval);
  return new Promise((resolve) => {
    watchInterval = setInterval(() => {
      if (document.querySelector("awsui-tabs")) {
        clearInterval(watchInterval);
        resolve();
      }
    }, 50);
  });
}
