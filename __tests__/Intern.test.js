const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        test("Can set school name", () => {
            const schoolName = 'schoolName';
            const e = new Intern('brett',12,'email@email.com',schoolName);
            expect(e.school).toBe(schoolName)
        })
    })
    describe('getters', () => {
        test('Can get school with getSchool() method', () => {
            const schoolName = 'school name';
            const e = new Intern('name', 13, 'email@email.com', schoolName);
            expect(e.getSchool()).toBe(schoolName);
        })
        test('getRole method returns Intern', () => {
            const e = new Intern ('name',11,'email@email.com', 'school');
            expect(e.getRole()).toBe('Intern');
        })
    })
})