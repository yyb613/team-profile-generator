// Import Employee Class
const Employee = require('./Employee');

// Engineer Class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); // inherit from employee class
        this.github = github;   // github
    }

    // Get GitHub
    getGithub() {
        return this.github;
    }

    // Get Role
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;