const {addFunc, isDivisibleBy5, isODDEven} = require("./sample");

describe("Test Suite for sample.js functions", ()=>{
    
    it("should add 3 numbers", ()=>{
        const result = addFunc(1, 3, 4);
        expect(result).toBe(8);
    })
// Activity: Write a test that tests the function of isDivisibleBy 5 and make it pass

    it("should check divisibility by 5", ()=>{
        const result = isDivisibleBy5(1283);
        expect(result).toBe(false);
    })

    // Activity to check if the number is a ODD or Even

    it("should check the number is Odd or Even", ()=>{
        const result = isODDEven(58);
        expect(result).toBe("Even")
    })
})
//So when the command `npm run test` is run, it calls the test suite and runs the individual tests.
