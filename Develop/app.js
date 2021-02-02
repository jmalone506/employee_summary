const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const Employee = [];
function employeeQuestions(){
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please type in name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Type your employee ID',
            name: 'id'
        },
        {
            type:'list',
            message: 'what is your Job Title?',
          name: 'role',
          choices:[
              "Manager",
              "Engineer",
              "Intern",
          ]
        }
    ])
    .then(function(answers){
        if(answers.role === "Manager"){
            managerID(answers);
        }
        else if (answers.role === "Engineer"){
            engineerID(answers);
            }
        else if(answers.role === "Interns"){
            internsID(answers);
        }
    });
}

function managerID(){
    inquirer.prompt([
        {
            type:'input',
            message:'Office number',
            name:'officenumber',
        },
        {
            type: 'list',
            message: 'would you like to add user?',
            name:'addusers',
            choices:[
                "yes",
                "no",
            ]
        }
    ])
    .then(function(managerAnswers){
        let createManager = createManager(managerAnswers.name, managerAnswers.id, managerAnswers.role, managerAnswers.officeNumber)
        Employee.push(createManager)
    })
}
    
function engineerID(){
    inquirer.prompt([
        {
            type:'input',
            message:'Your Github account',
            name:'github',
        },
        {
            type: 'list',
            message: 'would you like to add user?',
            name:'adduser',
            choices:[
                "yes",
                "no",
            ]
        }
    ])
    .then(function(engineerAnswers){
        let createEngineer = createEngineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.role, engineerAnswers.github)
        Employee.push(createEngineer)
    })
}
    
function internsID(){
    inquirer.prompt([
        {
            type:'input',
            message:'What school did you attend?',
            name:'school',
        },
        {
            type: 'list',
            message: 'would you like to add user?',
            name: 'adduser',
            choices:[
                "yes",
                "no",
            ]
        }
    ])
    .then(function(internsAnswers){
        let createIntern = createIntern(internsAnswers.name, internsAnswers.id, internsAnswers.role, internsAnswers.school)
        Employee.push(createIntern)
    })
}
    



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
