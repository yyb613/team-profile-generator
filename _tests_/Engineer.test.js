// Import Engineer Class
const Engineer = require("../lib/Engineer");

// Engineer Class Tests
describe("Engineer Class", () => {
    it("Should set GitHub account via constructor argument", () => {
        const testVal = new Engineer("Bob", 1, "test@email.com", "Bobby3");
        expect(testVal.github).toBe("Bobby3")
    })

    it("Should get GitHub username via getGithub()", () => {
        const testVal = new Engineer("Bob", 1, "test@email.com", "Bobby3");
        expect(testVal.getGithub()).toBe(testVal.github)
    })

    it("getRole() should return “Engineer””", () => {
        const testVal = new Engineer("Bob");
        expect(testVal.getRole()).toBe("Engineer")
    })
})