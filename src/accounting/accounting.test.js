const { credit, debit, getBalance, resetAccount } = require('./index');

describe('Account Management System', () => {
    beforeEach(() => {
        resetAccount();
    });

    test('TC01: View account balance', () => {
        expect(getBalance()).toBe(1000.00);
    });

    test('TC02: Credit account with valid amount', () => {
        credit(100);
        expect(getBalance()).toBe(1100.00);
    });

    test('TC03: Credit account with invalid amount', () => {
        expect(() => credit(-50)).toThrow('Invalid amount.');
        expect(getBalance()).toBe(1000.00);
    });

    test('TC04: Debit account with valid amount', () => {
        debit(200);
        expect(getBalance()).toBe(800.00);
    });

    test('TC05: Debit account with insufficient funds', () => {
        expect(() => debit(2000)).toThrow('Insufficient funds.');
        expect(getBalance()).toBe(1000.00);
    });

    test('TC06: Debit account with invalid amount', () => {
        expect(() => debit(-10)).toThrow('Invalid amount.');
        expect(getBalance()).toBe(1000.00);
    });
});
