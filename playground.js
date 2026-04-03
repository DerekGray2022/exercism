// go

//#region Deal Card
const dealCard = (player) => {
  let centralPile = [];
  let card = player.shift();
  const payCards = { J: 1, Q: 2, K: 3, A: 4 };

  // Deal Card
  centralPile.push(card);

  // Check for face card
  if (card === "J" || "Q" || "K" || "A") {
    // Enter Penalty Card Loop
    console.log(payCards[card]);
  }

  // Check if player has cards left
  if (player.length === 0) {
    // Deal with END OF GAME
    // return
  }

  return;
};
//#endregion

dealCard(["K"]);
