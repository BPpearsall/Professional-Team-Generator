const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub
    // TODO: YOUR CODE HERE
  }

  getRole() {
    return "Engineer"
    // TODO: YOUR CODE HERE
  }

  getGithub() {
    return this.gitHub
    // TODO: YOUR CODE HERE
  }

}

module.exports = Engineer;
