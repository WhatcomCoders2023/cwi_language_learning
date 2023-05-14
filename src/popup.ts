document.getElementById('extractText')?.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'extractText' });
});
