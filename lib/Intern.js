const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    // TODO: YOUR CODE HERE
  };

  getRole() {
    return "Intern";
    // TODO: YOUR CODE HERE
  };

  getSchool() {
    return this.school;
    // TODO: YOUR CODE HERE
  };

}

module.exports = Intern;
