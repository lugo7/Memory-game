//////////////////////////
////Simon Says Clone//////
//////////////////////////
//////////////////////////

let simonSequence=[];
let userSequence=[];
let gameOver = false;
let round = 0;
let audio = [new Audio("./sounds/green.mp3"), new Audio("./sounds/red.mp3"), new Audio("./sounds/blue.mp3"), new Audio("./sounds/yellow.mp3"), new Audio("./sounds/wrong.mp3")];

//green = 0, red = 1, blue = 2, yellow = 3

//press Enter key to begin game
document.addEventListener('keydown', function(e){
  if(e.keyCode === 13){
    newRound();
  }
});

//generate random number and push it to simonSequence
function newRound(){
  simonSequence.push(Math.floor(Math.random()*4));
  console.log("simonSequence is: "+simonSequence);
  showSequence(simonSequence[simonSequence.length-1]);
  changeLevel();
  userSequence=[];
};

function showSequence(sequence){
  switch (sequence){
    case 0:
      audio[0].play();
      $('#green').addClass("dissapear");
      setTimeout(function(){
        $('#green').removeClass("dissapear");
      },250)
      break;
    case 1:
      audio[1].play();
      $('#red').addClass("dissapear");
      setTimeout(function(){
        $('#red').removeClass("dissapear");
      },250)
      break;
    case 2:
      audio[2].play();
      $('#blue').addClass("dissapear");
      setTimeout(function(){
        $('#blue').removeClass("dissapear");
      },250)
      break;
    case 3:
      audio[3].play();
      $('#yellow').addClass("dissapear");
      setTimeout(function(){
        $('#yellow').removeClass("dissapear");
      },250)
      break;
  }
};

function changeLevel(){
  round++;
  $('#round').text(round);
};

$('.gameButton').click(function(e){
  let userClick = $(this).attr("id");
  switch(userClick){
    case "green":
      userSequence.push(0);
      showSequence(0);
      break;
    case "red":
      userSequence.push(1);
      showSequence(1);
      break;
    case "blue":
      userSequence.push(2);
      showSequence(2);
      break;
    case "yellow":
      userSequence.push(3);
      showSequence(3);
      break;
  }
  checkSequence(userSequence.length-1);
});

function checkSequence(arrayIndex){
  if(userSequence[arrayIndex] === simonSequence[arrayIndex]){
    if(simonSequence.length === userSequence.length){
      setTimeout(function(){
        newRound();
      },1000);
    }
  }
  else{
    launchError();
  }
};

function launchError(){
  $('body').css("background-color","red");
  $('h1').text("Game Over");
  setTimeout(function(){
    $('h1').text("Press the Enter Key to start");
    $('body').css("background-color","#ccc;");
  },1500);
  audio[4].play();
  round=0;
  simonSequence=[];
}
