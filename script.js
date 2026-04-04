// go

// Rules

//     The deck is split between two players. The player's cards are read from left to right, where the leftmost card is the top of the deck.
//     A round consists of both players playing at least one card.
//     Players take turns placing the top card of their deck onto a central pile.
//     If the card is a number card (2-10), play simply passes to the other player.
//     If the card is a payment card, a penalty must be paid:
//         J → opponent must pay 1 card
//         Q → opponent must pay 2 cards
//         K → opponent must pay 3 cards
//         A → opponent must pay 4 cards
//     If the player paying a penalty reveals another payment card, that player stops paying the penalty. The other player must then pay a penalty based on the new payment card.
//     If the penalty is fully paid without interruption, the player who placed the last payment card collects the central pile and places it at the bottom of their deck. That player then starts the next round.
//     If a player runs out of cards and is unable to play a card (either while paying a penalty or when it is their turn), the other player collects the central pile.
//     The moment when a player collects cards from the central pile is called a trick.
//     If a player has all the cards in their possession after a trick, the game ends.
//     The game enters a loop as soon as the decks are identical to what they were earlier during the game, not counting number cards!

const simulateGame = (playerA, playerB) => {
  const regex = /^[J | Q | K | A]$/;
  const payCards = { J: 1, Q: 2, K: 3, A: 4 };
  let output = { status: "loop", cards: 0, tricks: 0 };
  let centralPile = [];
  let switchPlayer = true;
  let loopBreak = false;
  let tricks = 0;
  let cards = 0;

  //#region Switch Player
  const handleSwitch = (player) => {
    switchPlayer = !switchPlayer;
    player = switchPlayer ? playerA : playerB;
    return player;
  };
  //#endregion

  //#region Deal Card
  const dealCard = (player, module) => {
    // Check if player is out of cards
    if (player.length === 0) {
      tricks++;
      endGame(player);
      return;
    }

    // Prepare card
    let card = player.shift();
    // Add card to central pile
    centralPile.push(card);
    cards++;
    // Check for face card
    if (regex.test(card)) {
      penaltyLoop(player, card);
    } 
    else {
      // Deal a card
      if (module === "main") {
        player = handleSwitch(player);
        dealCard(player, "main");
      } 
      else {
        return player;
      }
    }
  };
  //#endregion

  //#region Penalty Loop
  const penaltyLoop = (player, card) => {
    player = handleSwitch(player);
    let loop = payCards[card];

    for (let x = 0; x < loop; x++) {
      if (loopBreak) break;
      dealCard(player, "loop");
    }

    if (!loopBreak) {
      // player = handleSwitch(player);
      centralPile.reverse();
      player.push(...centralPile);
      centralPile = [];
      tricks++;
      // player = handleSwitch(player);
      if (player.length === 0) {
        endGame(player);
      } 
      else {
        dealCard(player, "main");
      }
    } 
    else {
      centralPile = [];
      return;
    }
  };
  //#endregion

  //#region End Game
  const endGame = (player) => {
    player = handleSwitch(player);
    centralPile.reverse();
    player.push(...centralPile);
    output = {
      status: "finished",
      cards: cards,
      tricks: tricks,
    };
    loopBreak = true;
    return;
  };
  //#endregion

  dealCard(playerA, "main");

  return output;
};

// // two cards, one trick
let playerA = ["2"];
let playerB = ["3"];
// const res0 = simulateGame(playerA, playerB); //  .toEqual{ status: "finished", cards: 2, tricks: 1 };

// // three cards, one trick
// playerA = ["2", "4"];
// playerB = ["3"];
// const res1 = simulateGame(playerA, playerB); //  .toEqual{ status: "finished", cards: 3, tricks: 1 };

// // four cards, one trick
// playerA = ["2", "4"];
// playerB = ["3", "5", "6"];
// const res2 = simulateGame(playerA, playerB); //  .toEqual{ status: "finished", cards: 4, tricks: 1 };

// the ace reigns supreme
playerA = ["2", "A"];
playerB = ["3", "4", "5", "6", "7"];
const res3 = simulateGame(playerA, playerB); //  .toEqual{ status: "finished", cards: 7, tricks: 1 };

// // the king beats ace
// playerA = ["2", "A"];
// playerB = ["3", "4", "5", "6", "K"];
// const res4 = simulateGame(playerA, playerB); //  .toEqual{ status: "finished", cards: 7, tricks: 1 };

// // the queen seduces the king
// playerA = ["2", "A", "7", "8", "Q"];
// playerB = ["3", "4", "5", "6", "K"];
// const res5 = simulateGame(playerA, playerB); //  .toEqual{ status: "finished", cards: 10, tricks: 1 };

// // the jack betrays the queen
// playerA = ["2", "A", "7", "8", "Q"];
// playerB = ["3", "4", "5", "6", "K", "9", "J"];
// const res6 = simulateGame(playerA, playerB); //  .toEqual{ status: "finished", cards: 12, tricks: 1 };

// the 10 just wants to put on a show
playerA = ["2", "A", "7", "8", "Q", "10"];
playerB = ["3", "4", "5", "6", "K", "9", "J"];
const res7 = simulateGame(playerA, playerB); //  .toEqual{ status: "finished", cards: 13, tricks: 1 };

// simple loop with decks of 3 cards
playerA = ["J", "2", "3"];
playerB = ["4", "J", "5"];
const res8 = simulateGame(playerA, playerB); //  .toEqual{ status: "loop", cards: 8, tricks: 3 };

// // two tricks
// playerA = ["J"];
// playerB = ["3", "J"];
// const res9 = simulateGame(playerA, playerB); //  .toEqual{ status: "finished", cards: 5, tricks: 2 };

// // more tricks
// playerA = ["J", "2", "4"];
// playerB = ["3", "J", "A"];
// const res10 = simulateGame(playerA, playerB); //  .toEqual{ status: "finished", cards: 12, tricks: 4
// // };

// // simple loop with decks of 4 cards
// playerA = ["2", "3", "J", "6"];
// playerB = ["K", "5", "J", "7"];
// const res11 = simulateGame(playerA, playerB); //  .toEqual{ status: "loop", cards: 16, tricks: 4 };

// console.log(res0);
// console.log(res1);
// console.log(res2);
console.log(res3);
// console.log(res4);
// console.log(res5);
// console.log(res6);
console.log(res7);
console.log(res8);
// console.log(res9);
// console.log(res10);
// console.log(res11);
