

// creo un array de las cartas de assets y uso ese array para mapear y 
// añadir los cambios

let time =  []




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

<div class="scene scene--card count">
      <div class="card">
       <img
          class="card__face card__face--front"
          src="./cartas/red_back.png"
          alt="back"
        />
        <img
          class="card__face card__face--back purple"
          src="./cartas/${card}.png"
          alt="${card.slice(0, card.length - 1)}"
        />"${card.slice(0, card.length - 1)}"
      </div>
    </div>
`
  
}
  )



let messageContainer = document.querySelector(".message-container")



var cards = document.querySelectorAll('.card');
// cuando le das la vuelta, se añade el is-flipped true

  cards.forEach((card)=>{
   

   
   
    
    card.addEventListener( 'click', function() {

      

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
     messageContainer.innerHTML += `
      <h1 class="ok-message">Great!</h1>
      `
      console.log("tarjetas flipeadas", document.querySelectorAll(".is-flipped")[0].innerText)
      
       setTimeout(()=>{
        let flippedCards = document.querySelectorAll(".is-flipped")
        flippedCards.forEach(card => card.remove())
         
          document.querySelector(".ok-message").remove()
       
        }, 2000)

  }else{
    console.log("mal")
    messageContainer.innerHTML += `
            <h1 class="failed-message">sorry not match!</h1>
        `
    setTimeout(()=>{
               
    let flippedCards = document.querySelectorAll(".is-flipped")
    console.log(flippedCards)
    flippedCards.forEach( card => card.classList.remove("is-flipped"))
    document.querySelector(".failed-message").remove()
            
                }, 2000)
  
   }
      
       
    }else{
      return;
    }
  } 
  })
  

});

