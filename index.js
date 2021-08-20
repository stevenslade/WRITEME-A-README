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
        name: 'gitHubUserName',
        message: 'Please enter your git hub user name',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
      },
    {
        type: 'list',
        name: 'license',
        message: 'Enter your license type',
        choices: ["MIT", 'APACHE 2.0', 'GPL 3.0', 'BSD 3.0', 'None'],
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

 ## A Badge Maybe?

 [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)

 ## Table of Contents

 [Installation](#installation)
 
 [Usage](#usage)

 ## Description

 * ${answers.projectDesc}


## <a id="installation"></a>Installation

## <a id="usage"></a>Usage

## License

* ${answers.license}

## Contributing

## Tests

## Questions

* If you have any questions send me an email at ${answers.email}

* If you would like to visit my github profile https://github.com/${answers.gitHubUserName}
`
 ;