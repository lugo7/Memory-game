//////////////////////////
////Simon Says Clone//////
//////////////////////////
//////////////////////////

let blnkOrdr = [];
let newOrder = [];

function blinkDiv(blnkOrdr){ //creates a blinking effect on the game board based on the values in blnkOrdr
  for(let i=0; i<blnkOrdr.length;i++){
    setTimeout(blink = function(){
      switch(blnkOrdr[i]){
        case 1:
          document.getElementsByClassName('green')[0].style.opactiy='1';
          setTimeout(function(){document.getElementsByClassName('green')[0].style.opacity="0.6";},500);
          break;
        case 2:
          document.getElementsByClassName('red')[0].style.opacity='1';
          setTimeout(function(){document.getElementsByClassName('red')[0].style.opacity='0.6';},500);
          break;
        case 3:
          document.getElementsByClassName('blue')[0].style.opacity="1";
          setTimeout(function(){document.getElementsByClassName('blue')[0].style.opacity="0.6";},500);
          break;
        case 4:
          document.getElementsByClassName('yellow')[0].style.opacity="1";
          setTimeout(function(){document.getElementsByClassName('yellow')[0].style.opacity="0.6";},500);
          break;
      }
    },250);
  }
} //goes no where from here.

function main(blnkOrdr){
  blnkOrdr.push(Math.floor((Math.random()*4)+1)); //generates a random number for main array
  newOrder = blnkOrdr;  //copy array so we can mess with the values
  console.log(blnkOrdr); //lets see the value
  blinkDiv(blnkOrdr); //send main array to blink function
  //document.getElementById('game').addEventListener("click", readData = function(){
  //
  //});
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function(){
  document.getElementById("startButton").addEventListener('click', start = function(){ //on start
    blnkOrdr = []; //clear main array
    main(blnkOrdr); //send to main
  });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//does the actual user input
function replyClick(clssName,userAnswer){

  for(let i = 0; i<blnkOrdr.length;i++){

  }
}

function reply(clssName){ //returns the class of the clicked game button.
  let userAnswer = parseFloat(document.getElementsByClassName(clssName)[0].getAttribute('data-tile')); //userAnswer = the class of the button
  if(userAnswer!==parseFloat(newOrder[0])){ //if user clicked wrong button, game over
    console.log("Values are not equal");
    console.log("user: ",userAnswer, "answer: ", newOrder[0]);
    newOrder = [];
    alert("Game Over");
    return;
  }
  else if(userAnswer===parseFloat(newOrder[0])){ //if it was the correct button, continue
    console.log("Values are equal");
    console.log(newOrder);
    newOrder.shift(); //remove the element that we just tested.
    console.log(newOrder);
  }
  else if(i<=0){ //if array is empty, recall main function
    console.log('continue');
    main(blnkOrdr);
  }
  else{ //error
    console.log("There is no vaule");
    replyClick(clssName,blnkOrdr);
  }

  replyClick(clssName,userAnswer); //pass arguments to other function
  main(blnkOrdr);
}

////////////////////////////////////////////////////////////////////////////////
var Game = {
  blnkOrdr = [],
  newOrder = [],
  gameOver = false,
  round = 0,

  init: function(){
    let that = this;
    document.getElementById("startButton").addEventListener('click', function(){ //on start
      that.startGame();
    });
  },
  startGame: function(){
    this.blnkOrdr = [];
    this.newOrder = [];
    this.gameOver = false;
    this.round = 0;
    startRound();
  },
  startRound: function(){
    document.getElementById('score').innerHTML(this.round);

  }
}
