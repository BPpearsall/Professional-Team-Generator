const Employee = require("./Employee");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber
    // YOUR CODE HERE
  }

  getRole() {
    return "Manager"
    // YOUR CODE HERE
  }

  getOfficeNumber() {
    return this.officeNumber
    // YOUR CODE HERE
  }

}

module.exports = Manager;
