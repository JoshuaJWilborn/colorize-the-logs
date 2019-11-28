import { query, toDelete } from "./constants";
export function colorize(htmlString: string): string {
  let str = htmlString;
  str = str.replace(query, `<span class="🌈-$2">$3</span>`);
  toDelete.forEach(
    (match: string) => (str = str.replace(new RegExp(match, "g"), "")),
  );
  return str;
}
export function colorTheLogs(): void {
  const lines = document.querySelectorAll(".ace_line:not(.🌈)") as any;
  [...lines].map((line) => {
    const target = line.children[0] as HTMLElement;
    if (target) {
      target.innerHTML = colorize(target.innerText);
    }
    line.classList.add("🌈");
  });
}

export function startObserver(): void {
  const container = document.querySelector("awsui-tabs");
  const observer = new MutationObserver(colorTheLogs);
  if (!container) return;
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
