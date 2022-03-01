const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer();

    expect(engineer.name).toBe(this.name);
    expect(engineer.id).toBe(this.id);
    expect(engineer.email).toBe(this.email);
    expect(engineer.github).toBe(this.github);
});
