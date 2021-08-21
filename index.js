const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Please enter the name of your project',
    },
    {
      type: 'input',
      name: 'projectDesc',
      message: 'Please enter a description of your project',
    },
    {
      type: 'input',
      name: 'dependancies',
      message: 'What command should be run to install dependancies',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to install tests',
    },
    {
      type: 'list',
      name: 'license',
      message: ' your license type',
      choices: ["MIT", 'APACHE 2.0', 'GPL 3.0', 'BSD 3.0', 'None'],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Please credit any collaborators on this project',
      }, {
        type: 'input',
        name: 'gitHubUserName',
        message: 'Please enter your git hub user name',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
      },

  ])
  .then((answers) => {
    console.log("answers: ", answers);

    const readMePageContent = createReadme(answers);

    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );

});


  const createReadme = (answers) =>
 ` # ${answers.projectName}


 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


 ## Table of Contents

 [Description](#description)

 [Installation](#installation)
 
 [Usage](#usage)

 [License](#license)

 [Contributing](#contributing)

 [Collaborators](#collaborators)

 [Tests](#tests)

 [Questions](#questions)


 ## <a id="description"></a>Description

 * ${answers.projectDesc}


## <a id="installation"></a>Installation

 * Run the following to install dependancies ${answers.dependancies}

## <a id="usage"></a>Usage

* ${answers.usage}

## <a id="license"></a>License

* ${answers.license}

## <a id="contributing"></a>Contributing

* ${answers.contributing}

## <a id="collaborators"></a>Collaborators

* ${answers.contributors}

## <a id="tests"></a>Tests

* ${answers.tests}

## <a id="questions"></a>Questions

* If you have any questions send me an email at ${answers.email}

* If you would like to visit my github profile https://github.com/${answers.gitHubUserName}
`
 ;