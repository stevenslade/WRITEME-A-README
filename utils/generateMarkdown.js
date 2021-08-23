//fs is required to generate a file
const fs = require('fs');

//the renderLicenseSection function uses a switch case to return the line for displaying a badge and link 
//on the markdown file.  The switch case was a good partnership with list input used by inquirer
//as the user is limited in available inputs

function renderLicenseSection(license) {
 switch(license) {
    case 'MIT':
      return('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
      break;
    case 'APACHE 2.0':
      return('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
      break;
    case 'GPL 3.0':
      return('[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)');
      break;
    case 'BSD 3.0':
      return('[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)');
      break;
    case 'None':
        return("");
      break;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

//This const is the readme content
 const readMePageContent = createReadme(data, licenseSection);

 //This shouldd write the file
   fs.writeFile('README.md', readMePageContent, (err) =>
     err ? console.log(err) : console.log('Successfully created README.md!')
   );
 
}

const createReadme = (data, licenseSection) =>
` # ${data.projectName}

${licenseSection}

## Table of Contents

1. [Description](#description)

1. [Installation](#installation)

1. [Usage](#usage)

1. [License](#license)

1. [Contributing](#contributing)

1. [Collaborators](#collaborators)

1. [Tests](#tests)

1. [Questions](#questions)

1. [Misc](#miscellaneous)


## <a id="description"></a>Description

* ${data.projectDesc}


## <a id="installation"></a>Installation

* Run the following to install dependancies

> ${data.dependancies}

## <a id="tests"></a>Tests

> ${data.tests}

## <a id="usage"></a>Usage

* ${data.usage}

## <a id="license"></a>License

* ${data.license}

## <a id="contributing"></a>Contributing

* ${data.contributing}

## <a id="collaborators"></a>Collaborators

* ${data.contributors}

## <a id="questions"></a>Questions

* If you have any questions send me an email at ${data.email}

* If you would like to visit my github profile [Github Profile](https://github.com/${data.gitHubUserName})

## <a id="miscellaneous"></a>Miscellaneous
`
;

//module.exports makes the included content available to other files
module.exports = {
  generateMarkdown
};
