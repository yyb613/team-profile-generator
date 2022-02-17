// Import Intern Class
const Intern = require("../lib/Intern");

// Intern Class Tests
describe("Intern Class", () => {
    it("Should set school via constructor argument", () => {
        const testVal = new Intern("Bob", 1, "test@email.com", "Columbia");
        expect(testVal.school).toBe("Columbia")
    })

    it("Should get school via getSchool()", () => {
        const testVal = new Intern("Bob", 1, "test@email.com", "Columbia");
        expect(testVal.getSchool()).toBe(testVal.school)
    })

    it("getRole() should return Intern", () => {
        const testVal = new Intern("Bob");
        expect(testVal.getRole()).toBe("Intern")
    })
})