chrome.browserAction.onClicked.addListener((tab: chrome.tabs.Tab) => {
  if (!tab.id) return;
  chrome.tabs.sendMessage(tab.id, { type: 'getText' }, (response: any) => {
    const text = response as string;
    console.log(text);

    // You can handle the collected text here, e.g., send it to a server, save it to a file, etc.
  });
});
