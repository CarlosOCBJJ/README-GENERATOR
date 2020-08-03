function generateProjectUrl(github, title) {
  const kebabCasetitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCasetitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
This project is licensed under the ${license} license.`
    )
  }
  r
  eturn ''
}
function generateMarkdown(info) {
  return `
# ${info.title}
${renderLicenseBadge(info.license, info.github, info.title)}

## Description

${info.description}

## Table of Contents 

* [Installation](#install)

* [License](#license)

* [Contributing](#contribute)

* [Tests](#test)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:
\`\`\`
${info.install}
\`\`\`

## Usage
${info.usage}
${renderLicenseSection(info.license)}

## Contributing
${info.contribute}

## Tests
To run tests, run the following command:
\`\`\`
${info.tests}
\`\`\`

## Questions
<img src="${info.avatar_url}" alt="avatar" style="border-radius: 15px" width="25" />
If you have any questions about the repo, open an issue or contact [${info.github}](${info.url}) directly at ${info.email}.
`;
}

module.exports = generateMarkdown;