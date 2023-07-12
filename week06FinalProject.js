class Deck { // create initial deck
    constructor() {
       let cardDeck = [];
       let suits = ['spade', 'heart', 'diamond', 'club'];

        for (let i = 0; i < suits.length; i++) { // loop through suits array
            let character = '';
            for (let j = 2; j <= 14; j++) { // loop through values array
                switch (j) {
                    case 11:
                        character = 'Joker'
                        break;
                    case 12:
                        character = 'Queen'
                        break;
                    case 13:
                        character = 'King'
                        break;
                    case 14:
                        character = 'Ace'
                        break;
                    default:
                        character = j
                }

                let card = { // create a card object to push onto the deck array
                    suit: suits[i],
                    value: j,
                    character: character
                }

                cardDeck.push(card);
            }
        }
        console.log("deck before shuffle: " + JSON.stringify(cardDeck));


        // shuffle deck
        // Math.random gives a floating point >0 and <1
        // Math.floor gives you a rounded up whole number
        // Multiplying by array length will give you an index from 0 to the length of the array
        // This is a the Fisher Yates Method for shuffling an array
        // It shuffles the list in place starting with the last element of the array
        // The last item becomes a random index value and the random index becomes what was in i, then it repeats with the next index to the left and so on till it reaches iindex 0
        for (let i = cardDeck.length; i > 0; i--) {
            var randomIndex = Math.floor(Math.random) * (i + 1)
            var hold = cardDeck[i]; // save original value for swap
            cardDeck[i] = cardDeck[randomIndex] // make current value of i = the random index's value
            cardDeck[randomIndex] = hold // make value of the randomIndex equal to the original value of i
        }
        console.log("shuffled deck: " + JSON.stringify(cardDeck));
        return cardDeck;
    }
}

// player related fields & methods
class Players {
    constructor(points) {
        this.player1TotalPoints = 0;
        this.player2TotalPoints = 0;
    }

    compareCards(one, two) {
        if (one != two && one > two) {  // compare cards and update winner by one point - do nothing if cards are equal
            players.addPoints(one);
        } else if (one != two && two > one) {
            players.addPoints(two);
        }
    }

    addPoints(player) {
        if (player == one) {
            this.player1TotalPoints++;
        } else {
            this.player2TotalPoints++;
        }
    }

    detWinner() {
        if (this.player1TotalPoints > this.player2TotalPoints) {
            return "Player 1";
        } else {
            return "Player 2";
        }
    }
}

// main game logic
let deck = new Deck; // create new instance of Deck
console.log("deck: " + JSON.stringify(cardDeck));

// shuffleDeck = () => {
//     // shuffle deck
//     // Math.random gives a floating point >0 and <1
//     // Math.floor gives you a rounded up whole number
//     // Multiplying by array length will give you an index from 0 to the length of the array
//     // This is a the Fisher Yates Method for shuffling an array
//     // It shuffles the list in place starting with the last element of the array
//     // The last item becomes a random index value and the random index becomes what was in i, then it repeats with the next index to the left and so on till it reaches iindex 0
//     for (let i = deck.cardDeck.length; i > 0; i--) {
//         var randomIndex = Math.floor(Math.random) * (i + 1)
//         var hold = cardDeck[i]; // save original value for swap
//         cardDeck[i] = cardDeck[randomIndex] // make current value of i = the random index's value
//         cardDeck[randomIndex] = hold // make value of the randomIndex equal to the original value of i
//     }
// }

// console.log("deck before shuffle: " + JSON.stringify(deck.cardDeck));

// shuffleDeck();

// console.log("shuffled deck: " + JSON.stringify(deck.cardDeck));

// Use console.log(JSON.stringify(result)) to get the JSON in a string format.

let players = new Players;
// console.log("deck: " + deck.cardDeck);
// console.log("array length: " + deck.cardDeck.length);
// while (deck.cardDeck.length > 0) { // as long as there are cards in the deck
//     console.log("array length: " + deck.cardDeck.length);
//     let one = deck.cardDeck.pop; // deal a card to player 1
//     let two = deck.cardDeck.pop; // deal a card to player 2
//     console.log("one: " + one + ", two" + two);
//     deck.compareCards(one, two); // execute player compare method
// }

// execute players determine winner method and display winner and total points for each player
alert(`The winner is: ${players.detWinner()}!
            Player 1 had ${players.player1TotalPoints} and
            player 2 had ${players.player2TotalPoints}`);