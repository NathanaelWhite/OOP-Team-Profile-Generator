// require engineer js file
const Engineer = require('../lib/Engineer');

// test to check if github is a string
test('test to check if github is a string', () => {
    const engineer = new Engineer('engineer', 'Dave', 5, 'test@email.com', 'github');

    expect(engineer.github).toEqual(expect.any(String));
});

// write test for getGithub()
test('get the engineers github', () => {
    const engineer = new Engineer('engineer', 'Dave', 5, 'test@email.com', 'github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});
// write test for getRole()
test('get the engineers role', () => {
    const engineer = new Engineer('engineer', 'Dave', 5, 'test@email.com', 'github');

    expect(engineer.getRole()).toEqual('Engineer');
});