const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        test("Can set office number", () => {
            const officeNumber = 'office Number';
            const e = new Manager('brett',12,'email@email.com',officeNumber);
            expect(e.officeNumber).toBe(officeNumber)
        })
    })
    describe('getters', () => {
        test('Can get office number with getOffice method', () => {
            const officeNumber = 'officeNumber';
            const e = new Manager('name', 12, 'email@email.com', officeNumber);
            expect(e.getOfficeNumber()).toBe(officeNumber);
        })
    })
})