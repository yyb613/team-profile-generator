// Employee Class
class Employee {
    constructor(name, id, email) {
        this.name = name;   // name
        this.id = id;       // ID
        this.email = email; // email
    }
    
    // Get Name
    getName() {
        return this.name;
    }

    // Get ID
    getId() {
        return this.id;
    }
    
    // Get Email
    getEmail() {
        return this.email;
    }

    // Get Role
    getRole() {
       return 'Employee';
    }
}

module.exports = Employee;