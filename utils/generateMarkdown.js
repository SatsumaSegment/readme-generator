// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.projectName}
    
    ## Description

    ${data.description}

    ## Table of Contents

    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contributing](#contributing)
    [Contributing](#contributing)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## License

    ${data.licence[0]}

    ${data.licence[1]}

    ## Contributing

    ${data.contributing}

    ## Tests

    ${data.tests}

    ## Questions

    If you have any questions please contact me via the email or via my GitHub account below.
    ${data.email}

    ${data.username}
`;
}

module.exports = generateMarkdown;
