// generate the back of the cards/placeholders
  // give each card/placeholder an id so you can find it easily
  // handle the click event
  //   generate a unique card
  //     save each generated card and check to make sure the new card is unique
  //     OR
  //     check the existing cards and make sure the new is unique
  //     OR
  //     save each generated card, remove new generated card from list of cards
  //     return any existing cards when clicked

  //     what happens the first time, the second time etc
  //       FIRST TIME - no existing cards
  //         GENERATE A NEW CARD, remove card from the list of cards by index
  //         save that card id and the card suit/number to the existing card array
  //         Return the new card
  //       SECOND TIME - 
  //         check the existing card array to see if that card id has a card
  //         if it does return it
  //         if not
  //           follow the pieces for the first time
  //   flip over the unique card
  //     adjusted the classes
  //   check to see if there is a match
  //     check the flipped card
  //   if not flip back over the cards
  //     if no match unflip the flipped card
  //   if a match don't flip over the cards
  //     if a match change the flipped class to match so flipped doesn't happen

/*----------------- Constants -----------------*/
let cards = [
  "dA","dA","dQ","dQ","dK","dK","dJ","dJ","d10","d10","d09","d09","d08","d08","d07","d07",]

/*------------- Variables (state) -------------*/

let existingCards = []
let flippedCards = 0
let allowFlip = true
let gameActive =true

/*--------- Cached Element References ---------*/

let deck1El = document.querySelectorAll(".card")


let replayBtn = document.querySelector("#replay-button")

const lightDarkBtn = document.querySelector("#light-dark-button")

const body = document.querySelector("body")

let countDownEl = document.getElementById ("countdown")
/*-------------- Event Listeners --------------*/
lightDarkBtn.addEventListener("click", toggleLightDark)

deck1El.forEach((item) => {
  item.addEventListener("click",handleClick)
})

// we want to flip all the cards back over
replayBtn.addEventListener("click", reloadPage)
//you need to have a start function that will start the count down
//then you will start the timeout
//
function reloadPage() {
  location.reload()
}
function reset(){
  gameActive = true
  existingCards = []
  flippedCards = 0
  allowFlip = true
  deck1El.forEach(function(card){
    card.classList.remove("flipped")
    card.classList.add("back-red")
    
  })
  
  theTimeLeft()
} 
reset()

function theTimeLeft(){
let timeLeft = 100
let timerId = setInterval(function() {
    countDownEl.textContent = `${timeLeft} seconds remaining!`
    timeLeft -= 1
    if (timeLeft <= 0 ){
      countDownEl.textContent = 'Time is up. Start Over'
      gameActive = false
      clearInterval(timerId)
    }
    
  }, 900)
}
/*----------------- Functions -----------------*/
function handleClick(event) {
  if (gameActive){

    if (flippedCards < 2) {
      const cardId = event.target.id
      const generatedCard = createCard(cardId)
      flipCard(cardId, generatedCard)
      flippedCards++
      allowFlip = false
      setTimeout(function () {
        detectMatch()
        
      }, 1000)
    }
  }
}

function flipCard(cardId, generatedCard) {
  const foundCard = document.querySelector(`#${cardId}`)
  foundCard.classList.replace("back-red", generatedCard)
  foundCard.classList.add("flipped")
}
function detectMatch() {
  const allFlippedCards = document.querySelectorAll(".flipped")
  const flippedCardInfo = []
  if (allFlippedCards.length < 2) {
    allowFlip = true
    return
  }

  allFlippedCards.forEach((eachSingelCard) => {
    const foundCard = existingCards.find(
      (subCard) => eachSingelCard.id === subCard.cardid
    )
    flippedCardInfo.push(foundCard)
  })

  if (flippedCardInfo[0].card === flippedCardInfo[1].card) {
    allFlippedCards.forEach((eachSingelCard) => {
      eachSingelCard.classList.replace("flipped", "matched")
    })
    //winner detected!
    flippedCards = 0
    //detect if no cards are left
    allowFlip = true
    detectAllMatchs()
    return
  }
  flippedCards = 0
  flipCardsMarkedFlipped()
  allowFlip = true
}

function createCard(cardId) {
  const foundCard = existingCards.find(
    (playedCardObj) => playedCardObj.cardid === cardId
  )
if (foundCard) {
    return foundCard.card
  }
  const randomIndex = Math.floor(Math.random() * cards.length)
  const newCard = cards[randomIndex]
  //splice it off our list of cards
  cards.splice(randomIndex, 1)
  existingCards.push({ cardid: cardId, card: newCard });
  return newCard
}


function flipCardsMarkedFlipped() {
  const flippedCards = document.querySelectorAll(".flipped")
  flippedCards.forEach((item) => {
    item.className = ""
    item.classList.add("card", "small", "back-red", "shadow")
  })
}


function detectAllMatchs() {
  const allCards = document.querySelectorAll(".card");
  //see if all the cards are matched
  let matched = 0
  allCards.forEach((singleCard) => {
    if (singleCard.classList.contains("matched")) {
      matched++
    }
  });
  if (matched === allCards.length) {
    document.querySelector("#message").innerText = "You won the game congrats!!!"
    countDownEl.style.display = "none"
  
  }
}

function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
  document.getElementById("message").classList.add("darkText")
 
}
function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
    ) {
      toggleLightDark()
    }
  }
  checkDarkPref()