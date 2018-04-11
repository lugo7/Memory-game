////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var Game = {
  blnkOrdr: [],
  plyrOrdr: [],
  gameOver: false,
  round: 0,

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
    this.NewRound();
  },

  NewRound: function(){
    document.getElementById('score').innerHTML = this.round;
    this.randomN();
  },

  randomN: function(){
    this.blnkOrdr.push(Math.floor((Math.random()*4)+1)); //generates a random number for main array
    this.blinkDiv();
  },

  blinkDiv: function(){
    for(let i=0; i<this.blnkOrdr.length;i++){
      let that = this;
      setTimeout(blink = function(){
        switch(that.blnkOrdr[i]){
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
    this.userRespose();
  },

  userRespose: function(){
    let that = this;
    for(let i=0;i<this.blnkOrdr.length;i++){
      document.getElementsByClassName('green')[0].addEventListener('click', function(){
        that.plyrOrdr.push(parseFloat(document.getElementsByClassName('green')[0].getAttribute('data-tile')));
        document.getElementsByClassName('green')[0].style.opactiy='1';
        setTimeout(function(){document.getElementsByClassName('green')[0].style.opacity="0.6";},500);
        that.checkUser(i);
      });
      document.getElementsByClassName('red')[0].addEventListener('click', function(){
        that.plyrOrdr.push(parseFloat(document.getElementsByClassName('red')[0].getAttribute('data-tile')));
        document.getElementsByClassName('red')[0].style.opacity='1';
        setTimeout(function(){document.getElementsByClassName('red')[0].style.opacity='0.6';},500);
        that.checkUser(i);
      });
      document.getElementsByClassName('blue')[0].addEventListener('click', function(){
        that.plyrOrdr.push(parseFloat(document.getElementsByClassName('blue')[0].getAttribute('data-tile')));
        document.getElementsByClassName('blue')[0].style.opacity="1";
        setTimeout(function(){document.getElementsByClassName('blue')[0].style.opacity="0.6";},500);
        that.checkUser(i);
      });
      document.getElementsByClassName('yellow')[0].addEventListener('click', function(){
        that.plyrOrdr.push(parseFloat(document.getElementsByClassName('yellow')[0].getAttribute('data-tile')));
        document.getElementsByClassName('yellow')[0].style.opacity="1";
        setTimeout(function(){document.getElementsByClassName('yellow')[0].style.opacity="0.6";},500);
        that.checkUser(i);
      });
      if(i===this.blnkOrdr.length){
        this.addRound();
      }
    }
  },

  checkUser: function(i){
    if(this.plyrOrdr[i]!==this.blnkOrdr[i]){
      this.gameOver = true;
      alert('Game Over');
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
