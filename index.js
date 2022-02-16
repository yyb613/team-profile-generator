// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

// Create an array of questions for user input
const questions = [
    /*
    What is your engineer\'s name?
    What is your engineer\'s id?
    What is your engineer\'s email?
    What is your engineer\'s GitHub username?
    
    What is your intern\'s name?
    What is your intern\'s id?
    What is your intern\'s email?
    What is your intern\'s school?
    */
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        choices: ['Team Manager', 'Engineer', 'Intern', 'I don\'t want to add any more team members'],
        name: 'type'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'manager-name'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s id?',
        name: 'manager-id'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email?',
        name: 'manager-email'
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'manager-office'
    },
];

// Function to write index.html
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
    });
};

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // writeToFile('./dist/index.html', );
        })
};

// Function call to initialize app
init();

