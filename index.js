// Include packages needed for this application

const inquirer = require('inquirer');
const readmeGuide = require('./assets/readme-guide');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your github project? (Required)',
    name: 'title',
    validate: (title) => {
      if (title) {
        return true;
      }
      else {
        console.log('Please enter a github project name!');
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
        console.log('Please enter a project description!');
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
];

// function to write README file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('README.md', fileContent, err => {
          if (err) {
              reject(err);
              return;
          }

          resolve({
              ok: true,
              message: 'Successfully generate to README.md!'
          });
      });
  });
};

// Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init().then(readmeData => {
  console.log(readmeData);
  return readmeGuide.generateReadme(readmeData);
})
.then(pageMD => {
  return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
});


