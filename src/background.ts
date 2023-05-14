interface Tab {
  id?: number;
}

interface ExecuteScriptArguments {
  target: { tabId: number };
  function: () => string;
}

function extractText(): string {
  return document.body.innerText;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'extractText') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0].id) return;
      chrome.scripting
        .executeScript({
          target: { tabId: tabs[0].id },
          func: extractText,
        })
        .then((results) => {
          if (results.length > 0) {
            console.log(results[0].result);
          }
        });
    });
  }
});
