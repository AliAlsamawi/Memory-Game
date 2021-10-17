let winner;

let cards = ["dA", "dA","dQ", "dQ","dK", "dK","dJ", "dJ", "d10", "d10","d09", "d09", "d08", "d08", "d07", "d07"]

//console.log(cards)




// let deck1El = document.querySelectorAll(".card")

cards.forEach(item => {
  item.addEventListener('click', event => {
    item.classList.replace(cards[Math.floor(Math.random())])})
    console.log()
  }
  )
  // we want the cards to only be selected on time.


  if (!winner) {
    message.innerText = `It's yout  turn!`
  }