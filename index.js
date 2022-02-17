// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeArr = [];

// Manager Questions
const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName'
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'managerId'
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerOffice'
    },
];

// Main Menu Question
const menuQuestion = {
    type: 'list',
    message: "Which type of team member would you like to add?",
    choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
    name: 'member-type'
}

// Engineer Questions
const engineerQuestions = [
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: 'engineerId'
    },
    {
        type: 'input',
        message: "What is your engineer's email?",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub username?",
        name: 'engineerGit'
    }, 
];

// Intern Questions
const internQuestions = [
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'internName'
    },
    {
        type: 'input',
        message: "What is your intern's id?",
        name: 'internId'
    },
    {
        type: 'input',
        message: "What is your intern's email?",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "What is your intern's school?",
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
        .prompt(managerQuestions)
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
        .then(menuAnswer => {
            // if()
        })
}

// Function call to initialize app
init();