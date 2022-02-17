// Import Manager Class
const Manager = require("../lib/Manager");

// Manager Class Tests
describe("Manager Class", () => {
    it("Should set office number via constructor argument", () => {
        const testVal = new Manager("Bob", 1, "test@email.com", "555-555-5555");
        expect(testVal.officeNumber).toBe("555-555-5555")
    })

    it("Should get office number via getOffice()", () => {
        const testVal = new Manager("Bob", 1, "test@email.com", "555-555-5555");
        expect(testVal.getOffice()).toBe(testVal.officeNumber)
    })

    it("getRole() should return “Manager”", () => {
        const testVal = new Manager("Bob");
        expect(testVal.getRole()).toBe("Manager")
    })
})