// require intern js file
const Intern = require('../lib/Intern.js');

// test if school is a string
test('checks if school is a string', () => {
    const intern = new Intern('Intern', 'Dave', 5, 'test@email.com', 'UT');

    expect(intern.school).toEqual(expect.any(String));
});

// write test for getSchool()
test('get the interns school', () => {
    const intern = new Intern('Intern', 'Dave', 5, 'test@email.com', 'UT');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});
// write test for getRole()
test('get the interns role', () => {
    const intern = new Intern('Intern', 'Dave', 5, 'test@email.com', 'UT');

    expect(intern.getRole()).toEqual('Intern');
});