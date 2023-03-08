
// creo un array de las cartas de assets y uso ese array para mapear y 
// añadir los cambios

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

<div class="scene scene--card">
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



var cards = document.querySelectorAll('.card');
// cuando le das la vuelta, se añade el is-flipped true
let text = ""
let flipNum = []

cards.forEach((card)=>{
  card.addEventListener( 'click', function() {
   if(flipNum.length === 2 ){
    console.log("dos", this.classList[1] )
    console.log("here")
    return
   }

 
    card.classList.toggle('is-flipped');
 console.log(card)

  let list =  this.classList

  console.log(list[1])
  let isFlip = (list[1] === 'is-flipped') && true

  flipNum.push(isFlip)

  console.log(flipNum.length)
  console.log(isFlip)

 
    if(text.length === 0 && isFlip ){
         console.log("this", this.innerText)
        text = this.innerText

    }else if((text === this.innerText) && isFlip  ){

        text = ""
        setTimeout(()=>{
            alert("igual")
            let flippedCards = document.querySelectorAll(".is-flipped")
            flippedCards.forEach(card => card.remove())
          //si son iguales, eliminar esas cartas del html
          //reseteo para volver a voltear
        flipNum = [] 
        }, 2000)
       
    }else if((text !== this.innerText) && isFlip){
        text = ""
        setTimeout(()=>{
           
            alert("incorrecto")
         //dentro del dom tomo todos los elementos y le elimino la clase 
         //is-flipped a aquellos que tienen el is-flipped
            let flippedCards = document.querySelectorAll(".is-flipped")
           console.log(flippedCards)
            flippedCards.forEach( card => card.classList.remove("is-flipped"))
           //reseteo para volver a voltear
         flipNum = [] 
          console.log("incorrecto", flippedCards.length)
            
        }, 2000)
    }

     
  });
});