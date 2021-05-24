const Employee = require("./Employee");

class Manager extends Employee {
    constructor(role, name, id, email, officeNum) {
        super(role, name, id, email);

        this.officeNum = officeNum;
    }
    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;