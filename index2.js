var cards = document.querySelectorAll('.card');
// cuando le das la vuelta, se añade el is-flipped true
let text = ""
// let flipNum = []

cards.forEach((card)=>{
  card.addEventListener( 'click', function() {
  //  if(flipNum.length === 2 ){
  //   console.log("dos", this.classList[1] )
  //   alert("only 2 cards")
  //   return
  //  }

 
    card.classList.toggle('is-flipped');
 console.log(card)

  let list =  this.classList

  console.log(list[1])
  let isFlip = (list[1] === 'is-flipped') && true

  // flipNum.push(isFlip)

  // console.log(flipNum.length)
  console.log(isFlip)

 
    if(text.length === 0 && isFlip ){
         console.log("this", this.innerText)
        text = this.innerText

    }else if((text === this.innerText) && isFlip  ){

        text = ""
        setTimeout(()=>{
            alert("igual")
          //si son iguales, eliminar esas cartas del html
        }, 2000)
       
    }else if((text !== this.innerText) && isFlip){
        text = ""
        setTimeout(()=>{
           
            alert("incorrecto")
         //dentro del dom tomo todos los elementos y le elimino la clase 
         //is-flipped a aquellos que tienen el is-flipped
            let flippedCards = document.querySelectorAll(".is-flipped")
           
            flippedCards.forEach( card => card.classList.remove("is-flipped"))
            
          console.log("incorrecto", flippedCards.length)
            
        }, 2000)
    }
  });
});