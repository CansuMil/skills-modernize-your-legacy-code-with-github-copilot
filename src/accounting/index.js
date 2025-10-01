#!/usr/bin/env node

const readline = require('readline');

let account = {
    balance: 1000.00
};

function getBalance() {
    return account.balance;
}

function credit(amount) {
    if (isNaN(amount) || amount <= 0) {
        throw new Error('Invalid amount.');
    }
    account.balance += amount;
    return account.balance;
}

function debit(amount) {
    if (isNaN(amount) || amount <= 0) {
        throw new Error('Invalid amount.');
    }
    if (amount > account.balance) {
        throw new Error('Insufficient funds.');
    }
    account.balance -= amount;
    return account.balance;
}

function resetAccount() {
    account.balance = 1000.00;
}

function showMenu() {
    console.log('--------------------------------');
    console.log('Account Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    console.log('--------------------------------');
}

function viewBalance() {
    console.log(`Current balance: ${account.balance.toFixed(2)}`);
}

function creditAccount(rl) {
    rl.question('Enter credit amount: ', (input) => {
        const amount = parseFloat(input);
        if (isNaN(amount) || amount <= 0) {
            console.log('Invalid amount.');
        } else {
            account.balance += amount;
            console.log(`Amount credited. New balance: ${account.balance.toFixed(2)}`);
        }
        mainMenu(rl);
    });
}

function debitAccount(rl) {
    rl.question('Enter debit amount: ', (input) => {
        const amount = parseFloat(input);
        if (isNaN(amount) || amount <= 0) {
            console.log('Invalid amount.');
        } else if (amount > account.balance) {
            console.log('Insufficient funds.');
        } else {
            account.balance -= amount;
            console.log(`Amount debited. New balance: ${account.balance.toFixed(2)}`);
        }
        mainMenu(rl);
    });
}

function mainMenu(rl) {
    showMenu();
    rl.question('Enter your choice (1-4): ', (choice) => {
        switch (choice.trim()) {
            case '1':
                viewBalance();
                mainMenu(rl);
                break;
            case '2':
                creditAccount(rl);
                break;
            case '3':
                debitAccount(rl);
                break;
            case '4':
                console.log('Exiting the program. Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please enter a number between 1 and 4.');
                mainMenu(rl);
        }
    });
}

function startApp() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    mainMenu(rl);
}

if (require.main === module) {
    startApp();
}

module.exports = { credit, debit, getBalance, resetAccount };
