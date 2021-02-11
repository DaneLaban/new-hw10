const Employee = require ("./employee.js");

class Engineer extends Employee{
    constructor (name, id, email, officeNumber){
        super(name, email, id);
        this.office = officeNumber;
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;