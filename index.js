// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown.js');

// default filename; easy to manipulate if its a global variable
const defaultFileName = "SAMPLE_README.md";

// TODO: Create an array of questions for user input
const questions =
    [
        "Enter README title:",
        "Enter README description:",
        "Enter README installation-instructions:",
        "Enter README usage-information:",
        "Enter README contribution-guidelines:",
        "Enter README test-instructions:",
        "Choose a license for your project:",
        "Enter your Github username (not the https address):",
        "Enter your e-mail:"
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(fileName, genMarkdown(response), (err) =>
        (err) ? console.error(err) : console.log("README created successfully!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contribution',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'test',
            },
            {
                // made the type for the license a 'list', to ensure the user selects a valid license witgout me having to implement authentication
                type: 'list',
                message: questions[6],
                choices: ['Apache 2.0', "Boost Software License 1.0", "Eclipse Public License 1.0",
                    "GNU GPL v3", "IBM Public License Version 1.0", "The MIT License", "Mozilla Public License 2.0", "No License"],
                name: 'license',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            }
        ])

        .then((response) => {
            writeToFile(defaultFileName, response);
        })
}

// Function call to initialize app
init();