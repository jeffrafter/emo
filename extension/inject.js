console.log("DOGS")

let pops = document.getElementsByClassName("js-add-reaction-popover")
for (let i = 0; i < pops.length; i++) {
  let pop = pops[i]
  let desc = pop.getElementsByClassName("js-reaction-description")[0]
  desc.innerHTML = "Patrick is cool"
}
