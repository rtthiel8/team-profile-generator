const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern();

    expect(intern.name).toBe(this.name);
    expect(intern.id).toBe(this.id);
    expect(intern.email).toBe(this.email);
    expect(intern.school).toBe(this.school);
});