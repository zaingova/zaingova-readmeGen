// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions =
    [
        "Enter README title:",
        "Enter README description:",
        "Enter README installation-instructions:",
        "Enter README usage-information:",
        "Enter README contribution-guidelines:",
        "Enter README test-instructions:",
        `Choose one of the following licences:

- MIT
- GNU
- Mozilla
- Perl
- IBM

? Enter selection:`,
        "Enter your Github username (not the https address): ",
        "Enter your e-mail: "
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    let licenseBadge = "";

    if (response.license == "MIT") {licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";}
    else if (response.license == "GNU") {licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"}
    else if (response.license == "Mozilla") {licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"}
    else if (response.license == "Perl") {licenseBadge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}
    else if (response.license == "IBM") {licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"}
    else {response.license = ""}

    const readmeText =`${licenseBadge}
    
# ${response.title}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Test-Instructions](#testinstructions)
- [Questions](#questions)
- [License](#license)

## Installation

${response.installation}

## Usage

${response.usage}

## Contributions

${response.contribution}

## Test-Instructions

${response.test}

## Questions

If you have any additional questions, you can reach me through my [email](mailto:${response.email}), and also please feel free to checkout my [github profile](https://github.com/${response.github})!

## License

${response.license}`
    
    fs.writeFile(fileName, readmeText, (err) =>
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
                type: 'input',
                message: questions[6],
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
            writeToFile('README.md', response);
        })
}

// Function call to initialize app
init();