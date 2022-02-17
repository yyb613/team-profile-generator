// Import Employee Class
const Employee = require("../lib/Employee");

// Employee Class Tests
describe("Employee Class", () => {
    it("Should instantiate Employee instance", () => {
        const testVal = new Employee();
        expect(typeof (testVal)).toBe("object")
    })

    it("Should set name via constructor argument", () => {
        const testVal = new Employee("Bob");
        expect(testVal.name).toBe("Bob")
    })

    it("Should set ID via constructor argument", () => {
        const testVal = new Employee("Bob", 1);
        expect(testVal.id).toBe(1)
    })

    it("Should set email via constructor argument", () => {
        const testVal = new Employee("Bob", 1, "test@email.com");
        expect(testVal.email).toBe("test@email.com")
    })

    it("Should get name via getName()", () => {
        const testVal = new Employee("Bob");
        expect(testVal.getName()).toBe(testVal.name)
    })

    it("Should get ID via getID()", () => {
        const testVal = new Employee("Bob", 1);
        expect(testVal.getId()).toBe(testVal.id)
    })

    it("Should get email via getEmail()", () => {
        const testVal = new Employee("Bob", 1, "test@email.com");
        expect(testVal.getEmail()).toBe(testVal.email)
    })

    it("getRole() should return “Employee”", () => {
        const testVal = new Employee("Bob");
        expect(testVal.getRole()).toBe("Employee")
    })
})