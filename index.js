const inquirer = require('inquirer');
const readmeGuide = require('./assets/readme-guide');

const { writeFile } = require('fs').promises;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your github project? (Required)',
      name: 'title',
      validate: (title) => {
        if (title) {
          return true;
        }
        else {
          console.log('You need to enter a github project name!');
          return false;
        }
      }
    },
    {
      type: "input",
      message: "What is the description of your github project?",
      name: "description",
      validate: (description) => {
        if (description) {
          return true;
        }
        else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },
    {
      type: "input",
      message: "What is your GitHub Username? (Required)",
      name: "userName",
      validate: (userName) => {
        if (userName) {
          return true;
        }
        else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: "input",
      message: "Please enter your GitHub repositary name! (Required)",
      name: "repoName",
      validate: (repoName) => {
        if (repoName) {
          return true;
        }
        else {
          console.log('Please enter your GitHub repositary name!');
          return false;
        }
      }
    },
    {
      type: "input",
      message: "What is your email address? (Required)",
      name: "email",
      validate: (email) => {
        if (email) {
          return true;
        }
        else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: "input",
      message: "Your project needs detailed step-by-step installation instructions. (Required)",
      name: "installation",
      validate: (installation) => {
        if (installation) {
          return true;
        }
        else {
          console.log('Please enter detailed step-by-step installation instructions!');
          return false;
        }
      }
    },
    {
      type: "input",
      message: "Please enter instructions and examples!. (Required)",
      name: "usage",
      validate: (usage) => {
        if (usage) {
          return true;
        }
        else {
          console.log('Please enter instructions and examples!');
          return false;
        }
      }
    },
    {
      type: "list",
      message: "Which license will you use for your project?",
      name: "license",
      choices: ['Academic Free License', 'Apache License', 'Eclipse Public License', 'MIT', 'No License']
    },
    {
      type: "input",
      message: "What can you do to contribute to this project? (Required)",
      name: "contributing",
      validate: (contributing) => {
        if (contributing) {
          return true;
        }
        else {
          console.log('Please enter guidelines for contributing!');
          return false;
        }
      }
    },
    {
      type: "input",
      message: "Provide instructions for testing the Terminal Application! (Required)",
      name: "tests",
      validate: (tests) => {
        if (tests) {
          return true;
        }
        else {
          console.log('Please enter instructions for testing!');
          return false;
        }
      }
    },
  ]).then((answers) =>
    writeFile('README.md', generateReadme(answers)))
  .then(() => console.log('Successfully generate to README.md'));


