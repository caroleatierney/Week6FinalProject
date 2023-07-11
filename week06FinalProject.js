class Card {
    constructor(suit, value, character) {
        this.suit = suit;
        this.value = value;
        this.character = character;
    }
}

class Players {
    constructor(points) {
        this.player1TotalPoints = 0;
        this.player2TotalPoints = 0;
    }

    addPoints(player) {
        if (player == one) {
            this.player1TotalPoints ++;
        } else {
            this.player2TotalPoints ++;
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

class Deck extends Card {
    constructor() {
        super(suit);
        super(value);
        super(character);
        this.cardsArray = [];
    }

    // create initial deck
    newDeck () {
        let suit = '';
        let character = '';
        let value = 0;
        const suits = ['spade', 'heart', 'diamond', 'club'];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 2; j <= 14; j++) {
                suit = suits[i];
                value = j;
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
                        character = 'j'
                        break;
                }
                let card = new Card(suit, value, character)
                const square = new Rectangle(10, 10);
                this.cardsArray.push
            }
        }
    }

    // shuffle deck
    shuffleDeck () {
        // tbd!!!
    }

    // dealHands
    dealHands () {
        let players = new Players;
        while (this.cardsArray.length > 0) { // as long as there are cards in the deck
            let one = this.cardsArray.pop; // deal a card to player 1
            let two = this.cardsArray.pop; // deal a card to player 2
            this.compareCards(one, two) // execute player compare method
        }

        // execute players determine winner method and display winner and total points for each player
        alert(`The winner is: ${players.detWinner()}!
               Player 1 had ${players.player1TotalPoints} and
               player 2 had ${players.player2TotalPoints}`)
    }

    compareCards() {
        if (one > two) { // compare cards and update winner by one point - do nothing if cards are equal
            players.addPoints(one);
        } else if (two > one) {
            players.addPoints(two);
        }
    }
}

deck = new Deck; // create new instance of deck
deck.newDeck(); // create actual deck
deck.dealHands(); // play the game