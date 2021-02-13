const Manager = require ("./lib/manager.js");
const Engineer = require ("./lib/engineer.js");
const Intern = require ("./lib/intern.js");
const inquirer = require ("inquirer");
const path = require ("path");
const fs = require ("fs");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");
const render = require("./source/template.js")


inquirer
    .prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is your name?',
            validate: function validateManager(name){
                return name !=='';
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?'
        },
    ]);

    function buildTeam() {
        // Create the output directory if the output path doesn't exist
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
      }
    
      createManager();
    
    
    