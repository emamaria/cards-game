var cards = document.querySelectorAll('.card');
// cuando le das la vuelta, se añade el is-flipped true
let text = ""
cards.forEach((card)=>{
  card.addEventListener( 'click', function() {
   
    card.classList.toggle('is-flipped');
 console.log(card)

  let list =  this.classList

  console.log(list[1])
  let isFlip = (list[1] === 'is-flipped') && true

  console.log(isFlip)

 
    if(text.length === 0 && isFlip ){
       
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
            
        }, 2000)
    }
  });
});