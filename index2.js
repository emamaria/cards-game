


let playerUser = 0

let playerPc = 0

let totalCards = 52;

function playersPointPanel(user){
document.querySelector(".players-state").innerHTML += `

<h1 id="userPlayer">${user}<p>${playerUser}</p></h1>
<h1 id="pcPlayer">pc<p>${playerPc}</p></h1>

`
}

function gameEndingMessage(player, leftCars){

  if(leftCars === 2){

    messageContainer.remove()
     if(player !== user ){
      playerUser+=1
     }else if(player === "pc"){
      playerPc+=1
     }

     if(playerUser > playerPc){

      cardsContainer.innerHTML = `<div class="match-end fade-in-image"><h1>${player[0].toUpperCase()}${player.substring(1)} wins!!🤩</h1></div>`
     }else if(playerPc > playerUser){
      cardsContainer.innerHTML = `<div class="match-end fade-in-image"><h1>${player[0].toUpperCase()}${player.substring(1)} wins!!🤩</h1></div>`
     }else if(playerUser === playerPc){
      cardsContainer.innerHTML = `<div  class="match-end fade-in-image"><h1>Draw!🤔</h1></div>`
     }

    setTimeout(() => {
      return location.reload()
    }, 8000);

  }


}



let cardsList = [
  "2C", "2D", "2H", "2S",
  "3C", "3D", "3H", "3S",
  "4C", "4D", "4H", "4S",
  "5C", "5D", "5H", "5S",
  "6C", "6D", "6H", "6S",
  "7C", "7D", "7H", "7S",
  "8C", "8D", "8H", "8S",
  "9C", "9D", "9H", "9S",
  "10C", "10D","10H","10S",
  "AC", "AD", "AH", "AS",
  "JC", "JD", "JH", "JS",
  "KC", "KD", "KH", "KS",
  "QC", "QD", "QH", "QS",
]



let shuffledCards = cardsList
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   
console.log(shuffledCards)



let cardsContainer = document.querySelector(".cards-container")



shuffledCards.forEach(card =>{
  
  cardsContainer.innerHTML += `

<div class="scene scene--card count" >
      <div class="card" id=${card.toLowerCase()}>
       <img
          class="card__face card__face--front"
          src="./cartas/red_back.png"
          alt="back"
        />
        <img
          class="card__face card__face--back purple"
          src="./cartas/${card}.png"
          alt="${card.toLowerCase()}"
        />"${card.slice(0, card.length - 1).toLowerCase()}"
      </div>
    </div>
`
  
}
  )

let user = prompt("what´s your name?")

function returnInthisCase(){
  if(user.toLowerCase() === "pc"){
    user = prompt("Tell me any name except, pc!")
    if(user.toLowerCase() === "pc"){
      alert("You can´t play this game, sorry!")

      // return new Error("End")
       
   }
  }
}

returnInthisCase()


 async function returAccordingToUserName(){

  if(user.toLowerCase() === "pc"){
    return await location.reload()
  }else{
  alert(`Hi ${user[0].toUpperCase()}${user.substring(1)}❤! 
  This is a good game to train your memory!
  In this game, the player who accumulates more pairs of same numbers or letters cards wins.You are playing agains the pc.
  Each player must flip two cards in their turn.If the player gets two matched cards, can repeat turn and flip two more cards.
  The game ends when there are no more cards letf on the screen.
  Click accept to start the game.You start first, good luck ${user[0].toUpperCase()}${user.substring(1)}😉!`)
  }
}

returAccordingToUserName()



let messageContainer = document.querySelector(".message-container")

function playerTurn(name){

  if(name === "pc"){
    messageContainer.innerHTML += `
  <h1 id="pc-name">${name[0].toUpperCase()}${name.substring(1)}, choose two cards.</h1>
  `
  }else{
    messageContainer.innerHTML += `
    <h1 id="user-name">${name[0].toUpperCase()}${name.substring(1)}, click two cards.</h1>
    `
  }
  
}

function removePlayerTurn(name){
  if(name === "pc"){
    const element = document.getElementById("pc-name"); 
    element.remove();
  }else{
    const element = document.getElementById("user-name");
    element.remove();
  }

    }

var cards = document.querySelectorAll('.card');


setTimeout(() => {
  playerTurn(user)
  playersPointPanel(user)
}, 1000);


  cards.forEach((card)=>{
   
    
    card.addEventListener( 'click', function() {

      let player = user
      
      console.log("tarjetas con flip length", document.querySelectorAll(".is-flipped").length)
      if(document.querySelectorAll(".is-flipped").length < 2){
      card.classList.add('is-flipped');
      
       console.log("tarjeta", card)

      if(document.querySelectorAll(".is-flipped").length === 2){
    console.log("hello")
  console.log("tarjeta 1 flipeada", document.querySelectorAll(".is-flipped")[0].innerText)
  console.log("tarjeta 2 flipeada", document.querySelectorAll(".is-flipped")[1].innerText)
    let card1 = document.querySelectorAll(".is-flipped")[0].innerText
    let card2 = document.querySelectorAll(".is-flipped")[1].innerText
  if(card1 === card2){
    console.log("bien")
  
      console.log("tarjetas flipeadas", document.querySelectorAll(".is-flipped")[0].innerText)
      
       setTimeout(()=>{
        let flippedCards = document.querySelectorAll(".is-flipped")

        console.log("tarjetas que quedan", cards.length)

        gameEndingMessage(player, totalCards)
    
        messageContainer.innerHTML += `
        <h1 class="ok-message">Great!Choose two more cards!</h1>
        `
        playerUser+=1
        document.querySelector("#userPlayer p").textContent = playerUser

        console.log("puntos usuario", playerUser)
        setTimeout(() => {
          flippedCards.forEach(card => card.remove())
         
          document.querySelector(".ok-message").remove()

          totalCards-=2
          
        }, 2000);
       
       
        }, 2000)

  }else{
    console.log("mal")
   
    setTimeout(()=>{
               
    let flippedCards = document.querySelectorAll(".is-flipped")
    cards.forEach( card => card.classList.add('block-click'))
    messageContainer.innerHTML += `
    <h1 class="failed-message">Sorry not match</h1>
`

  setTimeout(() => {

    console.log(flippedCards)
    flippedCards.forEach( card => card.classList.remove("is-flipped"))
    document.querySelector(".failed-message").remove()
  
    setTimeout(()=>{
      removePlayerTurn(user)
      playerTurn("pc")
      pcTurn()
    }, 2000)
    
  }, 2000);
   
            
                }, 2000)
  
   }
      
       
    }else{
      return;
    }
  } 
  })
  

});




