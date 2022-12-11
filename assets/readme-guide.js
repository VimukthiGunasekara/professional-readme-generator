// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//Create a function to generate markdown for README
function generateReadme(data){
    return`# ${data.title}
        
## 🌟[Description](#table-of-contents)
${data.description}
         
License is ${(data.license)}
## Table-of-Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [FAQs](#faqs)
     
## ⚙️ [Installation](#table-of-contents)
${data.installation}
     
## 💯 [Usage](#table-of-contents)
${data.usage}
         
## 📑 [license](#table-of-contents)
${(data.license)}

## 🤝 [Contributing](#table-of-contents)
We are open to all kinds of contributions. If you want to:
* 🤔 Suggest a feature
* 🐛 Report an issue
* 📖 Improve documentation
* 👨‍💻 Contribute to the code

${data.contributing}
     
Feel free to check [issues page](https://github.com/${data.userName}/${data.repoName}/issues) 
     
## 🚀[Tests](#table-of-contents)
${data.tests}
     
## 🤔 [faqs](#table-of-contents)
Please contact me using the following links:

[GitHub](https://github.com/${data.userName}) / [Email: ${data.email}](mailto:${data.email})`;
}

module.exports = { generateReadme };
