// player 1
let button = document.querySelector('#btn');


  let change = function(){
    let randomNumber = Math.ceil(Math.random()*6);
    // console.log(randomNumber);
    
    let randomDiceImage = 'dice ' + randomNumber + '.jpg';
    let randomImageSource = 'dices/' + randomDiceImage;
    
    let image = document.querySelectorAll('img')[0]
    image.setAttribute('src', randomImageSource)
    
    // player2
    
    let randomNumberB = Math.ceil(Math.random()*6);
    // console.log(randomNumber);
    
    let randomDiceImageB = 'dice ' + randomNumberB + '.jpg';
    let randomImageSourceB = 'dices/' + randomDiceImageB;
    
    let imageB = document.querySelectorAll('img')[1]
    imageB.setAttribute('src', randomImageSourceB)
    
    let body = document.body;
    let header = document.querySelector('h1') 
      if(randomNumber > randomNumberB){
        header.innerText = 'Player 1 wins 🎈'
        body.style.backgroundColor = 'red'
      }
       else if(randomNumberB > randomNumber){
        header.innerText = 'Player 2 wins 🎈'
        body.style.backgroundColor = 'purple'
      }
      else{
        header.innerText = 'it\'s a tie 🧑🏻‍🤝‍🧑🏽'
        body.style.backgroundColor = 'yellow'
      }
    
  }

  button.addEventListener('click', change);

  




