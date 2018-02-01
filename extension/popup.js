document.addEventListener('DOMContentLoaded', function() {
  const checkButton = document.getElementsByClassName('js-submit')[0]
  checkButton.addEventListener('click', function() {
    console.log("opening tab...")
    chrome.tabs.create({url: 'http://seemly-cello.glitch.me' })
  })
});
