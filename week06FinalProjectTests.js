    // =================================================================

describe('Week 6 Final - War Game:', () => {
    describe('Description', () => {
        it('#Should ', () => {
            // Write tests to ensure it works for multiple examples
            var arrayOfNumbers = [1, 5, 3, 2, 4]
            arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b)
            expect(arrayOfNumbers).to.deep.equal([1, 2, 3, 4, 5])
            console.log("first array" + arrayOfNumbers);
        })

        describe('Failed Test: ', () => {
            // Write tests to ensure it fails for multiple examples
            it('#Should fail', () => {
                const arrayOfNumbers = [1, 5, 3, 2, 4]
                arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b)
                expect(arrayOfNumbers).to.deep.equal([1, 2, 3, 4, 5])
            })
        })
    })
})