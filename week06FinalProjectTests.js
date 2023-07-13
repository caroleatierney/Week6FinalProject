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

        it('#should fail - compare cannot accept a value < 2 or > 14', () => {
            players.compareCards(cardPlayerOne = {cardIndex: 32, suit: 'spade', value: 1, character: 3 }, cardPlayerTwo = { cardIndex: 15, suit: 'diamond', value: 4, character: 3 })
            expect.fail('Card value must be between 2 and 14')
        })

    })

    describe('Test players method to add points to winner', () => {

  
    })

    describe('Test players method to determine winner', () => {


    })

    describe('Test while play game loop?', () => {


    })

    describe('shuffle deck?', () => {


    })

    describe('Test build deck?', () => {


    })

})

