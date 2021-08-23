const inquirer = require('inquirer');

//const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

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
      default: 'npm i'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to install tests',
      default: 'npm test',
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
    //comment out the call for the license and instead just run generateMarkdown 
    //const licenseSection = generateMarkdown.generateMarkdown(answers);
    generateMarkdown.generateMarkdown(answers);


    //const readMePageContent = createReadme(answers, licenseSection);

    // fs.writeFile('README.md', readMePageContent, (err) =>
    //   err ? console.log(err) : console.log('Successfully created README.md!')
    // );

});


//   const createReadme = (answers, licenseSection) =>
//  ` # ${answers.projectName}

//  ${licenseSection}

//  ## Table of Contents

//  1. [Description](#description)

//  1. [Installation](#installation)
 
//  1. [Usage](#usage)

//  1. [License](#license)

//  1. [Contributing](#contributing)

//  1. [Collaborators](#collaborators)

//  1. [Tests](#tests)

//  1. [Questions](#questions)


//  ## <a id="description"></a>Description

//  * ${answers.projectDesc}


// ## <a id="installation"></a>Installation

//  * Run the following to install dependancies 
// > ${answers.dependancies}

// ## <a id="usage"></a>Usage

// * ${answers.usage}

// ## <a id="license"></a>License

// * ${answers.license}

// ## <a id="contributing"></a>Contributing

// * ${answers.contributing}

// ## <a id="collaborators"></a>Collaborators

// * ${answers.contributors}

// ## <a id="tests"></a>Tests

// > ${answers.tests}

// ## <a id="questions"></a>Questions

// * If you have any questions send me an email at ${answers.email}

// * If you would like to visit my github profile https://github.com/${answers.gitHubUserName}
// `
//  ;