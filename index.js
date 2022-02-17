// Include packages needed for this application
const fs = require('fs');                   // fs
const inquirer = require('inquirer');       // inquirer
const Manager = require('./lib/Manager');   // Manager class
const Engineer = require('./lib/Engineer'); // Engineer class
const Intern = require('./lib/Intern');     // Intern class
const employeeArr = [];                     // Employee array

// Manager Questions
const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?", // Name
        name: 'managerName'
    },
    {
        type: 'input',
        message: "What is the team manager's ID?", // ID
        name: 'managerId'
    },
    {
        type: 'input',
        message: "What is the team manager's email?", // Email
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?", // Office #
        name: 'managerOffice'
    },
];

// Main Menu Question
const menuQuestion = {
    type: 'list',
    message: "Which type of team member would you like to add?", // Choose type
    choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
    name: 'memberType'
}

// Engineer Questions
const engineerQuestions = [
    {
        type: 'input',
        message: "What is your engineer's name?", // Name
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "What is your engineer's ID?", // ID
        name: 'engineerId'
    },
    {
        type: 'input',
        message: "What is your engineer's email?", // Email
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub username?", // GitHub
        name: 'engineerGit'
    }, 
];

// Intern Questions
const internQuestions = [
    {
        type: 'input',
        message: "What is your intern's name?", // Name
        name: 'internName'
    },
    {
        type: 'input',
        message: "What is your intern's ID?", // ID
        name: 'internId'
    },
    {
        type: 'input',
        message: "What is your intern's email?", // Email
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "What is your intern's school?", // School
        name: 'internSchool'
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
        .prompt(managerQuestions) // ask Manager questions
        .then((answers) => {                             //--Variables--//
            const managerName = answers.managerName;     // Manager Name
            const managerId = answers.managerId;         // Manager ID
            const managerEmail = answers.managerEmail;   // Manager Email
            const managerOffice = answers.managerOffice; // Manager Office
            const newMgr = new Manager(managerName, managerId, managerEmail, managerOffice); // create new Manager
            employeeArr.push(newMgr) // push Manager to Employee Array
            mainMenu(); // prompt Main Menu
        })
};

// Inquirer Main Menu
function mainMenu() {
    inquirer
        .prompt(menuQuestion)
        .then(answer => {
            if (answer.memberType === 'Engineer') {      // if choose Engineer
                askEngineer();
            } else if (answer.memberType === 'Intern') { // if choose Intern
                askIntern();
            } else {
                writeToFile(); // 
            }
        })
}

// Ask Engineer questions
function askEngineer() {
    inquirer
        .prompt(engineerQuestions) // ask Engineer questions
        .then((answers) => {                             //--Variables--//
            const engineerName = answers.engineerName;   // Engineer Name
            const engineerId = answers.engineerId;       // Engineer ID
            const engineerEmail = answers.engineerEmail; // Engineer Email
            const engineerGit = answers.engineerOffice;  // Engineer GitHub
            const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGit); // create new Engineer
            employeeArr.push(newEngineer) // push Engineer to Employee Array
            mainMenu(); // prompt Main Menu
        })
};

// Ask Intern questions
function askIntern() {
    inquirer
        .prompt(internQuestions) // ask Intern questions
        .then((answers) => {                             //--Variables--//
            const internName = answers.engineerName;     // Intern Name
            const internId = answers.engineerId;         // Intern ID
            const internEmail = answers.engineerEmail;   // Intern Email
            const internSchool = answers.engineerOffice; // Intern GitHub
            const newIntern = new Intern(internName, internId, internEmail, internSchool); // create new Intern
            employeeArr.push(newIntern) // push Intern to Employee Array
            mainMenu(); // prompt Main Menu
        })
};

// Function call to initialize app
init();