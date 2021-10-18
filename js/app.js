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

/*------------- Variables (state) -------------*/
let cards = [
  "dA","dA","dQ","dQ","dK","dK","dJ","dJ","d10","d10","d09","d09","d08","d08","d07","d07",]
  let existingCards = [];
  let flippedCards = 0;
  let allowFlip = true;
/*--------- Cached Element References ---------*/
let deck1El = document.querySelectorAll(".card");

/*-------------- Event Listeners --------------*/


/*----------------- Functions -----------------*/

deck1El.forEach((item) => {
  item.addEventListener("click", (event) => {

    if (allowFlip) {
      processClick(event);
    }
  })
})

function processClick(event) {
  if (flippedCards < 2) {
    const cardId = event.target.id;
    const generatedCard = createCard(cardId);
    flipCard(cardId, generatedCard);
    flippedCards++
    allowFlip = false
    setTimeout(function () {
      detectMatch()
    }, 1000)
  }
}