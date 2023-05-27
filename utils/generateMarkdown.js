// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// based on the selected license, returns either a string with the badge, the link, and the name of the license; or an empty string (if no license is selected)
function renderLicenseBadge(license) {
  switch (license) {
    case `Apache 2.0`:
      return [`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`, `(https://opensource.org/licenses/Apache-2.0)`, `Apache 2.0`];
      break;
    case `Boost Software License 1.0`:
      return [`[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`, `(https://www.boost.org/LICENSE_1_0.txt)`, `Boost Software License 1.0`];
      break;
    case `Eclipse Public License 1.0`:
      return [`[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`, `(https://opensource.org/licenses/EPL-1.0)`, `Eclipse Public License 1.0`];
      break;
    case `GNU GPL v3`:
      return [`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`, `(https://www.gnu.org/licenses/gpl-3.0)`, `GNU GPL v3`];
      break;
    case `IBM Public License Version 1.0`:
      return [`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`, `(https://opensource.org/licenses/IPL-1.0)`, `IBM Public License Version 1.0`];
      break;
    case `The MIT License`:
      return [`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`, `(https://opensource.org/licenses/MIT)`, `The MIT License`];
      break;
    case `Mozilla Public License 2.0`:
      return [`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`, `(https://opensource.org/licenses/MPL-2.0)`, `Mozilla Public License 2.0`];
      break;
    case `No License`:
      return ""
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if a license is selected, execute this code (creates a License section)
  if (renderLicenseBadge(license).length > 1) {
    return `## License
${renderLicenseBadge(license)[0]}${renderLicenseBadge(license)[1]}
    
[More license information]${renderLicenseBadge(license)[1]}`;
  } else {
    // if no license is selected, omit the license section
    return;
  }
}

// due to the way I structured the renderLicenseBadge function, I need a seperate one to generate the licence badge at the top of the screen. This is because I don't know how to have a conditional statement within a string
function renderTopBadge(license) {
  if (renderLicenseBadge(license).length > 1) {
    return `${renderLicenseBadge(license)[0]}${renderLicenseBadge(license)[1]}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  return `${renderTopBadge(response.license)}
  
# ${response.title}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${response.installation}

## Usage

${response.usage}

## Contributing

${response.contribution}

## Tests

${response.test}

## Questions

If you have any additional questions, you can reach me through my [email](mailto:${response.email}), and also please feel free to checkout my [github profile](https://github.com/${response.github})!

${(renderLicenseSection(response.license))}
`
}

module.exports = generateMarkdown
