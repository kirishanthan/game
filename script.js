var userChoice = "";
$(document).ready(function(){
    $(".rock").click(function(){
      $(".paper").slideUp();
      $(".scissors").slideUp();
      userChoice = "Rock";
      game();

    });
    $(".paper").click(function(){
      $(".rock").slideUp();
      $(".scissors").slideUp();
      userChoice = "Paper";

    });
     $(".scissors").click(function(){
      $(".rock").slideUp();
      $(".paper").slideUp();
      userChoice = "Scissors";

    });
});

var game = function(){
var cchoice = Math.random();
var uchoice = userChoice;
if (cchoice <= 0.33){
  cchoice = "Rock";
}
else if(cchoice <= 0.66){
  cchoice = "Paper";
}
else{
  cchoice = "Scissors";
}
var results;

if(uchoice === cchoice){
    results = "Its a tie!";
}
else if(uchoice === "Rock"){
  if(cchoice === "Paper"){
    results = "Paper Wins";
  }
  else if(cchoice ==="Scissors"){
    results = "Rock Wins";
  }
}
else if(uchoice === "Paper"){
  if(cchoice === "Scissors"){
    results = "Scissors Wins";
  }
  else{
    results = "Paper Wins";
  }
}

else if(uchoice === "Scissors"){
  if(cchoice === "Rock"){
    results = "Rock Wins";
  }
  else{
    results = "Scissors Wins";
  }
}
document.write("<font size='24'><b>" + results + "</font></b><br>");
document.write("<font size='14'>Your choice is " + uchoice + "</font><br>");
document.write("<font size='14'>Computer's Choice is " + cchoice + "</font></b>");
document.write("<font size='14'>Need a lot more to learn</font></b>");
};
