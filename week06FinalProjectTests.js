const expect = chai.expect
const assert = chai.assert

describe('Week 6 Final Tests', () => {
    describe('Test players method to compare cards', () => {

        it('#should pass - compare playerOne is greater than playerTwo ', () => {
            expect(players.compareCards(cardPlayerOne = {cardIndex: 1, suit: 'spade', value: 9, character: 9}, cardPlayerTwo = {cardIndex: 2, suit: 'heart', value: 5, character: 5 })).to.equal('playerOne')
        });

        it('#should pass - compare playerTwo is greater than playerOne ', () => {
            expect(players.compareCards(cardPlayerOne = {cardIndex: 45, suit: 'diamond', value: 12, character: 'queen' }, cardPlayerTwo = { cardIndex: 2, suit: 'heart', value: 14, character: 'ace' }))
            .to.equal('playerTwo')
        })

        it('#should pass - compare playerOne is equal to playerTwo ', () => {
            expect(players.compareCards(cardPlayerOne = {cardIndex: 32, suit: 'spade', value: 3, character: 3 }, cardPlayerTwo = { cardIndex: 15, suit: 'diamond', value: 3, character: 3 })).to.equal('noOneWon')
        })

        // it('#should fail - compare cannot accept a value < 2 or > 14', () => {
        //     expect(players.compareCards(cardPlayerOne = { cardIndex: 32, suit: 'spade', value: 1, character: 3 }, cardPlayerTwo = { cardIndex: 15, suit: 'diamond', value: 55, character: 3 })).to.throw('Error: Card value must be between 2 and 14');
        // })

    })

    describe('Test players method to add points to winner', () => {
        
        it('#should pass - Test players method to add points to playerOne', () => {
            let playerOne = players.player1TotalPoints;
            players.addPoints('playerOne')
            expect(players.player1TotalPoints).to.equal(playerOne + 1);
        })

        it('#should pass - Test players method to add points to playerTwo', () => {
            let playerTwo = players.player2TotalPoints;
            players.addPoints('playerTwo')
            expect(players.player2TotalPoints).to.equal(playerTwo + 1);
        })

        // it('#should fail - Test players method to add points to playerOne', () => {
        //     let playerTwo = players.player2TotalPoints;
        //     players.addPoints('playerTwo')
        //     expect(players.player2TotalPoints).to.equal(playerTwo + );
        // })
    })

    describe('Test players method to determine winner', () => {
        testDetWinner = (x, y) => {
            players.player1TotalPoints = 0
            players.player2TotalPoints = 0

            for (let i = 0; i <= x; i++) {
                players.addPoints('playerOne')
            }
            for (let j = 0; j <= y; j++) {
                players.addPoints('playerTwo')
            }
            return players.detWinner();
        }

        it('#should pass - Test players method to add points to player one', () => {
            expect(testDetWinner(5, 3)).to.equal('Player 1');
        })

        it('#should pass - Test players method to add points to player two', () => {
            expect(testDetWinner(1, 9)).to.equal('Player 2');
        })
   
        it('#should pass - Test players method be a tie', () => {
            expect(testDetWinner(5, 5)).to.equal('No one! The game ended in a tie');
        })
   
        // it('#should fail - xxxxxx', () => {
            // expect(testDetWinner(5, 5)).to.equal('No one! The game ended in a tie');
        // })

    })

    describe('Test while play game loop?', () => {


    })

    describe('shuffle deck?', () => {


    })

    describe('Test build deck?', () => {


    })

})

