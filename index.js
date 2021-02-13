const Manager = require ("./lib/manager.js");
const Engineer = require ("./lib/engineer.js");
const Intern = require ("./lib/intern.js");
const inquirer = require ("inquirer");
const path = require ("path");
const fs = require ("fs");


inquirer
    .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Intern', 'Engineer', 'Manager'],
        },
    ])
    .then(answers => {
        console.info('Role:', answers.role);
    });