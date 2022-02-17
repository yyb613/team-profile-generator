
/*
    Can instantiate Employee instance
    Can set name via constructor arguments
    Can set ID via constructor argument
    Can get name via getName()
    Can get ID via getID()
    Can get email via getEmail()
    getRole() should return “Employee”
*/
const Employee = require("../lib/Employee")

describe("Employee Class", () => {
    describe("Class Properties", () => {
        it("Should create an object type when I create a new Employee", () => {
            const testVal = new Employee();
            expect(typeof(testVal)).toBe("object")
        })

        it("Should create a name property when I add an argument in the first parameter slot", () => {
            const testVal = new Employee("Bob");
            expect(testVal.name).toBe("Bob")
        })
    })
    describe("Class Methods", () => {
        it("Should be able to get the name property when calling the method getName()", () => {
            const testVal = new Employee("Dylan");
            expect(testVal.getName()).toBe(testVal.name)
        })
    })
})
