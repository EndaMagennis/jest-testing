const addition = require('../calc');

describe("Calculator", () => {
    describe("Addition", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("Should return 100 for 50 + 50", () => {
            expect(addition(50, 50)).toBe(100);
        });
    });
});