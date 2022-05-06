
let simonSequence=[];
let userSequence=[];
let gameOver = false;
let round = 0;
let score = 0;
let audio = [new Audio("./sounds/green.mp3"), new Audio("./sounds/red.mp3"), new Audio("./sounds/blue.mp3"), new Audio("./sounds/yellow.mp3"), new Audio("./sounds/wrong.mp3")];

//green = 0, red = 1, blue = 2, yellow = 3

//generate random number and push it to simonSequence
function newRound(){
  simonSequence.push(Math.floor(Math.random()*4));
  console.log("simonSequence is: "+simonSequence);
  playSequence(simonSequence)
  //showSequence(simonSequence[simonSequence.length-1]);//plays single sequnce (hard mode)
  userSequence=[];
};

function playLights(elem){
  switch (elem){
    case 0:
      $('.green').addClass("activeGreen");
      setTimeout(function(){
        $('.green').removeClass("activeGreen");
      },250)
      break;
    case 1:
      $('.red').addClass("activeRed");
      setTimeout(function(){
        $('.red').removeClass("activeRed");
      },250)
      break;
    case 2:
      $('.blue').addClass("activeBlue");
      setTimeout(function(){
        $('.blue').removeClass("activeBlue");
      },250)
      break;
    case 3:
      $('.yellow').addClass("activeYellow");
      setTimeout(function(){
        $('.yellow').removeClass("activeYellow");
      },250)
      break;
  }
}

function playAudio(elem){
  switch(elem){
    case 0:
      audio[0].play();
    case 1:
      audio[1].play();
    case 2:
      audio[2].play();
    case 3:
      audio[3].play();
  }
}

//plays sequence of lights and sounds
//only plays last value of sequence, make it play all
function playSequence(sequence){
  for(let i=0;i<=sequence.length-1;i++){
    setTimeout(function(){
      playAudio(sequence[i]);
      playLights(sequence[i]);
    },750*i);
  }
};

//increments round counter by 1
function changeLevel(){
  round++;
  $('#round').text("Round: "+round);
}

function addScore(){
  score+=10;
  $('#score').text("Score: "+score);
}

//looks for user input
//can click when sequence is playing (not ideal)
$('.gameButton').click(function(){
  let userClick = $(this).attr("class");
  switch(userClick.slice(11)){
    case "green":
      userSequence.push(0);
      playAudio(0);
      playLights(0);
      break;
    case "red":
      userSequence.push(1);
      playAudio(1);
      playLights(1);
      break;
    case "blue":
      userSequence.push(2);
      playAudio(2);
      playLights(2);
      break;
    case "yellow":
      userSequence.push(3);
      playAudio(3);
      playLights(3);
      break;
  }
  checkSequence(userSequence.length-1); //checks last value only
  addScore();
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
  audio[4].play();
  document.getElementsByClassName("overlay")[0].style.display="block";
  setTimeout(function(){
    $('body').css("background-color","#dbdbdb");
  },1500);
  round=0;
  score=-10;
  simonSequence=[];
}

//push start button to begin game
document.getElementsByTagName('button')[0].addEventListener('click',function(){
  document.getElementsByClassName("overlay")[0].style.display="none";
  setTimeout(function(){
    changeLevel();
    newRound();
  },1000);
});

//add settings; scoreboard; add abilities; maybe change sounds
