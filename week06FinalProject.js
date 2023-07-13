class Deck { // create initial deck
    constructor() {
       this.cardDeck = [];
       this.suits = ['spade', 'heart', 'diamond', 'club'];

        let k = 0;
        for (let i = 0; i < this.suits.length; i++) { // loop through suits array
            let char = '';
            for (let j = 2; j <= 14; j++) { // loop through values array
                switch (j) {
                    case 11:
                        char = 'Joker'
                        break;
                    case 12:
                        char = 'Queen'
                        break;
                    case 13:
                        char = 'King'
                        break;
                    case 14:
                        char = 'Ace'
                        break;
                    default:
                        char = j
                }

                this.card = { // create a card object to push onto the deck array
                    cardIndex: ++k,
                    suit: this.suits[i],
                    value: j,
                    character: char
                }
                this.cardDeck.push(this.card);
            }
        }
    }

    // shuffle deck
    // don't need to run for the first index, so that is why i > 0
    // Math.random gives a floating point >0 and <1
    // Math.floor gives you a rounded up whole number
    // Multiplying by array length will give you an index from 0 to the length of the array
    // This is a the Fisher Yates Method for shuffling an array
    // It shuffles the list in place starting with the last element of the array
    // The last item becomes a random index value and the random index becomes what was in i, then it repeats with the next index to the left and so on till it reaches iindex 0
    shuffleDeck () {
        for(let i = this.cardDeck.length - 1; i > 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1))
            var hold = this.cardDeck[i]; // save original value for swap
            this.cardDeck[i] = this.cardDeck[randomIndex] // make current value of i = the random index's value
            this.cardDeck[randomIndex] = hold // make value of the randomIndex equal to the original value of i
            // [this.cardDeck[i], this.cardDeck[randomIndex]] = [this.cardDeck[randomIndex], this.cardDeck[i]]
        }
    }
}

// player related fields & methods
class Players {
    constructor(points) {
        this.player1TotalPoints = 0;
        this.player2TotalPoints = 0;
        this.ties = 0;
    }

    compareCards(valuePlayerOne, valuePlayerTwo) {
        if (valuePlayerOne.value < 2 || valuePlayerTwo.value < 2 || valuePlayerOne.value > 14 || valuePlayerTwo.value > 14) { // error if values not 2-14
            throw new Error('Card value must be between 2 and 14');
        } else if (valuePlayerOne.value === valuePlayerTwo.value) { // just keeping a tally if they are equal - no extra coding required
            players.addPoints('noOneWon')
            return 'noOneWon'; // included return for unit test validation
        } else if (valuePlayerOne.value > valuePlayerTwo.value) { // compare cards and update player 1 by one by one point if they won
            players.addPoints('playerOne');
            return 'playerOne' // included return for unit test validation
        } else { // update player 2 by one by one point if they won
            players.addPoints('playerTwo');
            return 'playerTwo' // included return for unit test validation
        }
    }

    addPoints(player) {
        if (player == 'noOneWon') {
            this.ties++;
        } else if (player == 'playerOne') {
            this.player1TotalPoints++;
        } else {
            this.player2TotalPoints++;
        }
    }

    detWinner() {
        if (this.player1TotalPoints > this.player2TotalPoints) {
            return "Player 1";
        } else if (this.player1TotalPoints < this.player2TotalPoints) { 
            return "Player 2";
        } else {
            return "No one! The game ended in a tie";
        }
    }
}

// main game logic
let deck = new Deck; // create new instance of Deck
deck.shuffleDeck();
let players = new Players;

// play game
while (deck.cardDeck.length > 0) { // as long as there are cards in the deck
    let one = deck.cardDeck.pop(); // deal a card to player 1
    let two = deck.cardDeck.pop(); // deal a card to player 2
    players.compareCards(one, two); // execute player compare method
    console.log(`player one: ${one.value}, ${one.suit}\nplayer two: ${two.value}, ${two.suit}\n==================================`);
}

// execute players determine winner method and display winner and total points for each player
alert(`
The winner is: ${players.detWinner()}!
  - Player 1 had ${players.player1TotalPoints} and
  - Player 2 had ${players.player2TotalPoints}
* There were ${players.ties} ties`); 

// ===========================================================================================
//                                      code graveyard
// ===========================================================================================

// Print card table???
// for (d = 0; d < deck.cardDeck.length - 1; d++) {
    // console.log(deck.cardDeck[0].card.suit, deck.card.value, deck.card.character);
    // console.table(deck.card)
    // console.log(deck.cardDeck[d].card.character)
    // console.log(deck.cardDeck[d].card)
// }

// console.log("deck before shuffle: " + JSON.stringify(deck.cardDeck));

// [this.cardDeck[i], this.cardDeck[randomIndex]] = [this.cardDeck[randomIndex], this.cardDeck[i]];  why isn't this working?
// console.log("deck AFTER shuffle: " + JSON.stringify(deck.cardDeck));

// console.log("deck before pop stringify after shuffle: " + JSON.stringify(deck.cardDeck));
// console.log("bef index; " + this.cardDeck[i].card);

// console.log("deck stringify: " + JSON.stringify(deck.cardDeck));

// console.log("in create suit: " + this.cardDeck[j].card.suit)
// console.log("in create value: " + this.card.value)
// console.log("in create character: " + this.card.character)

// console.log(deck.cardDeck[d].card)
// console.log("aft index: " + this.cardDeck[i]);
// console.log("in shuffle suit: " + this.cardDeck[i].card.suit)
// console.log("in shuffle value: " + this.card.value)
// console.log("in shuffle character: " + this.card.character)

// console.log("one: " + one.value + ", two: " + two.value);
// players.compareCards(one.value, two.value); // execute player compare method
// console.log("deck before shuffle: " + JSON.stringify(deck.cardDeck));
// console.table(deck.card)

// console.log("deck: " + deck.cardDeck);

// console.log("array length bef: " + deck.cardDeck.length);
// console.log("array length aft: " + deck.cardDeck.length);

