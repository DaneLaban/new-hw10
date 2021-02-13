const Employee = require ("./Employee");

class Engineer extends Employee{
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;