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
            // this.cardDeck[randomIndex], this.cardDeck[i] = this.cardDeck[i], this.cardDeck[randomIndex]  cannot get this to work!!!
            // keep for debugging
            // console.log(`i: ${i} - randomIndex: ${randomIndex} - SHUFFLED DECK CARD: ${this.cardDeck[i].value} -- ${this.cardDeck[i].suit}\n`);
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

    compareCards(valuePlayerOne, valuePlayerTwo) { // compare cards to find winner
        if (valuePlayerOne.value === valuePlayerTwo.value) { // just keeping a tally if they are equal - no extra coding required
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

    addPoints(player) { // add points to winner
        if (player == 'noOneWon') {
            this.ties++;
        } else if (player == 'playerOne') {
            this.player1TotalPoints++;
        } else {
            this.player2TotalPoints++;
        }
    }

    playGame() { // play game
        while(deck.cardDeck.length > 0) { // as long as there are cards in the deck
            let one = deck.cardDeck.pop(); // deal a card to player 1
            let two = deck.cardDeck.pop(); // deal a card to player 2
            players.compareCards(one, two); // execute player compare method
            // keep for debugging
            // console.log(`PLAY GAME: - player one: ${one.value}, ${one.suit} - player two: ${two.value}, ${two.suit}\n`);
        }
        return deck.cardDeck.length; // for unit tests
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

    displayWinner() {
        // execute players determine winner method and display winner and total points for each player
        alert(`
        The winner is: ${this.detWinner()}!
            - Player 1 had ${this.player1TotalPoints} and
            - Player 2 had ${this.player2TotalPoints}
        * There were ${this.ties} ties`);
    }
}

// main game logic
let deck = new Deck; // create new instance of Deck
deck.shuffleDeck();

let players = new Players; // create new instance of Players
players.playGame(); // play game

players.displayWinner(); // determine and display winner