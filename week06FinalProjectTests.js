const expect = chai.expect
const assert = chai.assert
const should = chai.should

describe('Week 6 Final Tests', () => {
    describe('Test players method to compare cards', () => {
        it('#should pass - compare playerOne is greater than playerTwo ', () => {
            expect(players.compareCards(cardPlayerOne = {cardIndex: 1, suit: 'spade', value: 9, character: 9}, cardPlayerTwo = {cardIndex: 2, suit: 'heart', value: 5, character: 5 })).to.equal('playerOne');
        });

        it('#should pass - compare playerTwo is greater than playerOne ', () => {
            expect(players.compareCards(cardPlayerOne = {cardIndex: 45, suit: 'diamond', value: 12, character: 'queen' }, cardPlayerTwo = { cardIndex: 2, suit: 'heart', value: 14, character: 'ace' }))
            .to.equal('playerTwo');
        })

        it('#should pass - compare playerOne is equal to playerTwo ', () => {
            expect(players.compareCards(cardPlayerOne = {cardIndex: 32, suit: 'spade', value: 3, character: 3 }, cardPlayerTwo = { cardIndex: 15, suit: 'diamond', value: 3, character: 3 })).to.equal('noOneWon');
        })
    })

    describe('Test players method to add points to winner', () => {
        it('#should pass - Test players method to add points to playerOne', () => {
            let playerOne = players.player1TotalPoints;
            players.addPoints('playerOne');
            expect(players.player1TotalPoints).to.equal(playerOne + 1);
        })

        it('#should pass - Test players method to add points to playerTwo', () => {
            let playerTwo = players.player2TotalPoints;
            players.addPoints('playerTwo');
            expect(players.player2TotalPoints).to.equal(playerTwo + 1);
        })
    })

    describe('Test players method to determine winner', () => {
        testDetWinner = (x, y) => { // local function used in tests
            players.player1TotalPoints = 0;
            players.player2TotalPoints = 0;
            for (let i = 0; i <= x; i++) {
                players.addPoints('playerOne');
            }
            for (let j = 0; j <= y; j++) {
                players.addPoints('playerTwo');
            }
            return players.detWinner();
        }

        it('#should pass - Test players method to add points to player one', () => {
            expect(testDetWinner(5, 3)).to.equal('Player 1');
        })

        it('#should pass - Test players method to add points to player two', () => {
            expect(testDetWinner(1, 9)).to.equal('Player 2');
        })
   
        it('#should pass - Test players method to be a tie', () => {
            expect(testDetWinner(5, 5)).to.equal('No one! The game ended in a tie');
        })
     })

    describe('Test play game empties cardDeck array during dealing', () => {
        it('#should pass - Test all cards are dealt', () => {
            let deck = new Deck; // creat new instance of Deck
            deck.shuffleDeck(); // shuffle deck
            let players = new Players; // create new instance of Players
            expect(players.playGame()).to.equal(0); // deal cards and check cards were all dealt
        })
    })

    describe('Shuffle deck', () => {
        it('#should pass - Initial deck should not be the same s shuffled deck', () => {
            let deck = new Deck;
            let saveDeck = deck;
            deck.shuffleDeck(); // Test not equal to original?
            expect(saveDeck).to.eql(deck);
        })
    })

    describe('Test build deck', () => 

        //okay need to have pass finally. current test is a fail
        it('#should pass - Test initial deck has 52 cards', () => {
            let deck = new Deck; // creat new instance of Deck
            expect(deck.cardDeck.length).to.equal(52); // check deck is 52
        })

        it('#should pass - test cards not < 2 or > 14', () => {
            let deck = new Deck; // create new instance of Deck
            deck.cardDeck[5].value = 1;
            let cardValueErrors = 0;   

            // rephrase, make a function and keep calling it
            if (deck.cardDeck[5].value < 2 || deck.cardDeck[6].value > 14) {
                cardValueErrors ++;
            }
            expect(cardValueErrors).to.equal(0);
        })
    })

})