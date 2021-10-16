/*----------------- Constants -----------------*/



/*------------- Variables (state) -------------*/



/*--------- Cached Element References ---------*/
const cards = document.querySelectorAll(".card")
const gameStatus = document.querySelectorAll("#message")

/*-------------- Event Listeners --------------*/
cards.forEach(guess => 
  guess.addEventListener("click", handleClick))

/*----------------- Functions -----------------*/
//randomise cards
//creat board function

function handleClick(evt){
console.log(evt.target.id)
}

//flip color function

// check for matches function
//have an emty array to collect 