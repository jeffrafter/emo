chrome.runtime.onMessage.addListener(function (msg, sender) {
  let data = msg
  console.log(data)
  
  // Handle the form submit via JS
  var XHR = new XMLHttpRequest()
  var urlEncodedData = ""
  var urlEncodedDataPairs = []
  var name

  XHR.withCredentials = true
  // Turn the data object into an array of URL-encoded key/value pairs.
  for(name in data) {
    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behaviour of browser form submissions.
  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+')

  // Define what happens on successful data submission
  XHR.addEventListener('load', function(event) {
    console.log("Successful post to Emo server...")
    console.log("Response from server:")
    console.log(XHR.response)
  });

  // Define what happens in case of error
  XHR.addEventListener('error', function(event) {
    console.log("Something didn't work right...")
  });

  // Set up our request
  XHR.open('POST', 'https://emo-oauth.glitch.me/emote')

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

  // Finally, send our data.
  console.log("Sending data to Emo server...")
  console.log(urlEncodedData)
  XHR.send(urlEncodedData)
})
