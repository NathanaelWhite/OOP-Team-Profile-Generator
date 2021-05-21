class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  };
  getName() {
      return this.name;
  };

  // getId() {
  //   if (this.id === 0) {
  //     return false;
  //   }
  //   else {
  //     this.id++;
  //   }
  // };

  getEmail() {
    return this.email;
  };

  getRole() {
    return 'Employee';
  }
};
// console.log(new Employee().getName());

module.exports = Employee;
