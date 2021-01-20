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
        message: "How do you install your project?"
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
        message: "Please list any acknowledgments here."
    },
    {
        type: "confirm",
        name: "addcredit",
        message: "Would you like to add a contributor?"
    },
    {
        type: "input",
        name: "teammate",
        message: "Please list the name, role, and github profile of your colleague here. Make sure to use [text](url) format for any links."
    },
    {
        type: "confirm",
        name: "addagain",
        message: "Would you like to add another contributor?"
    },
    {
        type: "input",
        name: "contributing",
        message: "How do you want others to be able to contribute to your project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is a good email address for others to contact you with questions?"
    },
    {
        type: "input",
        name: "tests",
        message: "If you've written any tests for your application, please list how to run them here."
    },
    {
        type: "list",
        name: "license",
        choices: ["none", "MIT", "Creative Commons V1.0 Universal", "Mozilla Public License 2.0", "GNU General V3.0", "BSD 2-Clause", "BSD 3-Clause", "Boost Software 1.0", "Eclipse Publice 2.0", "GNU Affero General v3.0", "GNU General v2.0", "GNU Lesser General v2.1", "The Unlicense"],
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
    const fileName = `${data.title.toLowerCase().split(" ").join("")}README.md`;
    const content = generate.generateMarkdown(data);

    fs.writeFile(`Output/${fileName}`, content, (err) => {
        err ? console.log(err):console.log("README created. Have a nice day.")
    })
})