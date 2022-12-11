function generateReadme(data) {
    return `
    # ${data.title}
        
    ## ℹ️ [Description](#table-of-contents)
    ${data.description}
    
    ${(data.license)}
    ## Table-of-Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    ${(data.license)}
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## ⚙️ [Installation](#table-of-contents)
    ${data.installation}

    ## 💯 [Usage](#table-of-contents)
    ${data.usage}
    
    For more information on how to add screenshots for examples, visit the following website:
    
    [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
    
    ${(data.license)}
    ## 🤝 [Contributing](#table-of-contents)
    Contributions, issues and feature requests are welcome!
    ${data.contributing}

    Feel free to check [issues page](https://github.com/${userName}/${repoName}/issues) 

    ## [Tests](#table-of-contents)
    ${data.tests}

    ## 🤔 [Questions](#table-of-contents)
    Please contact me using the following links:
    [GitHub](https://github.com/${data.userName})
    [Email: ${data.email}](mailto:${data.email})
  `;
  }