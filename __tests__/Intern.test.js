// require intern js file
const Intern = require('../lib/Intern.js');

// test if school is a string
test('checks if school is a string', () => {
    const intern = new Intern('Dave', 5, 'test@email.com', 'UT');

    expect(intern.school).toEqual(expect.any(String));
});

// write test for getSchool()
// write test for getRole()