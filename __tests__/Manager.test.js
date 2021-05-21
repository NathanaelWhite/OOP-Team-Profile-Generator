// require manager js file 
const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

// test if office number is a number
test('checks if office number is a number', () => {
    const manager = new Manager('Dave', 5, 'test@email.com', 25);

    expect(manager.officeNum).toEqual(expect.any(Number));
});

// write test for getRole()