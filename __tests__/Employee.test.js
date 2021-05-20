// require Employee js file
const Employee = require('../lib/Employee.js');

// write a test to check if name is a string
test('checks if employee has name, id, and email', () => {
    const employee = new Employee('Dave', 5, 'test@email.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
// write a test to check if id is a number 
// write a test to check if email is a string