function getTextFromNode(node: Node): string | undefined {
  if (node.nodeType == Node.TEXT_NODE) {
    return (node as Text).textContent?.trim();
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return '';
  }
  let text = '';
  for (const child of node.childNodes) {
    text += getTextFromNode(child);
  }
  console.log(text);
  return text;
}

chrome.runtime.onMessage.addListener(
  (
    message: any,
    sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void
  ) => {
    if (message.type === 'getText') {
      const text = getTextFromNode(document.body);
      sendResponse(text);
    }
  }
);

console.log('content script loaded');
