const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager();

    expect(manager.name).toBe(this.name);
    expect(manager.id).toBe(this.id);
    expect(manager.email).toBe(this.email);
    expect(manager.officeNumber).toBe(this.officeNumber);
});