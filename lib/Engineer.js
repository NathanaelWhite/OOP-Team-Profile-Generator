const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call the parent instructor here
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer'; 
    };
};

module.exports = Engineer;