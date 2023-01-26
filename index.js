let cards = []; 
let sum = 0;
let message = "";
let isAlive = false;
let hasBlackJack = false
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;

  }
}

function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack=true
  } else {
    message = "You're out of the game! 😭";
    isAlive = false

  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function startGame() {
  isAlive = true;

  let firstCard = getRandomCard();

  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}

function newCard() {
if(isAlive && hasBlackJack===false)
{ 
  let thirdCard = getRandomCard();
  sum += thirdCard;
  cards.push(thirdCard);
  renderGame();}

}
