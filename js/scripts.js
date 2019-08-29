
// Business Logic/-----------

var playerOne = "";
var playerTwo = "";

var roleDice = function() {
  return Math.Floor(6*Math.Random())+1;

}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playername;

}
// Checking for 1 -----
Player.prototype.rollone = function(){
  if (this.roll === 1) {
    this.tempscore = 0;
    alert ("Sorry" + this.playername + " , end of your turn, next players turn!");
  }
}
  // hold ------
Player. prototype.hold = function(){
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playerName + ", next players turn");

}

// Checking for a winner ----
Player .prototype.winnerCheck = function(){
  if(this.total >= 100){
    alert(this.playerName + ", You have won!!!! Congrates on being the winner winner for this game!");
  }
}
// new Game ------------
Player.prototype.newGame= function(){
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName ="";
}
// Clearing values ---------
var clearValues= function(){
  $(".player1Name").val();
  $(".player2Name").val();
}
