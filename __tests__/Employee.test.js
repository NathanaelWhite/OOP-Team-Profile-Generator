// require Employee js file
const Employee = require('../lib/Employee.js');

// write a test to check if name is a string
test('creates a employee object', () => {
    const employee = new Employee('Dave', 5, 'test@email.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    // write a test to check if id is a number 
    // write a test to check if email is a string
});

// write test for getName()
test('gets an employees name', () => {
    const employee = new Employee('Dave', 5, 'test@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});
// write test for getId()
test('gets an employees id', () => {
    const employee = new Employee('Dave', 5, 'test@email.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});
// write test for getEmail()
test('get the employees email', () => {
    const employee = new Employee('Dave', 5, 'test@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});
// write test for getRole()
test('get the employees role', () => {
    const employee = new Employee('Dave', 5, 'test@email.com');

    expect(employee.getRole()).toEqual('Employee');
});