

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
          //turno pc
          setTimeout(()=>{
            pcTurn()
          }, 2000)
       
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
      //turno pc
    setTimeout(()=>{
      pcTurn()
    }, 2000)
            
                }, 2000)
  
   }
      
       
    }else{
      return;
    }
  } 
  })
  

});


//jugada pc

//primero hago aleatoriamente que salga 0 o 1 si sale 1 el pc da vueltas
//a dos cartas aleatoriamente si sale 0 toma dos iguales , durante el 
//juego de pc desactivar click de las cartas una vez terminado, activar

function pcTurn(){

  //para que la probailidad de acertar por pate del pc sea más baja pongo
  //a un 25% de posibilidad de acertar poniendo 5 numeros si 0 ó 1 ó  2 ó 3
  //es aleatorio si es 4 encuentra la pareja
 let randomOrMatch = Math.floor(Math.random() * 5);

 console.log("random", randomOrMatch)

 //tiene probabilidad de 0 1 ó 2
 if(randomOrMatch <= 3){
   
  console.log("aleatorio")

  //miro el numero de tarjetas que queda en dom los tomo miro cuantos son con 
  //length y sumo 1 .con ese length + 1 hago un ramdon que me saque de 0 a length + uno
  //lo busco del array y lo saco y lo almaceno en variable llamado carta1 y le doy la vuelta luego con el 
  //array de cartas que queda hago otro random entre 0 y ese array length mas uno y segun la posicion que salga le doy la
  //vuelta y almaceno ese
  //carta segun la posicion en que este en una variable y comparo el innerText si es igual los elimino
  //si no les vuelvo a voltear

  let leftCards =  document.querySelectorAll('.card');

  let leftCardsCopy =  [...leftCards]
 
  let leftCardsPlusOne = leftCardsCopy.length 

  //para que salga en random de 0 al ultimo número de posicion sumo 1 a la longitud del array

  let randomNum =  leftCardsPlusOne + 1;

  let randomCardPosition = Math.floor(Math.random() * randomNum);

console.log("cartas que quedan", leftCards)
console.log("posicion random", randomCardPosition )
 let card1 = leftCardsCopy[randomCardPosition]
//otra vez error not read property of undefined
 card1.classList.add('is-flipped');

 let card1Type = card1.innerText
 

 leftCardsCopy.splice(randomCardPosition, 1)
      

 let leftCardsCopyPlusOne = leftCardsCopy.length 

 let randomNumSecond =  leftCardsCopyPlusOne + 1

 let randomCardPosition1 = Math.floor(Math.random() * randomNumSecond);

 let card2 = leftCardsCopy[randomCardPosition1]


 setTimeout(()=>{
      //debo añadir el is-flipped al dom real no a la copia
    card2.classList.add('is-flipped');
 },1000)

 //card2.lastElementChild.alt
 
 ///aqui pasa algo
 let card2Type = card2.innerText

 if(card1Type === card2Type){

  setTimeout(()=>{
    let flippedCards = document.querySelectorAll(".is-flipped")
    flippedCards.forEach(card => card.remove())
     
      // document.querySelector(".ok-message").remove()
      //turno pc
   
    }, 2000)

   

 }else{

  setTimeout(()=>{
               
    let flippedCards = document.querySelectorAll(".is-flipped")
    console.log(flippedCards)
    flippedCards.forEach( card => card.classList.remove("is-flipped"))
    // document.querySelector(".failed-message").remove()
  
                }, 2000)

 }
 




 }else if(randomOrMatch === 4){

  //busco en el array de cartas de forma aleatoria una carta miro el numeor que tiene le doy la vuelta
  //y busco otra carta del mismo numero en el array de cartas y el primero que encuentre en el array
  //le doy la vuelta y los elimino porque son iguales
  console.log("iguales")


  let leftCards =  document.querySelectorAll('.card');

  console.log("match left cards", leftCards,leftCards.length)

  let leftCardsCopy =  [...leftCards]

  console.log("randon left cards", leftCards,leftCards.length)
 
  let leftCardsPlusOne = leftCardsCopy.length

  //para que salga en random de 0 al ultimo número de posicion sumo 1 a la longitud del array

  let randomNum =  leftCardsPlusOne + 1;

  console.log("tarjetas que quedan mas 1", leftCardsPlusOne)

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

  //busco de las tarjetas que quedan el mismo tipo que el que saqué en aleatorio
  //y el primero que encuentre será el que haré flip y despues aliminare del deck
  //para buscar el mismo en el array del dom debo buscar elemento con el mismo src
 
  // del  leftCardsCopy busco todos los elementos que tengan card1Type y de ahí
  //miro el de la primera posicion que id tiene y voy al dom original y elimino 
  //elemento de ese id

 
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
  flippedCards.forEach(card => card.remove())
   
    // document.querySelector(".ok-message").remove()
    //turno pc
 
  }, 2000)

 
 }

}
