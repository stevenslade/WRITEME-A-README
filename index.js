const inquirer = require('inquirer');

const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'playerTag',
      message: 'Enter your player ID',
    },
  ])
  .then((answers) => {
    console.log("answers: ", answers);

  });