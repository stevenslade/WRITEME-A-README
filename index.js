//inquirer is required as it is used to collect user input
const inquirer = require('inquirer');

// the generateMarkdown file is required as it will generate the markdown file
const generateMarkdown = require('./utils/generateMarkdown.js');

//inquirer is used to collect uses responses
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
    // generateMarkdown function is available in the generateMarkdown.js file
    generateMarkdown.generateMarkdown(answers);

});
