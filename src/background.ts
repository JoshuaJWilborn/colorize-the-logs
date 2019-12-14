import * as browserMain from 'webextension-polyfill';
const browser = browserMain.default;
browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.sendMessage(tab.id, {});
});
