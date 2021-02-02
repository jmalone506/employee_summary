// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;
}
getName(){
    return this.name;
}

getId() {
    return this.id
}
getEmail(){
    return this.email;
}
getRole(){
    return "Engineer";
}
}

module.exports = Engineer;
