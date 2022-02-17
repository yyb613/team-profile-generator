// Import Employee Class
const Employee = require('./Employee');

// Intern Class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); // inherit from employee class
        this.school = school;   // school
    }

    // Get School
    getSchool() {
        return this.school;
    }

    // Get Role
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;