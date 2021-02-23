const Manager = require ("./lib/manager.js");
const Engineer = require ("./lib/engineer.js");
const Intern = require ("./lib/intern.js");
const inquirer = require ("inquirer");
const path = require ("path");
const fs = require ("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/template.js");

const teamMembers = [];
const idArray = [];

function appMenu() {

function createManager () {
    // console.log("Make your team.");
    inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your name?",
            validate: answer => {
                if (answer !=="") {
                    return true;
                }
                return "Enter min of one character.";
            }
            },
        
        {
            type: "input",
            name: "managerId",
            message: "What is the manager ID number?",
            validate: answer => {
                const pass = answer.match (
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Enter number more than zero.";
            }
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is the managers email?",
            validate: answer => {
                const pass = answer.match (
                    /\S+@\S+\.\S+/
                );
                if (pass) {
                    return true;
                }
                return "Enter a correct email address.";
            }
        },

        {
            type: "input",
            name: "managerOffice",
            message: "What is the manager's office number?",
            validate: answer => {
                const pass = answer.match (
                    /^[1-9]\d*$/
                );
                if (pass) {
                    return true;
                }
                return "Enter a number more than zero.";
            }
        }
    ]).then(answers => {
        const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
    });
    }

    function createTeam() {
        inquirer
        .prompt ([
            {
                type: "list",
                name: "employeeChoice",
                message: "Which employee are you adding?",
                choices: ["Engineer", "Intern", "None"] 
            }
        ]).then (userChoice => {
            switch (userChoice.employeeChoice) {
            case "Engineer":
                addEngineer();
                break;
                case "Intern":
                    addIntern();
                break;
                default:
                    buildTeam();
        }
      });
    }
        function addEngineer () {
            inquirer
            .prompt ([
                {
                    type: "input",
                    name: "engineerName",
                    message: "Engineer's name?",
                    validate: answer => {
                        if (answer !=="") {
                            return true;
                        }
                        return "Enter a min. of one letter.";
                    }
                },

                {
                    type: "input",
                    name: "engineerId",
                    message: "What is the ID number of the engineer?",
                    validate: answer => {
                        const pass = answer.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            if (idArray.includes(answer)) {
                                return "ID is taken, enter a different ID.";
                            } else {
                                return true; 
                            }
                        }
                        return "Enter a number more than zero.";
                    }
                },

                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is the engineer's email address?",
                    validate: answer => {
                        const pass = answer.match(
                            /\S+@\S+\.\S+/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Enter correct email address.";
                    }
                },

                {
                    type: "input",
                    name: "engineerGithub",
                    message: "What is the engineer's Github user?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Enter a min. of one letter.";
                    }
                }
            ]).then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                teamMembers.push(engineer);
                idArray.push(answers.engineerId);
                createTeam();
            });
        }

        function addIntern() {
            inquirer
            .prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "What is the name of the Intern?",
                    validate: answer => {
                        if (answer !=="") {
                            return true;
                        }
                        return "Enter a min. of one letter.";
                    }
                    },

                    {
                        type: "input",
                        name: "internId",
                        message: "What is the Intern's ID number?",
                        validate: answer => {
                            const pass = answer.match(
                                /^[1-9]\d*$/
                            );
                            if (pass) {
                                if (idArray.includes(answer)) {
                                    return "This ID is taken, enter a different ID.";
                                } else {
                                    return true;
                                }

                            }
                            return "Enter a number more than zero.";
                        }
                    },
                
                    {
                        type: "input",
                        name: "internEmail",
                        message: "What is the intern's email?",
                        validate: answer => {
                          const pass = answer.match(
                            /\S+@\S+\.\S+/
                          );
                          if (pass) {
                            return true;
                          }
                          return "Please enter a correct email address.";
                        }
                      },
                      {
                        type: "input",
                        name: "internSchool",
                        message: "Where did the Intern go to school?",
                        validate: answer => {
                          if (answer !== "") {
                            return true;
                          }
                          return "Please enter a min. of one character.";
                        }
                      } 
                ]).then(answers => {
                    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                    teamMembers.push(intern);
                    idArray.push(answers.internId);
                    createTeam();
                }); 
        }





    function buildTeam() {
        
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
      }
    
      createManager();

    }

    appMenu();