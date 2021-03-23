const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        test("Can set github username", () => {
            const username = 'username';
            const e = new Engineer('brett',12,'email@email.com',username);
            expect(e.github).toBe(username)
        })
    })
    describe('getters', () => {
        test('Can get github username with getGithub() method', () => {
            const username = 'username';
            const e = new Engineer('name', 12, 'email@email.com', username);
            expect(e.getGithub()).toBe(username);
        })
    })
})