import isEven from './isEven.js';

describe('isEven', () => {
    test('2 is even number', () => {
        expect(isEven(2)).toBe(true);
    });

    test('1 is odd number', () => {
        expect(isEven(1)).toBe(false);
    });
});
