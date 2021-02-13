const Manager = require ("./lib/manager.js");
const Engineer = require ("./lib/engineer.js");
const Intern = require ("./lib/intern.js");
const inquirer = require ("inquirer");
const path = require ("path");
const fs = require ("fs");
const OUTPUT_DIR = path.resolve(__dirname, "style.css")
const outputPath = path.join(OUTPUT_DIR, "index.html");


inquirer
    .prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is your name?',
            
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
