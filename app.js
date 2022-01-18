function getRandom() {
    return Math.floor(Math.random() * 6) + 1;
}
let h1 = document.querySelector("h1");
let player1 = document.querySelector(".img1");
let player2 = document.querySelector(".img2");
let player1Dice = getRandom();
let player2Dice = getRandom();
player1.setAttribute("src", `images/dice${player1Dice}.png`);
player2.setAttribute("src", `images/dice${player2Dice}.png`);

if (player1Dice > player2Dice) {
    h1.textContent = "Player 1 Wins!";
} else if (player1Dice < player2Dice) {
    h1.textContent = "Player 2 Wins!";
} else {
    h1.textContent = "Refresh to try again!";
}
