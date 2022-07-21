const OperationMath = require('./math');

describe("OperationMath", () => {
    const operation = new OperationMath();

    test("add 5 + 5 to be equal 10", () => {
        expect(operation.sum(5,5)).toBe(10);
    });

    test("div 25 / 5 to be equal 5", () => {
        expect(operation.div(5,5)).toBe(1);
    });

    test("sub 5 - 5 to be equal 0", () => {
        expect(operation.sub(5,5)).toBe(0);
    });

    test("mul 5 - 5 to be equal 0", () => {
        expect(operation.mul(5,5)).toBe(25);
    });
    
});