function pcTurn(){

  let player = "pc"

 let randomOrMatch = Math.floor(Math.random() * 5);


 if(randomOrMatch <= 3){
   
  

  let leftCards =  document.querySelectorAll('.card');

  let leftCardsCopy =  [...leftCards]
 
  let leftCardsMinusOne = leftCardsCopy.length - 1 


  let randomNum =  leftCardsMinusOne + 1;

  let randomCardPosition = Math.floor(Math.random() * randomNum);

console.log("cartas que quedan", leftCards)
console.log("posicion random", randomCardPosition )
 let card1 = leftCardsCopy[randomCardPosition]

 card1.classList.add('is-flipped');

 let card1Type = card1.innerText
 

 leftCardsCopy.splice(randomCardPosition, 1)
      

 let leftCardsCopyMinusOne = leftCardsCopy.length - 1

 let randomNumSecond =  leftCardsCopyMinusOne + 1

 let randomCardPosition1 = Math.floor(Math.random() * randomNumSecond);

 let card2 = leftCardsCopy[randomCardPosition1]


 setTimeout(()=>{
     
    card2.classList.add('is-flipped');
 },1000)

 
 let card2Type = card2.innerText

 if(card1Type === card2Type){

  setTimeout(()=>{

   
    let flippedCards = document.querySelectorAll(".is-flipped")

    console.log("tarjetas que quedan", leftCards.length)

    gameEndingMessage(player, totalCards)

    messageContainer.innerHTML += `
    <h1 class="ok-message">Great! Choose two more cards!</h1>
    `
    playerPc+=1

    document.querySelector("#pcPlayer p").textContent = playerPc
    console.log("puntos pc",  playerPc)
    setTimeout(()=>{

      flippedCards.forEach(card => card.remove())
     
      document.querySelector(".ok-message").remove()

      totalCards-=2

      pcTurn()

    }, 2000)
  
   
    }, 2000)

   

 }else{

  setTimeout(()=>{

               
    let flippedCards = document.querySelectorAll(".is-flipped")

    messageContainer.innerHTML += `
    <h1 class="failed-message">Sorry not match</h1>
`
   setTimeout(()=>{

    console.log(flippedCards)
    flippedCards.forEach( card => card.classList.remove("is-flipped"))
    document.querySelector(".failed-message").remove()
    leftCards.forEach( card => card.classList.remove('block-click'))
    removePlayerTurn("pc")
    playerTurn(user)
   }, 2000)
   
  
                }, 2000)

 }
 




 }else if(randomOrMatch === 4){

  console.log("iguales")


  let leftCards =  document.querySelectorAll('.card');

  console.log("match left cards", leftCards,leftCards.length)

  let leftCardsCopy =  [...leftCards]

  console.log("randon left cards", leftCards,leftCards.length)
 
  let leftCardsMinusOne = leftCardsCopy.length - 1


  let randomNum =  leftCardsMinusOne + 1;

  console.log("tarjetas que quedan mas 1", leftCardsMinusOne)

  let randomCardPosition = Math.floor(Math.random() * randomNum);

  console.log("posicion  cartas aleatorias pc", randomCardPosition )

  console.log("random posiction bug", randomCardPosition)
 let card1 = leftCardsCopy[randomCardPosition]

 card1.classList.add('is-flipped');

 console.log("carta 1", card1)

 let card1Type = card1.innerText

 console.log("tipo card 1", card1Type)
 console.log("left card copy length antes",leftCardsCopy.length)

   leftCardsCopy.splice(randomCardPosition, 1)

 
  console.log("left card copy length despues",leftCardsCopy.length)

  let matchedCards = leftCardsCopy.filter( card => card.innerText  === card1Type)

 console.log("tarjetas iguales", matchedCards)

 let  flippingCardId = matchedCards[0].lastElementChild.alt

 console.log("id de carta a eliminar", flippingCardId)

 let  flippingCard = document.getElementById(flippingCardId)

 setTimeout(()=>{
  flippingCard.classList.add('is-flipped');
 }, 1000)


 setTimeout(()=>{

 
  let flippedCards = document.querySelectorAll(".is-flipped")

  console.log("tarjetas que quedan", leftCards.length)

  gameEndingMessage(player, totalCards)

  messageContainer.innerHTML += `
  <h1 class="ok-message">Great!Choose two more cards!</h1>
  `
  playerPc+=1
  document.querySelector("#pcPlayer p").textContent = playerPc

  console.log("puntos pc", playerPc )
  setTimeout(()=>{
    flippedCards.forEach(card => card.remove())
   
    document.querySelector(".ok-message").remove()

    totalCards-=2
    pcTurn()
   
  }, 2000)

 
  }, 2000)

 
 }

}
