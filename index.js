function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6);
    return randomNumber;
}

var images = [];
for (var i = 0; i < 6; i++) {
    images.push(`images/dice${i+1}.png`);
}

var player1 = rollDice();
var dice1 = images[player1];

var player2 = rollDice();
var dice2 = images[player2];

// Change the styles
document.querySelector(".img1").src = dice1;
document.querySelector(".img2").src = dice2;
var h1 = document.querySelector("h1");
if (player1 > player2) {
    h1.textContent = "⭐️ Player 1 Wins!";
}
else if (player2 > player1) {
    h1.textContent = "Player 2 Wins! ⭐️";
}
else {
    h1.textContent = "⭐️ TIE ⭐️";
}
