const inquirer = require("inquirer")
const fs = require("fs")

inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project called?"
    },
    {
        type: "input",
        name: "description",
        message: "Briefly describe your project. What does it do? Why was it created? What is its purpose?"
    },
    {
        type: "input",
        name: "deployed",
        message: "If your project is deployed, please enter its URL. If not, please leave this blank."
    },
    {
        type: "input",
        name: "install",
        message: "How do you install your project? How do you run it?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project? What does a user need to know to get full use out of it?"
    },
    {
        type: "input",
        name: "screenshot",
        message: "If you have a screenshot or demo of your project in action, list its relative path here."
    },
    {
        type: "input",
        name: "credits",
        message: "Describe, who, if anyone, helped or contributed to this project."
    }
])
.then((data) => {
    const fileName = `${data.title.toLowerCase().split(" ").join("")}README.md`;
    const content = `
    
    # ${data.title}

    ## Description 
    
    ${data.description}
    
    
    ## Table of Contents (Optional)
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    
    
    ## Installation
    
    ${data.install}
    
    ## Usage 
    
   ${data.usage}
    
   [demo](${data.screenshot})
    
    
    ## Credits
    
    ${data.credits}
    
    
    ## License
    
    Content in this project is governed under the ${data.license} license, outlined in the included LICENSE document. `

    fs.writeFile(fileName, content, (err) => {
        err ? console.log(err):console.log("README created. Have a nice day.")
    })
})