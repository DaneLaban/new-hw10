const Employee = require ("./employee.js");

class Intern extends Employee{
    constructor (name, id, email, officeNumber){
        super(name, email, id);
        this.office = officeNumber;
    }
    getRole(){
        return "Intern"
    }
}

module.exports = Intern;