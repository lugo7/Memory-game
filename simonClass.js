
var Game = {
  blnkOrdr: [],
  plyrOrdr: [],
  copy: [],
  gameOver: false,
  round: 1,

  init: function(){
    let that = this;
    document.getElementById("startButton").addEventListener('click', function(){
      that.startGame();
    });
  },

  startGame: function(){
    this.blnkOrdr = [];
    this.plyrOrdr = [];
    this.copy = [];
    this.gameOver = false;
    this.round = 0;
    this.newRound();
  },

  randomN: function(){
    this.blnkOrdr.push(Math.floor((Math.random()*4)+1)); //generates a random number for main array
    console.log(this.blnkOrdr);
  },

  newRound: function(){
    document.getElementById('round').innerHTML = this.round+1;
    this.randomN();
    this.plyrOrdr = [];
    this.copy.push(this.blnkOrdr);
    this.blinkDiv();
  },

  blinkDiv: function(){
    for(let i=0; i<this.blnkOrdr.length;i++){
      let that = this; //don't remove
      setTimeout(blink = function(){
        switch(that.blnkOrdr[i]){
          case 1:
            document.getElementsByClassName('green')[0].style.opactiy='1';
            setTimeout(function(){document.getElementsByClassName('green')[0].style.opacity="0.6";},700);
            break;
          case 2:
            document.getElementsByClassName('red')[0].style.opacity='1';
            setTimeout(function(){document.getElementsByClassName('red')[0].style.opacity='0.6';},700);
            break;
          case 3:
            document.getElementsByClassName('blue')[0].style.opacity="1";
            setTimeout(function(){document.getElementsByClassName('blue')[0].style.opacity="0.6";},700);
            break;
          case 4:
            document.getElementsByClassName('yellow')[0].style.opacity="1";
            setTimeout(function(){document.getElementsByClassName('yellow')[0].style.opacity="0.6";},700);
            break;
        }
      },800);
    }
    this.userRespose();
  },

  userRespose: function(){
    let that = this;//don't remove
    for(let i=0;i<this.blnkOrdr.length;i++){
      if(typeof window.addEventListener === 'function'){
        document.getElementsByClassName('green')[0].addEventListener('click', function(){
          that.plyrOrdr.push(parseFloat(document.getElementsByClassName('green')[0].getAttribute('data-tile')));
          document.getElementsByClassName('green')[0].style.opactiy='1';
          setTimeout(function(){document.getElementsByClassName('green')[0].style.opacity="0.6";},500);
          that.copy.shift();
          that.checkUser(i);
        });
        document.getElementsByClassName('red')[0].addEventListener('click', function(){
          that.plyrOrdr.push(parseFloat(document.getElementsByClassName('red')[0].getAttribute('data-tile')));
          document.getElementsByClassName('red')[0].style.opacity='1';
          setTimeout(function(){document.getElementsByClassName('red')[0].style.opacity='0.6';},500);
          that.copy.shift();
          that.checkUser(i);
        });
        document.getElementsByClassName('blue')[0].addEventListener('click', function(){
          that.plyrOrdr.push(parseFloat(document.getElementsByClassName('blue')[0].getAttribute('data-tile')));
          document.getElementsByClassName('blue')[0].style.opacity="1";
          setTimeout(function(){document.getElementsByClassName('blue')[0].style.opacity="0.6";},500);
          that.copy.shift();
          that.checkUser(i);
        });
        document.getElementsByClassName('yellow')[0].addEventListener('click', function(){
          that.plyrOrdr.push(parseFloat(document.getElementsByClassName('yellow')[0].getAttribute('data-tile')));
          document.getElementsByClassName('yellow')[0].style.opacity="1";
          setTimeout(function(){document.getElementsByClassName('yellow')[0].style.opacity="0.6";},500);
          that.copy.shift();
          that.checkUser(i);
        });
      };
    }
  },

  checkUser: function(i){
    console.log(this.plyrOrdr);
    console.log(this.copy);
    if(this.copy==undefined || this.copy.length<1){
      this.newRound();
    }
    else if(this.plyrOrdr[i]!==this.blnkOrdr[i]){
      this.gameOver = true;
      alert('Game Over');
      //gameOver();
      return;
    }
  },

  addRound: function(){
    this.round += 1;
    this.NewRound();
  },
};

window.onload = function(){
  Game.init();
}

////////////////////////////////////////////////
