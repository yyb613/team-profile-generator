// Import Employee Class
const Employee = require('./Employee');

// Manager Class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);           // inherit from employee class
        this.officeNumber = officeNumber; // office number
    }

    // Get Office Number
    getOffice() {
        return this.officeNumber;
    }

    // Get Role
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;