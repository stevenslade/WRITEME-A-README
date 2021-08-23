//I DID NOT USE THE PROVIDED METHOD
//Using the three functions to determine the the license code semed very repetitious
//I gave the user choices with inquirer and since I know those options
//I don't need to do a look up, I know the options they have and with a single switch statement 
//I can get get the result I need and return it

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 switch(license) {
    case 'MIT':
      console.log('switchLicense:', license);
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

 return licenseSection;

  
  //return `# ${data.title}


  
//`;
}

module.exports = {
  generateMarkdown
};
