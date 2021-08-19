const inquirer = require('inquirer');

const fs = require('fs');
const { title } = require('process');

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

    const readMePageContent = createReadme(answers);

    fs.writeFile('README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );

  });


  const createReadme = (answers) =>
 ` # Readme title

  ## subtitle

  * My name is ${answers.name}

  * My player Tag is ${answers.playerTag}
`
  ;