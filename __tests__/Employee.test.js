const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();

    expect(employee.name).toBe(this.name);
    expect(employee.id).toBe(this.id);
    expect(employee.email).toBe(this.email);
});