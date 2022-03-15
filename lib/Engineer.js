const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github
    // TODO: YOUR CODE HERE
  }

  getRole() {
    return "Engineer"
    // TODO: YOUR CODE HERE
  }

  getGithub() {
    return this.github
    // TODO: YOUR CODE HERE
  }

}

module.exports = Engineer;
