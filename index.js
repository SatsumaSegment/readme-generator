const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is the name of your project? ",
    "Please write a Description of your project: ",
    "Please write installation instructions: ",
    "Please write usage instructions: ",
    "Please select a license: ",
    "Please enter contribution instructions: ",
    "Please enter a Tests section: ",
    "Please provide your GitHub username: ",
    "Please provide your GitHub email: ",
];

const licenses = [
    ["Apache 2.0 License", "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"],
    ["Boost Software License 1.0", "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"],
    ["BSD 3-Clause License", "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"],
    ["Creative Commons", "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"],
    ["Eclipse", "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"],
    ["GNU", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"],
    ["The Hippocratic License 3.0", "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"],
    ["IBM Public License", "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"],
    ["ISC", "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"],
    ["MIT", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"],
    ["Mozilla", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"],
    ["Perl", "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"],
    ["SIL Open Font License", "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"],
    ["The Unlicense", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"],
    ["The Do What the Fuck You Want to Public License", "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"],
    ["The zlib/libpng License", "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"],
];

const licenseNames = [];
licenses.forEach((license) => {
    licenseNames.push(license[0]);
});

// function to write README file
function writeToFile(projectName, data) {
    fs.writeFile("README.md", data, (err) => {
        err ? console.error(err) : console.log(`A README from ${projectName} has been successfully created`);
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "projectName",
            },
            {
                type: "input",
                message: questions[1],
                name: "description",
            },
            {
                type: "input",
                message: questions[2],
                name: "installation",
            },
            {
                type: "input",
                message: questions[3],
                name: "usage",
            },
            {
                type: "list",
                message: questions[4],
                choices: licenseNames,
                name: "license",
            },
            {
                type: "input",
                message: questions[5],
                name: "contributing",
            },
            {
                type: "input",
                message: questions[6],
                name: "Tests",
            },
            {
                type: "input",
                message: questions[7],
                name: "username",
            },
            {
                type: "input",
                messsage: questions[8],
                name: "email",
            },
        ])
        .then((data) => {
            let badge;
            licenses.forEach((license) => {
                if (data.license === license[0]) {
                    badge = license[1];
                }
            });
            writeToFile(data.projectName, generateMarkdown(data, badge));
        });
}

// function call to initialize program
init();
