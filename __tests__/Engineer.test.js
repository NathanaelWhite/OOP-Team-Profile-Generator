// require engineer js file
const Engineer = require('../lib/Engineer');

// test to check if github is a string
test('test to check if github is a string', () => {
    const engineer = new Engineer('Dave', 5, 'test@email.com', 'github');

    expect(engineer.github).toEqual(expect.any(String));
});