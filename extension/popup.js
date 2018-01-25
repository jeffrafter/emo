document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('check')
  checkButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form')
      f.action = ''
      f.method = 'post'
      var i = d.createElement('input')
      i.type = 'hidden'
      i.name = 'url'
      i.value = tab.url
      f.appendChild(i)
      d.body.appendChild(f)
      f.submit()
    })
  }, false)
}, false)
