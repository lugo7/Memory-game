class gameBoard{
  constructor(height,width,red,blue,yellow,green){
    this.height=100;
    this.width=100;
    this.red = document.getElementById('red');
    this.blue = document.getElementById('blue');
    this.yellow = document.getElementById('yellow');
    this.green = document.getElementById('green');
  }
}
function genRandomNum(){
  var rN = Math.floor((Math.random()*4));
  console.log(rN);
  return rN;
}
function main(){
  var sequence = [];
  sequence.push(genRandomNum());
}

var startButton = document.getElementById('startButton');
startButton.addEventListener('click', main(), false);

/*
wait for start button event **
generate random number **
add to array **
use array to light up game board
wait for user input
if(input==true) repeat from step 2
else() game over, record score.
*/
