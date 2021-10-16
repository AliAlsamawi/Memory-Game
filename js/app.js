/*----------------- Constants -----------------*/



/*------------- Variables (state) -------------*/



/*--------- Cached Element References ---------*/
// const cards = document.querySelectorAll(".cards")
// console.log(cards)
// const gameStatus = document.querySelectorAll("#message")

/*-------------- Event Listeners --------------*/
// cards.forEach(cards => 
//   cards.addEventListener("click", handleClick))
//   console.log()
document.addEventListener('DomCOntentLoaded', () => {
  
  const cardArray = [
    {
      name:"A diamonds",
      img: '../images/diamonds-A.svg'
    },
    { name:"A diamonds",
      img: 'images/diamonds-A.svg'
  },
  { name:"J diamonds",
    img: 'images/diamonds-J.svg'
},
{ name:"J diamonds",
  img: 'images/diamonds-J.svg'
},
{ name:"K diamonds",
  img: 'images/diamonds-K.svg'
},
{ name:"K diamonds",
  img: 'images/diamonds-K.svg'
},
{ name:"Q diamonds",
  img: 'images/diamonds-Q.svg'
},
{ name:"Q diamonds",
  img: 'images/diamonds-Q.svg'
},
{ name:"2 diamonds",
  img: 'images/diamonds-r02.svg'
},
{ name:"2 diamonds",
  img: 'images/diamonds-r02.svg'
},
{ name:"3 diamonds",
  img: 'images/diamonds-r03.svg'
},
{ name:"3 diamonds",
  img:'images/diamonds-r03.svg'

    }
  ]
})
  
const gird = document.querySelectorAll('.grid')
/*----------------- Functions -----------------*/

function creatBoard (){
  for (let i = 0; i < cardArray.length; i++) {
  const card = document.createElement('img')
  card.setAttribute ("/src", 'images/backs/red.svg')
  card.setAttribute('data-id, i')
  gird.appendChild(card)
  // card.addEventListener('click', flipcard)
    
  }
}
//randomise cards
//creat board function

// function handleClick(evt){
// console.log(evt.target.id)
// }

// let deck1El = document.getElementById('deck1')

//flip color function

// check for matches function
//have an emty array to collect 
//let deck1 = []

//init()
//function init() {
  //deck1 = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]