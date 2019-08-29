
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
