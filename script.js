const inquirer = require("inquirer")
const fs = require("fs")
const generate = require("./Utilities/generate")

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
        message: "Briefly describe your project."
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
        message: "How do you use your project or app?"
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
    },
    {
        type: "list",
        name: "license",
        choices: ["none", "MIT", "Creative Commons V1.0 Universal", "Mozilla Public License 2.0"],
        message: "Which License governs the use of your project?"
    },
    {
        type: "input",
        name: "copyyear",
        message: "What year is it?"
    },
    {
        type: "input",
        name: "copyowner",
        message: "Who holds the copyright for this project?"
    }
])
.then((data) => {
    const license = `${data.license}`
    const fileName = `${data.title.toLowerCase().split(" ").join("")}README.md`;
    const content = generate.generateMarkdown(data)

    fs.writeFile(`Output/${fileName}`, content, (err) => {
        err ? console.log(err):console.log("README created. Have a nice day.")
    })
})