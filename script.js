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
        message: "Please list any acknowledgments here. If others contributed to your work, be sure to link to their github profiles."
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
        choices: ["none", "MIT", "CCLv1.0", "MPL2.0", "GNU3.0", "Unlicense"],
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