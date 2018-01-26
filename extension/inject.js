
let pops = document.getElementsByClassName("js-add-reaction-popover")
let userContainer = document.getElementsByClassName("header-nav-current-user")[0]
let user = userContainer.getElementsByClassName("css-truncate-target").innerHTML

for (let i = 0; i < pops.length; i++) {
  let pop = pops[i]
  let form = pop.getElementsByClassName("js-pick-reaction")[0]

  // Setup emoForm
  let emoForm = form.cloneNode(true)
  let emoDesc = emoForm.getElementsByClassName("js-reaction-description")[0]
  let emoReactions = emoForm.getElementsByClassName("add-reactions-options")[0]
  let emoReactionButtons = emoReactions.getElementsByClassName("js-reaction-option-item")

  emoForm.setAttribute("action", "")
  emoForm.classList.add("mt-4")
  emoDesc.innerHTML = "Add to your private diary"

  emoReactionButtons[0].innerHTML = "<g-emoji alias=\"rage\" class=\"emoji-result\" fallback-src=\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f621.png\" ios-version=\"6.0\">😡</g-emoji>"
  emoReactionButtons[0].setAttribute("value", "😡" )
  emoReactionButtons[0].setAttribute("data-reaction-label", "Rage" )

  emoReactionButtons[1].innerHTML = "<g-emoji alias=\"angry\" class=\"emoji-result\" fallback-src=\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f620.png\" ios-version=\"6.0\">😠</g-emoji>"
  emoReactionButtons[1].setAttribute("value", "😠" )
  emoReactionButtons[1].setAttribute("data-reaction-label", "Angry" )

  emoReactionButtons[2].innerHTML = "<g-emoji alias=\"dissapointed\" class=\"emoji-result\" fallback-src=\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f61e.png\" ios-version=\"6.0\">😞</g-emoji>"
  emoReactionButtons[2].setAttribute("value", "😞" )
  emoReactionButtons[2].setAttribute("data-reaction-label", "Dissapointed" )

  emoReactionButtons[3].innerHTML = "<g-emoji alias=\"relieved\" class=\"emoji-result\" fallback-src=\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f60c.png\" ios-version=\"6.0\">😌</g-emoji>"
  emoReactionButtons[3].setAttribute("value", "😌" )
  emoReactionButtons[3].setAttribute("data-reaction-label", "Relieved" )

  emoReactionButtons[4].innerHTML = "<g-emoji alias=\"grinning\" class=\"emoji-result\" fallback-src=\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f600.png\" ios-version=\"6.0\">😀</g-emoji>"
  emoReactionButtons[4].setAttribute("value", "😀" )
  emoReactionButtons[4].setAttribute("data-reaction-label", "Grinning" )

  emoReactionButtons[5].innerHTML = "<g-emoji alias=\"heart_eyes\" class=\"emoji-result\" fallback-src=\"https://assets-cdn.github.com/images/icons/emoji/unicode/1f60d.png\" ios-version=\"6.0\">😍</g-emoji>"
  emoReactionButtons[5].setAttribute("value", "😍" )
  emoReactionButtons[5].setAttribute("data-reaction-label", "Heart eyes" )


  Array.prototype.forEach.call(emoReactionButtons, function(el, i){
    el.classList.add("js-emo-reaction")
    el.addEventListener("click", function( event ) {
      event.preventDefault()
      let reaction = el.getAttribute("value")
      let url = location
      let object_id = el.closest(".js-comment").id
      let actor = user
      let author = "username" // TODO: Figure out how to grab this from the DOM
      let text = "test"       // TODO: Figure out how to grab this from the DOM

      chrome.runtime.sendMessage({object_id: object_id, url: url, reaction: reaction, text: text, actor: actor, author: author});
    })
  })

  // Add emoForm to the DOM
  pop.appendChild(emoForm)
}
