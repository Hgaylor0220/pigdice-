
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

// User Interface Logic -------
$(document).ready(function() {

  $("button#start").click(function(event) {
    player1 = new Player(true);
     player2 =  new Player(false);
     $(".player-console").show();
     $(".start-menu").hide();

    var player1Name = $(".player1Name").val();
    var player2Name = $(".player2Name").val();

    player1.player1name = player1Name;
    player2.player2name = player2Name;

  });

  $("button#new-game").click(function(event) {
    $(".player-console").hide();
    clearvalues();
    player1.newGame();
    player1.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#die-role-1").empty();
    $("#round-total-2").empty();
    $("#total-score-2").empty();
    $("#die-role-2").empty();

    $(".start-menue").show();
  });

  ("button#player1-roll").click(function(event){
    player1.roll=roleDice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.tempscore);
  });
});
