var form,player,game;
var playerCount = 0;

var gameState = 0;

function setup(){
  createCanvas(400,400);
  database = firebase.database();
  

  game = new Game();
  game.getState();
  game.start()
  
  
}

function draw(){
  background("white");
  
    
  
  
}

