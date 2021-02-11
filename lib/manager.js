const Employee = require ("./employee.js");

class Manager extends Employee{
    constructor (name, id, email, officeNumber){
        super(name, email, id);
        this.office = officeNumber;
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Manager;